import React, { memo, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'

type LiBottomSheetProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  children?: React.ReactNode
  index?: number
  height?: number
  backdropClose?: boolean
  isSwipeable?: boolean
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
  }: LiBottomSheetProps): ReactNode {
    // ref
    const bottomSheetRef = useRef<BottomSheetModal>(null)

    // variables
    const snapPoints = useMemo(() => {
      const snapPoints = ['10%', '25%', '35', '50%', '70%', '100%']
      return height ? [height, ...snapPoints] : snapPoints
    }, [height])

    // callbacks
    const handlePresentModalPress = useCallback(() => {
      bottomSheetRef.current?.present()
    }, [])

    const handleSheetChanges = useCallback(() => {
      // console.log("handleSheetChanges", index);
    }, [])

    // effects
    useEffect(() => {
      // console.log("snapPoints", snapPoints);
      if (showModal) {
        handlePresentModalPress()
      }
      if (!showModal) {
        bottomSheetRef.current?.dismiss()
      }
    }, [showModal])

    // renders

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          enableTouchThrough={false}
          pressBehavior={backdropClose ? 'close' : 'none'}
          disappearsOnIndex={-1}
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
        enableDynamicSizing={true}
        enableHandlePanningGesture={isSwipeable}
        enablePanDownToClose={true}
        enableDismissOnClose={true}
        backdropComponent={renderBackdrop}
        animateOnMount={true}
        stackBehavior={'replace'}
        enableContentPanningGesture={false}
        keyboardBehavior={'interactive'}
        keyboardBlurBehavior={'restore'}
        onDismiss={() => {
          setShowModal(false)
          bottomSheetRef.current?.snapToIndex(-1)
        }}>
        <BottomSheetView className={'flex-1 items-center bg-white h-[500px]'}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    )
  },
)

export default memo(LiBottomSheet)
