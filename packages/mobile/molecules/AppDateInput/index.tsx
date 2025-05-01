import { BottomSheetModal } from '@gorhom/bottom-sheet'
import type { AndroidNativeProps, IOSNativeProps } from '@react-native-community/datetimepicker'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Platform, TouchableOpacity, View } from 'react-native'
import AppText from '../../atoms/AppText'
import AppBottomSheet from '../AppBottomSheet'
import AppButton from '../AppButton'
import AppHintText from '../AppHintText'
import IconTemp from '../AppIcon'

type DateTimePickerProps = AndroidNativeProps & IOSNativeProps

/**
 * Props for the AppDateInput component.
 */
export type AppDateInputProps = {
  /**
   * The label to display above the date input field.
   */
  label: string
  className?: string

  /**
   * The current state of the date input.
   * Options are 'default' or 'disabled'.
   * Default is 'default'.
   */
  state?: 'default' | 'disabled'

  /**
   * Flag indicating if there is an error with the date input.
   * Default is false.
   */
  hasError?: boolean

  /**
   * The error message to display if hasError is true.
   * Default is an empty string.
   */
  errorText?: string

  /**
   * Optional hint text to provide additional information to the user.
   * Default is an empty string.
   */
  hintText?: string

  /**
   * Callback function that is called when the date is changed.
   * Receives the new date as a parameter.
   */
  onDateChange?: (value: Date) => void

  /**
   * Optional function to render a custom confirm button.
   * If not provided, a default confirm button will be rendered (on iOS only).
   */
  renderConfirmButton?: () => React.ReactNode

  /**
   * Initial date to display in the date picker.
   * This is optional and only used for the initial value.
   */
  selectedDate?: Date
  /**
   * Date picker props.
   */
  dateTimePickerProps?: Omit<DateTimePickerProps, 'value' | 'onChange'>
}

const isIOS = Platform.OS === 'ios'

/**
 * A date input component that displays a date picker.
 * On iOS: Shows in a bottom sheet with a confirm button to finalize selection.
 * On Android: Shows native date picker directly without bottom sheet or confirm button.
 */
const AppDateInput: React.FC<AppDateInputProps> = memo(
  ({
    label,
    state = 'default',
    hasError = false,
    errorText = '',
    hintText = '',
    onDateChange,
    renderConfirmButton,
    selectedDate,
    className,
    dateTimePickerProps = {},
  }) => {
    // Internal state for the date, using selectedDate or initialDate as initial value
    const [internalSelectedDate, setInternalSelectedDate] = useState<Date | null>(
      selectedDate || null,
    )
    const [tempDate, setTempDate] = useState<Date | null>(null)
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
    const [showPicker, setShowPicker] = useState(false)

    const bottomSheetRef = useRef<BottomSheetModal>(null)
    const { colorScheme } = useColorScheme()
    const isDarkMode = colorScheme === 'dark'

    // Update internal state if selectedDate prop changes
    useEffect(() => {
      if (selectedDate) {
        setInternalSelectedDate(selectedDate)
        if (isIOS) {
          setTempDate(selectedDate)
        }
      }
    }, [selectedDate])

    // Clean up when component unmounts or modal closes
    useEffect(() => {
      if (!isBottomSheetOpen && isIOS) {
        // If modal is closed, we don't need tempDate anymore
        setTempDate(null)
      } else if (isBottomSheetOpen && isIOS) {
        // When opening, initialize tempDate with current selection
        setTempDate(internalSelectedDate || new Date())
      }
    }, [isBottomSheetOpen, internalSelectedDate])

    const handleOpenPicker = useCallback(() => {
      if (state === 'disabled') return

      if (isIOS) {
        // iOS uses bottom sheet
        setIsBottomSheetOpen(true)
        bottomSheetRef.current?.present()
        setShowPicker(true)
      } else {
        // Android shows native picker directly
        setShowPicker(true)
      }
    }, [state])

    const handleConfirmDate = useCallback(() => {
      // Only called on iOS - update the final date from temp date
      if (tempDate) {
        setInternalSelectedDate(tempDate)
        onDateChange?.(tempDate)
      }
      setIsBottomSheetOpen(false)
      bottomSheetRef.current?.dismiss()
      setShowPicker(false)
    }, [tempDate, onDateChange])

    const handleCloseBottomSheet = useCallback(() => {
      setIsBottomSheetOpen(false)
      bottomSheetRef.current?.dismiss()
      setShowPicker(false)
    }, [])

    const handleDateChange = useCallback(
      (event: DateTimePickerEvent, date?: Date) => {
        if (!date) return

        if (isIOS) {
          // On iOS, store date temporarily until confirmed
          setTempDate(date)
        } else {
          // On Android, update immediately and close picker
          setInternalSelectedDate(date)
          onDateChange?.(date)
          setShowPicker(false) // Close Android native picker
        }
      },
      [onDateChange],
    )

    const backgroundStyles = useMemo(() => {
      if (state === 'disabled') {
        return 'bg-light-background-disable1 dark:bg-dark-background-disable1 text-light-type-gray-disabled'
      }
      return 'bg-light-surface-gray dark:bg-dark-surface-gray'
    }, [state])

    const textStyles = useMemo(() => {
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
    }, [state])

    const iconColor = useMemo(() => {
      return isDarkMode ? colors.dark.type.gray.DEFAULT : colors.light.type.gray.DEFAULT
    }, [isDarkMode])

    // Only render confirm button on iOS
    const renderConfirmSectionIfNeeded = () => {
      if (!isIOS) return null

      return renderConfirmButton ? (
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
      )
    }

    // Render Android DatePicker directly if showing
    if (!isIOS && showPicker) {
      return (
        <DateTimePicker
          value={internalSelectedDate || new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
          disabled={state === 'disabled'}
          themeVariant={isDarkMode ? 'dark' : 'light'}
          accessibilityLabel="Date Picker"
          accessibilityHint="Select date"
          {...dateTimePickerProps}
        />
      )
    }

    return (
      <View className={className}>
        <TouchableOpacity
          className={`${
            hasError
              ? 'border border-light-edge-error-strong dark:border-dark-edge-error-strong'
              : 'border-none'
          }  p-md rounded-md flex-row justify-between items-center h-[56px] ${backgroundStyles}`}
          accessibilityLabel={label}
          accessibilityState={{ disabled: state === 'disabled' }}
          accessibilityRole="button"
          accessibilityHint="Double tap to open date picker"
          onPress={handleOpenPicker}
          disabled={state === 'disabled'}>
          <View className="flex justify-center">
            <AppText className={`text-xs font-regular ${textStyles.label}`}>{label}</AppText>
            {!!internalSelectedDate && (
              <AppText className={`text-sm font-semibold ${textStyles.selectedValue}`}>
                {internalSelectedDate.toDateString()}
              </AppText>
            )}
          </View>

          <View className="flex justify-center items-center">
            <IconTemp name="calendar-line" size="24" color={iconColor} />
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

        {hintText ? (
          <AppHintText text={hintText} className="mt-sm" accessibilityHintText={hintText} />
        ) : null}

        {isIOS && (
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
                    value={tempDate || new Date()}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
                    disabled={state === 'disabled'}
                    themeVariant={isDarkMode ? 'dark' : 'light'}
                    accessibilityLabel="Date Picker"
                    accessibilityHint="Swipe up or down to adjust date"
                    {...dateTimePickerProps}
                  />

                  {renderConfirmSectionIfNeeded()}
                </View>
              </View>
            )}
          </AppBottomSheet>
        )}
      </View>
    )
  },
)

export default AppDateInput
