import { BottomSheetModal } from '@gorhom/bottom-sheet'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useColorScheme } from 'nativewind'
import React, { useCallback, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import colors from '../../../shared/colors'
import AppText from '../../atoms/AppText'
import AppBottomSheet from '../AppBottomSheet'
import AppButton from '../AppButton'
import AppHintText from '../AppHintText'
import IconTemp from '../AppIcon'

export type AppDateInputProps = {
  label: string
  state?: 'default' | 'disabled'
  hasError?: boolean
  errorText?: string
  hintText?: string
  onDateChange?: (value: Date) => void
  renderConfirmButton?: () => React.ReactNode
}

const AppDateInput: React.FC<AppDateInputProps> = ({
  label,
  state = 'default',
  hasError = false,
  errorText = '',
  hintText = '',
  onDateChange,
  renderConfirmButton, // Destructure the new prop
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [showPicker, setShowPicker] = useState(false)

  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const handleOpenBottomSheet = useCallback(() => {
    if (state !== 'disabled') {
      setIsBottomSheetOpen(true)
      bottomSheetRef.current?.present()
      setShowPicker(true)
    }
  }, [state])

  const handleConfirmDate = useCallback(() => {
    setIsBottomSheetOpen(false)
    bottomSheetRef.current?.dismiss()
    setShowPicker(false)
  }, [])

  const handleDateChange = useCallback(
    (event: any, date?: Date) => {
      setSelectedDate(date || new Date())
      onDateChange?.(date || new Date())
    },
    [onDateChange],
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

  const getIconColor = useCallback(() => {
    return isDarkMode ? colors.dark.type.gray.DEFAULT : colors.light.type.gray.DEFAULT
  }, [isDarkMode])

  return (
    <>
      <View>
        <TouchableOpacity
          className={`${
            hasError
              ? 'border border-light-edge-error-strong dark:border-dark-edge-error-strong'
              : 'border-none'
          }  p-md rounded-md  flex-row justify-between items-center h-[56px] ${getBackgroundStyles(
            state,
          )}`}
          accessibilityLabel={label}
          accessibilityState={{ disabled: state === 'disabled' }}
          accessibilityRole="button"
          accessibilityHint="Double tap to open date picker"
          onPress={handleOpenBottomSheet}
          disabled={state === 'disabled'}>
          <View className="flex justify-center">
            <AppText className={`text-xs font-regular ${getTextStyles(state).label}`}>
              {label}
            </AppText>
            {!!selectedDate && (
              <AppText className={`text-sm font-semibold ${getTextStyles(state).selectedValue}`}>
                {selectedDate.toDateString()}
              </AppText>
            )}
          </View>

          <View className="flex justify-center items-center">
            <IconTemp name="calendar-line" size="24" color={getIconColor()} />
          </View>
        </TouchableOpacity>

        {hasError && errorText ? (
          <AppHintText
            type="error"
            text={errorText}
            className="mt-sm"
            accessibilityHintText={errorText}
          />
        ) : null}

        {!!hintText ? (
          <AppHintText text={hintText} className="mt-sm" accessibilityHintText={hintText} />
        ) : null}

        <AppBottomSheet
          backdropClose
          index={3}
          isDetached={false}
          showModal={isBottomSheetOpen}
          setShowModal={setIsBottomSheetOpen}>
          {showPicker && (
            <View className="flex justify-center mt-md">
              <View>
                <DateTimePicker
                  value={selectedDate || new Date()}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                  disabled={state === 'disabled'}
                  themeVariant={isDarkMode ? 'dark' : 'light'}
                  accessibilityLabel="Date Picker"
                  accessibilityHint="Swipe up or down to adjust date"
                />

                {renderConfirmButton ? (
                  renderConfirmButton()
                ) : (
                  <AppButton
                    text="Confirm"
                    accessibilityLabel="Confirm Button"
                    accessibilityHint="Press to confirm selected date"
                    size={4}
                    variant="solid"
                    color="neutral"
                    highContrast
                    className="mt-3xl"
                    onPress={handleConfirmDate}
                  />
                )}
              </View>
            </View>
          )}
        </AppBottomSheet>
      </View>
    </>
  )
}

export default AppDateInput
