import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import { AppBottomSheetProps } from '../../types/molecules'
import checkBottomSheetProps from './checkBottomSheetProps'
import RenderedSheet from './RenderedSheet'

const AppBottomSheet = <T extends boolean>(props: AppBottomSheetProps<T>) => {
  const checkedProps = checkBottomSheetProps(props)
  // ref
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const screenHeight = Dimensions.get('window').height
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined)
  const buttonAnimation = useRef(new Animated.Value(0)).current
  const { colorScheme } = useColorScheme()

  const { isDetached, showModal, setShowModal, backdropClose, height } = checkedProps

  // variables
  const snapPoints = useMemo(() => {
    if (isDetached) {
      return [height ?? 300] // Use provided height or default to 300
    }
    const defaultSnapPoints = ['10%', '25%', '35%', '50%', '70%', '95%']
    return 'height' in checkedProps && height ? [height, ...defaultSnapPoints] : defaultSnapPoints
  }, [isDetached, checkedProps, height])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        setShowModal(false)
        return
      }

      const currentSnapPoint = snapPoints[index]

      // The sheet can report an index the provided array does not cover, so
      // bail out rather than driving the content container to an undefined
      // height.
      if (currentSnapPoint === undefined) {
        return
      }

      let newHeight: number

      if (typeof currentSnapPoint === 'string') {
        if (currentSnapPoint.endsWith('%')) {
          const percentage = parseInt(currentSnapPoint, 10)
          newHeight = (screenHeight * percentage) / 100
        } else if (isDetached) {
          // For detached mode, we'll let the content determine the height
          return
        } else {
          newHeight = parseInt(currentSnapPoint, 10)
        }
      } else {
        newHeight = currentSnapPoint
      }

      setContentHeight(newHeight)

      // Animate button
      const maxIndex = Math.max(snapPoints.length - 1, 1)
      Animated.spring(buttonAnimation, {
        toValue: index / maxIndex,
        useNativeDriver: true,
      }).start()
    },
    [setShowModal, buttonAnimation, snapPoints, screenHeight, isDetached],
  )

  const buttonTranslateY = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0], // Adjust these values to control the slide distance
  })

  /**
   * Tracks whether this sheet has actually been presented at least once.
   *
   * @gorhom/bottom-sheet v5 must NOT receive `dismiss()` before its first
   * `present()`. In v5 `handleDismiss()` has no early-exit for a sheet that has
   * never been presented, so it sets the modal's internal status to
   * `MODAL_STATUS.DISMISSING` and calls `forceClose()`. Because the sheet was
   * never mounted, `forceClose()` is a no-op and no `onClose` ever fires, so
   * nothing resets that status. `handlePortalRender()` then bails out for good:
   *
   *     if ([MODAL_STATUS.DISMISSING].includes(statusRef.current)) return
   *
   * The portal silently refuses to render from then on: `present()` appears to
   * succeed, but `onChange` never fires, nothing enters the view hierarchy and
   * no error is thrown. v4 was immune because its `handleDismiss()` early-exited
   * while `currentIndexRef` was still -1.
   */
  const isPresented = useRef(false)

  // effects
  // Layout effect so the sheet is presented in the same commit that set
  // `showModal`; v5 can miss a `present()` scheduled from a passive effect.
  useLayoutEffect(() => {
    if (showModal) {
      isPresented.current = true
      bottomSheetRef.current?.present()
    } else if (isPresented.current) {
      // Only ever dismiss a sheet we actually presented, and only once: after a
      // full dismissal v5 resets its status to INITIAL, so a stray second
      // `dismiss()` would poison the modal for the *next* open in exactly the
      // same way. `onDismiss` below clears the flag when the sheet closes itself.
      isPresented.current = false
      bottomSheetRef.current?.dismiss()
    }
  }, [showModal])

  // renders

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        pressBehavior={backdropClose ? 'close' : 'none'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        style={[
          props.style,
          {
            // backgroundColor: colorScheme === 'dark' ? colors.dark.slateA8 : colors.light.slateA8,
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        ]}
      />
    ),
    [backdropClose, colorScheme],
  )

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={isDetached ? 0 : 'index' in checkedProps ? checkedProps.index : 0}
      snapPoints={!isDetached ? snapPoints : undefined}
      onChange={handleSheetChanges}
      enableOverDrag={!isDetached}
      enableContentPanningGesture={
        !isDetached && ('isSwipeable' in checkedProps ? checkedProps.isSwipeable : true)
      }
      enableHandlePanningGesture={
        !isDetached && ('isSwipeable' in checkedProps ? checkedProps.isSwipeable : true)
      }
      enablePanDownToClose={!isDetached}
      backdropComponent={renderBackdrop}
      // Detached sheets only. For a regular sheet v5 inserts a measured-content
      // detent into the normalized list and re-sorts it, which shifts every
      // index above it: with six snap points and content under ~600dp,
      // `index={4}` resolves to 50% rather than 70%. `index` is a public prop,
      // so that silently moves existing callers' sheets.
      enableDynamicSizing={isDetached}
      android_keyboardInputMode="adjustResize"
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      backgroundStyle={[
        {
          backgroundColor:
            colorScheme === 'dark' ? colors.dark['page-bg2'] : colors.light['page-bg2'],
        },
        props.backgroundStyle,
      ]}
      handleIndicatorStyle={
        isDetached
          ? {
              display: 'none',
            }
          : undefined
      }
      style={
        isDetached
          ? {
              marginHorizontal: 16,
              borderRadius: 20,
              overflow: 'hidden',
            }
          : undefined
      }
      detached={isDetached}
      bottomInset={isDetached ? 50 : 0}
      animateOnMount={true}
      stackBehavior={'replace'}
      //
      onDismiss={() => {
        isPresented.current = false
        setShowModal(false)
      }}>
      {
        <RenderedSheet
          isDetached={isDetached}
          checkedProps={checkedProps}
          height={contentHeight}
          btnTranslateY={buttonTranslateY}
        />
      }
    </BottomSheetModal>
  )
}

export default React.memo(AppBottomSheet)
