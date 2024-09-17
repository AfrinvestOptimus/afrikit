import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useColorScheme } from 'nativewind'
import React, { useCallback, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import colors from '../../../shared/colors'
import AppText from '../../atoms/AppText'
import AppBottomSheet from '../AppBottomSheet'
import AppHintText from '../AppHintText'
import IconTemp from '../AppIcon'

export type AppSelectProps = {
  label: string
  options: string[]
  state?: 'default' | 'disabled'
  hasError?: boolean
  errorText?: string
  onValueChange?: (value: string) => void
  renderItem?: (option: { value: string; index: number }) => void
}

const AppSelect: React.FC<AppSelectProps> = ({
  label,
  options,
  state = 'disabled',
  hasError = false,
  errorText = '',
  onValueChange,
  renderItem,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const bottomSheetRef = React.useRef<BottomSheetModal>(null)

  const handleOpenBottomSheet = useCallback(() => {
    if (state !== 'disabled') {
      setIsBottomSheetOpen(true)
      bottomSheetRef.current?.present()
    }
  }, [state])

  const handleSelectOption = useCallback(
    (option: string) => {
      setSelectedValue(option)
      setIsBottomSheetOpen(false)
      onValueChange?.(option)
      bottomSheetRef.current?.dismiss()
    },
    [onValueChange],
  )

  const getBackgroundStyles = useCallback(
    (state: string) => {
      if (state === 'disabled') {
        return 'bg-light-background-disable1 dark:bg-dark-background-disable1 text-light-type-gray-disabled'
      }
      return 'bg-light-surface-gray dark:bg-dark-surface-gray'
    },
    [state],
  )

  const getTextStyles = useCallback(
    (state: string) => {
      if (state === 'disabled') {
        return {
          label: 'text-light-type-gray-disabled dark:text-dark-type-gray-disabled',
          selectedValue: 'text-light-type-gray-disabled dark:text-dark-type-gray-disabled',
        }
      }
      return {
        label: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
        selectedValue: 'text-light-type-gray dark:text-dark-type-gray',
      }
    },
    [state],
  )

  const getIconColor = useCallback(
    (state: string) => {
      if (state === 'disabled') {
        return isDarkMode ? colors.dark.background.disable1 : colors.light.background.disable1
      }
      return isDarkMode ? colors.dark.type.gray.DEFAULT : colors.light.type.gray.DEFAULT
    },
    [isDarkMode, state],
  )

  const renderDefaultItem = useCallback(
    (item: string) => (
      <View className="flex flex-row justify-between items-center">
        <AppText size={3} color="gray" highContrast align="left" weight="medium">
          {item}
        </AppText>
        {item === selectedValue ? (
          <IconTemp
            size="24"
            name="check-line"
            color={isDarkMode ? colors.dark.type.accent.DEFAULT : colors.light.type.accent.DEFAULT}
          />
        ) : null}
      </View>
    ),
    [selectedValue],
  )

  return (
    <>
      <View>
        <TouchableOpacity
          className={`${hasError ? 'border border-light-edge-error-strong dark:border-dark-edge-error-strong' : 'border-none'}  p-md rounded-md  flex-row justify-between items-center h-[56px] ${getBackgroundStyles(state)}`}
          onPress={handleOpenBottomSheet}
          disabled={state === 'disabled'}>
          <View className="flex justify-center">
            <AppText className={`text-xs font-regular ${getTextStyles(state).label}`}>
              {label}
            </AppText>
            {!!selectedValue && (
              <AppText className={`text-sm font-semibold ${getTextStyles(state).selectedValue}`}>
                {selectedValue}
              </AppText>
            )}
          </View>

          <View className="flex justify-center items-center">
            <IconTemp name="arrow-down-s-line" size="24" color={getIconColor(state)} />
          </View>
        </TouchableOpacity>
        {hasError && errorText ? (
          <AppHintText type="error" text={errorText} className="mt-sm" />
        ) : null}

        <AppBottomSheet
          backdropClose
          index={3}
          showModal={isBottomSheetOpen}
          setShowModal={setIsBottomSheetOpen}
          isDetached={false}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectOption(option)}
              style={{ padding: 16 }}>
              {renderItem?.({ value: option, index }) || renderDefaultItem(option)}
            </TouchableOpacity>
          ))}
        </AppBottomSheet>
      </View>
    </>
  )
}

export default AppSelect
