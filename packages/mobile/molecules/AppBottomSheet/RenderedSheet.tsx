import { BottomSheetView } from '@gorhom/bottom-sheet'
import { isValidElement, memo } from 'react'
import { Animated, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppText } from '../../atoms'
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
    const { title, icon, content, titleProps, subtitleProps, secondaryActionButton, actionButton } =
      checkedProps as DetachedProps
    return (
      <BottomSheetView className={'px-md w-full flex-col justify-between pt-xl'}>
        {icon && isValidElement(icon) && <View className="mb-xl items-center">{icon}</View>}
        <View className="px-md items-center gap-y-sm">
          <AppText
            highContrast
            className="text-center text-2xl-bold text-light-type-gray dark:text-dark-type-gray"
            {...titleProps}>
            {title}
          </AppText>
          {content && (
            <AppText
              className="text-center text-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted"
              {...subtitleProps}>
              {content}
            </AppText>
          )}
        </View>
        {actionButton && (
          <Animated.View className="w-full px-md mt-2xl mb-xl gap-y-md">
            <AppButton
              size={4}
              text={actionButton.text}
              color={actionButton.color || 'neutral'}
              variant={actionButton.variant || 'solid'}
              highContrast={actionButton.highContrast || true}
              className={actionButton.className}
              accessibilityHint={actionButton.accessibilityHint}
              accessibilityLabel={actionButton.accessibilityLabel}
              textClassName={actionButton.textClassName}
              isLoading={actionButton.isLoading}
              {...(actionButton.iconStart && { iconStart: actionButton.iconStart })}
              {...(actionButton.iconEnd && { iconEnd: actionButton.iconEnd })}
              onPress={actionButton.action}
            />
            {secondaryActionButton && (
              <AppButton
                size={4}
                text={secondaryActionButton.text}
                color={secondaryActionButton.color || 'neutral'}
                variant={secondaryActionButton.variant || 'soft'}
                className={secondaryActionButton.className}
                accessibilityHint={secondaryActionButton.accessibilityHint}
                accessibilityLabel={secondaryActionButton.accessibilityLabel}
                isLoading={secondaryActionButton.isLoading}
                textClassName={secondaryActionButton.textClassName}
                {...(secondaryActionButton.iconStart && {
                  iconStart: secondaryActionButton.iconStart,
                })}
                {...(secondaryActionButton.iconEnd && { iconEnd: secondaryActionButton.iconEnd })}
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
              <AppText
                className={classNames(
                  'text-left text-lg-bold text-light-type-gray dark:text-dark-type-gray',
                  title.align === 'center' ? 'text-center' : 'text-left',
                )}
                {...title.titleProps}>
                {title.text}
              </AppText>
              {title.subtitle && (
                <AppText
                  className={classNames(
                    'text-left text-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted',
                    title.align === 'center' ? 'text-center' : 'text-left',
                  )}
                  {...title.subtitleProps}>
                  {title.subtitle}
                </AppText>
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
              color={actionButton.color || 'neutral'}
              variant={actionButton.variant || 'solid'}
              highContrast={actionButton.highContrast || true}
              className={actionButton.className}
              accessibilityHint={actionButton.accessibilityHint}
              accessibilityLabel={actionButton.accessibilityLabel}
              isLoading={actionButton.isLoading}
              textClassName={actionButton.textClassName}
              {...(actionButton.iconStart && { iconStart: actionButton.iconStart })}
              {...(actionButton.iconEnd && { iconEnd: actionButton.iconEnd })}
              onPress={actionButton.action}
            />
          </Animated.View>
        )}
      </BottomSheetView>
    )
  }
}

export default memo(RenderedSheet)
