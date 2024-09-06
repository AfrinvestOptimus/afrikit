import { isValidElement, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { Animated, Dimensions, ScrollView, Text, View } from 'react-native'
import clsx from 'clsx'
import AppButton from '../AppButton'
import { AppBottomSheetProps, DetachedProps, RegularProps } from '../../types/molecules'
import checkBottomSheetProps from './checkBottomSheetProps'
import RenderedSheet from './RenderedSheet'

const Index = <T extends boolean>(props: AppBottomSheetProps<T>) => {
  const checkedProps = checkBottomSheetProps(props)
  // ref
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const screenHeight = Dimensions.get('window').height
  const [contentHeight, setContentHeight] = useState(screenHeight)
  const buttonAnimation = useRef(new Animated.Value(0)).current

  const { isDetached, showModal, setShowModal, backdropClose, actionButton, children, height } =
    checkedProps

  // variables
  const snapPoints = useMemo(() => {
    if (isDetached) {
      return [height ?? 300] // Use provided height or default to 300
    }
    const defaultSnapPoints = ['10%', '25%', '35%', '50%', '70%', '100%']
    return 'height' in checkedProps && height ? [height, ...defaultSnapPoints] : defaultSnapPoints
  }, [isDetached, checkedProps, height])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        setShowModal(false)
        return
      }

      const currentSnapPoint = snapPoints[index]
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

  // effects
  useEffect(() => {
    if (showModal) {
      bottomSheetRef.current?.present()
    } else {
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

  const renderContent = () => {
    if (isDetached) {
      const { title, subtitle, icon, content, secondaryActionButton } =
        checkedProps as DetachedProps
      return (
        <BottomSheetView className={'px-md w-full flex-col justify-between pt-xl'}>
          {icon && isValidElement(icon) && <View className="mb-xl items-center">{icon}</View>}
          <View className="px-md items-center gap-y-sm">
            <Text className="text-center text-2xl-bold text-light-type-gray dark:text-dark-type-gray">
              {title}
            </Text>
            {content && (
              <Text className="text-center text-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted">
                {content}
              </Text>
            )}
          </View>
          {actionButton && (
            <Animated.View className="w-full px-md mt-2xl mb-xl gap-y-md">
              <AppButton
                size={4}
                text={actionButton.text}
                color={'neutral'}
                variant={'solid'}
                highContrast
                onPress={actionButton.action}
              />
              {secondaryActionButton && (
                <AppButton
                  size={4}
                  text={secondaryActionButton.text}
                  color={'neutral'}
                  variant={'soft'}
                  onPress={secondaryActionButton.action}
                />
              )}
            </Animated.View>
          )}
        </BottomSheetView>
      )
    } else {
      const { title, isSwipeable } = checkedProps as RegularProps
      return (
        <BottomSheetView style={{ height: contentHeight }}>
          <ScrollView
            className="w-full px-md"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            {title && (
              <View className="pt-sm pb-lg gap-y-xs">
                <Text
                  className={clsx(
                    'text-left text-lg-bold text-light-type-gray dark:text-dark-type-gray',
                    title.align === 'center' ? 'text-center' : 'text-left',
                  )}>
                  {title.text}
                </Text>
                {title.subtitle && (
                  <Text
                    className={clsx(
                      'text-left text-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted',
                      title.align === 'center' ? 'text-center' : 'text-left',
                    )}>
                    {title.subtitle}
                  </Text>
                )}
              </View>
            )}
            <View className="flex-1">{children}</View>
          </ScrollView>
          {actionButton && (
            <Animated.View
              className="w-full px-md mb-5xl"
              style={{
                transform: [{ translateY: buttonTranslateY }],
              }}>
              <AppButton
                size={4}
                text={actionButton.text}
                color={'neutral'}
                variant={'solid'}
                highContrast
                onPress={actionButton.action}
              />
            </Animated.View>
          )}
        </BottomSheetView>
      )
    }
  }

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
      enableDynamicSizing={isDetached}
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
      keyboardBehavior={'interactive'}
      keyboardBlurBehavior={'restore'}
      onDismiss={() => setShowModal(false)}>
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

export default memo(Index)
