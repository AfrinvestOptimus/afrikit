import React, { memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import { Dimensions, Text, View } from 'react-native'
import clsx from 'clsx'
import AppButton from './AppButton'

type ActionButtonProps = {
  text: string
  action: () => void
}
type TitleProps = {
  text: string
  align?: 'center' | 'left'
  subtitle?: string
}

type LiBottomSheetProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  children: React.ReactNode
  index?: number
  height?: number
  backdropClose?: boolean
  isSwipeable?: boolean
  title?: TitleProps
  actionButton?: ActionButtonProps
}

const LiBottomSheet = memo(
  /**
   * LiBottomSheet is a custom bottom sheet component that can be used to display content in a modal-like fashion.
   *
   * @param {Object} props - The props object containing the following properties:
   *   @param {boolean} showModal - Whether the bottom sheet should be shown or not.
   *   @param {function} setShowModal - A callback function used to update the showModal state.
   *   @param {number} index - The initial index of the bottom sheet. Defaults to 0.
   *   @param {string} height - The height of the bottom sheet. Defaults to 100%. Can be set as a percentage or pixel
   *   value.
   *   @param {boolean} isSwipeable - Whether the bottom sheet can be swiped to dismiss. Defaults to true.
   *   @param {boolean} backdropClose - Whether the bottom sheet can be closed by clicking outside. Defaults to false.
   *   @param {ReactNode} children - The content to be displayed inside the bottom sheet.
   *
   * @return {ReactNode} - The rendered bottom sheet component.
   */
  function LiBottomSheet({
    showModal,
    setShowModal,
    index,
    height,
    isSwipeable = true,
    backdropClose = false,
    children,
    title,
    actionButton,
  }: LiBottomSheetProps) {
    // ref
    const bottomSheetRef = useRef<BottomSheetModal>(null)
    const screenHeight = Dimensions.get('window').height
    const [contentHeight, setContentHeight] = useState(screenHeight)
    const [isClosing, setIsClosing] = useState(false)

    // variables
    const snapPoints = useMemo(() => {
      const defaultSnapPoints = ['10%', '25%', '35%', '50%', '70%', '100%']
      return height ? [`${height}px`, ...defaultSnapPoints] : defaultSnapPoints
    }, [height])

    // callbacks
    const handlePresentModalPress = useCallback(() => {
      bottomSheetRef.current?.present()
    }, [])

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1) {
          setIsClosing(true)
          setShowModal(false)
          return
        }

        const currentSnapPoint = snapPoints[index]
        let newHeight: number

        if (currentSnapPoint.endsWith('%')) {
          const percentage = parseInt(currentSnapPoint, 10)
          newHeight = (screenHeight * percentage) / 100
        } else {
          newHeight = parseInt(currentSnapPoint, 10)
        }

        setContentHeight(newHeight)
      },
      [snapPoints, screenHeight, setShowModal],
    )

    // effects
    useEffect(() => {
      if (showModal && !isClosing) {
        bottomSheetRef.current?.present()
      } else if (!showModal && !isClosing) {
        bottomSheetRef.current?.dismiss()
      }
    }, [showModal, isClosing])

    const handleDismiss = useCallback(() => {
      setIsClosing(false)
      setShowModal(false)
    }, [setShowModal])

    // renders

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          enableTouchThrough={false}
          pressBehavior={backdropClose ? 'close' : 'none'}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          style={[
            props.style,
            {
              backgroundColor: 'rgba(0, 8, 47, 0.5)',
            },
          ]}
        />
      ),
      [backdropClose],
    )

    return (
      <BottomSheetModal
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={index || 0}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enableDynamicSizing={false}
        enableHandlePanningGesture={isSwipeable}
        enablePanDownToClose={true}
        enableDismissOnClose={true}
        backdropComponent={renderBackdrop}
        animateOnMount={true}
        stackBehavior={'replace'}
        enableContentPanningGesture={false}
        keyboardBehavior={'interactive'}
        keyboardBlurBehavior={'restore'}
        onDismiss={handleDismiss}>
        <BottomSheetView style={{ height: contentHeight }} className={'pb-md'}>
          <BottomSheetScrollView
            className="flex-1 w-full bg-white px-md"
            contentContainerStyle={{ flexGrow: 1 }}>
            {title && (
              <View className="pt-xl px-md pb-md">
                <Text
                  className={clsx(
                    'text-left text-lg-bold text-light-type-gray dark:text-dark-type-gray',
                    title.align === 'center' && 'text-center',
                  )}>
                  {title.text}
                </Text>
                {title.subtitle && (
                  <Text className="text-left text-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted">
                    {title.subtitle}
                  </Text>
                )}
              </View>
            )}
            <View className="flex-1">{children}</View>
          </BottomSheetScrollView>
          {actionButton && (
            <View className="w-full px-md bg-white mb-5xl">
              <AppButton
                size={4}
                text={actionButton.text}
                color={'neutral'}
                variant={'solid'}
                highContrast
                onPress={actionButton.action}
              />
            </View>
          )}
        </BottomSheetView>
      </BottomSheetModal>
    )
  },
)

export default memo(LiBottomSheet)
