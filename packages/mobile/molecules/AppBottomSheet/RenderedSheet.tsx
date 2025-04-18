import { BottomSheetView } from '@gorhom/bottom-sheet'
import { isValidElement, memo } from 'react'
import { Animated, ScrollView, Text, View } from 'react-native'
import { DetachedProps, RegularProps } from '../../types/molecules'
import classNames from '../../utilities/classnames'
import AppButton from '../AppButton'

function RenderedSheet({
  isDetached,
  checkedProps,
  height,
  btnTranslateY,
}: {
  isDetached: boolean
  checkedProps: DetachedProps | RegularProps
  height: number
  btnTranslateY: Animated.AnimatedInterpolation<number | string>
}) {
  if (isDetached) {
    const { title, icon, content, secondaryActionButton, actionButton } =
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
    const { title, children, actionButton, fixedHeader } = checkedProps as RegularProps
    return (
      <BottomSheetView style={{ height }}>
        <View className="w-full px-md">
          {/* Title Section */}
          {title && (
            <View
              className={classNames(
                'pt-sm pb-lg gap-y-xs',
                title.align === 'center' ? 'items-center' : '',
              )}>
              <Text
                className={classNames(
                  'text-left text-lg-bold text-light-type-gray dark:text-dark-type-gray',
                  title.align === 'center' ? 'text-center' : 'text-left',
                )}>
                {title.text}
              </Text>
              {title.subtitle && (
                <Text
                  className={classNames(
                    'text-left text-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted',
                    title.align === 'center' ? 'text-center' : 'text-left',
                  )}>
                  {title.subtitle}
                </Text>
              )}
            </View>
          )}
          {/* Fixed Header Section */}
          {fixedHeader && <>{fixedHeader}</>}
        </View>
        {/* Scrollable Content */}
        <ScrollView
          className="w-full px-md"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          bounces={false}>
          <View className="flex-1">{children}</View>
        </ScrollView>
        {actionButton && (
          <Animated.View
            className="w-full px-md mb-5xl pb-4xl"
            style={{
              transform: [{ translateY: btnTranslateY }],
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

export default memo(RenderedSheet)
