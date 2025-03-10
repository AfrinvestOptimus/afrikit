import { BottomSheetModal } from '@gorhom/bottom-sheet'
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native'
import AppText from '../../atoms/AppText'
import AppSearchInput from '../../molecules/AppSearchInput'
import AppBottomSheet from '../AppBottomSheet'
import AppHintText from '../AppHintText'
import IconTemp from '../AppIcon'

export type SelectItem = { value: string | number; label: string }

/**
 * Props for the AppSelect component.
 */
export type AppSelectProps = {
  /**
   * The label that appears above the selection field.
   */
  label: string

  /**
   * Array of options available for selection.
   */
  options: SelectItem[]

  /**
   * The state of the select input. Can be 'default' or 'disabled'.
   * Default is 'default'.
   */
  state?: 'default' | 'disabled'

  /**
   * Flag indicating if there is an error with the input.
   * Default is false.
   */
  hasError?: boolean

  /**
   * Allows users to search within the options list.
   * Default is true.
   */
  isSearchable?: boolean

  /**
   * The title displayed at the top of the options list modal.
   * Optional.
   */
  title?: string

  /**
   * An optional initial value to set as the selected option on load.
   */
  initialValue?: SelectItem | null

  /**
   * The error message text to display when hasError is true.
   * Default is an empty string.
   */
  errorText?: string

  /**
   * Hint text that provides additional information for the user.
   * Default is an empty string.
   */
  hintText?: string

  /**
   * Additional class names for customizing the container styles.
   */
  className?: string

  /**
   * Callback function that is triggered when an option is selected.
   * Returns the selected value as a SelectItem.
   */
  onValueChange?: (value: SelectItem) => void

  /**
   * Optional render function to customize how each option is displayed.
   * Takes an option object with a `value` and `index`.
   */
  renderItem?: (option: SelectItem) => React.JSX.Element | null

  /**
   * Flag to indicate if options are loading.
   * Default is false.
   */
  isLoading?: boolean

  /**
   * Optional custom loader component that is displayed when isLoading is true.
   */
  customLoader?: React.JSX.Element
}

/**
 * AppSelect is a functional component that allows users to select an option from a list
 * displayed in a modal (bottom sheet). The component supports error states, hint text,
 * and customizable render functions for displaying options.
 */
const AppSelect: React.FC<AppSelectProps> = ({
  label,
  options,
  state = 'default',
  hasError = false,
  errorText = '',
  isSearchable = true,
  hintText = '',
  title = '',
  className = '',
  initialValue = null,
  isLoading = false,
  customLoader,
  onValueChange,
  renderItem,
}) => {
  // State to manage selected value and bottom sheet visibility
  const [selectedValue, setSelectedValue] = useState<SelectItem | null>(initialValue)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Determine if the app is in dark mode
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // Ref for controlling the bottom sheet modal
  const bottomSheetRef = React.useRef<BottomSheetModal>(null)

  // Effect to update selected value when initialValue changes
  useEffect(() => {
    setSelectedValue(initialValue)
  }, [initialValue])

  // Opens the bottom sheet if the select state is not 'disabled'
  const handleOpenBottomSheet = useCallback(() => {
    if (state !== 'disabled') {
      setIsBottomSheetOpen(true)
      bottomSheetRef.current?.present()
    }
  }, [state])

  const onClear = useCallback(() => {
    setSearchQuery('')
  }, [])

  // Handles the selection of an option
  const handleSelectOption = useCallback(
    (option: SelectItem) => {
      setSelectedValue(option)
      setIsBottomSheetOpen(false)
      onValueChange?.(option)
      onClear()
      bottomSheetRef.current?.dismiss()
    },
    [onValueChange],
  )

  // Get background styles based on the component state
  const getBackgroundStyles = useCallback(
    (state: string) => {
      if (state === 'disabled') {
        return 'bg-light-background-disable1 dark:bg-dark-background-disable1 text-light-type-gray-disabled'
      }
      return 'bg-light-surface-gray dark:bg-dark-surface-gray'
    },
    [state],
  )

  // Get text styles based on the component state
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

  // Get icon color based on the component state and dark mode
  const getIconColor = useCallback(
    (state: string) => {
      if (state === 'disabled') {
        return isDarkMode ? colors.dark.background.disable1 : colors.light.background.disable1
      }
      return isDarkMode ? colors.dark.type.gray.DEFAULT : colors.light.type.gray.DEFAULT
    },
    [isDarkMode, state],
  )

  // Default render function for options if no custom render function is provided
  const renderDefaultItem = useCallback(
    (item: SelectItem) => (
      <View className="flex flex-row justify-between items-center">
        <AppText size={3} color="gray" highContrast align="left" weight="medium">
          {item.label}
        </AppText>
        {item.value === selectedValue?.value ? (
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

  const filteredOptions = useMemo(() => {
    if (isSearchable) {
      return options?.filter(option =>
        option?.label?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
      )
    }
    return options
  }, [options, isSearchable, searchQuery])

  const behaviour = useMemo(() => (Platform.OS === 'android' ? 'height' : 'padding'), [])

  return (
    <View className={className}>
      <TouchableOpacity
        accessibilityLabel={label}
        accessibilityRole="button"
        accessibilityHint="Opens selection menu"
        accessibilityState={{ disabled: state === 'disabled' }}
        accessibilityLiveRegion="polite"
        className={`${
          hasError
            ? 'border border-light-edge-error-strong dark:border-dark-edge-error-strong'
            : 'border-none'
        }  p-md rounded-md  flex-row justify-between items-center h-[56px] ${getBackgroundStyles(
          state,
        )}`}
        onPress={handleOpenBottomSheet}
        disabled={state === 'disabled'}>
        <View className="flex justify-center">
          <AppText className={`text-xs font-regular ${getTextStyles(state).label}`}>
            {label}
          </AppText>
          {!!selectedValue && (
            <AppText className={`text-sm font-semibold ${getTextStyles(state).selectedValue}`}>
              {selectedValue.label}
            </AppText>
          )}
        </View>

        <View className="flex justify-center items-center">
          <IconTemp name="arrow-down-s-line" size="24" color={getIconColor(state)} />
        </View>
      </TouchableOpacity>

      {hasError && errorText ? (
        <AppHintText
          type="error"
          text={errorText}
          accessibilityHintText={errorText}
          showIcon
          className="mt-sm"
        />
      ) : null}

      {hintText ? (
        <AppHintText accessibilityHintText={hintText} text={hintText} showIcon className="mt-sm" />
      ) : null}

      <AppBottomSheet
        backdropClose
        index={3}
        showModal={isBottomSheetOpen}
        setShowModal={setIsBottomSheetOpen}
        isDetached={false}>
        <KeyboardAvoidingView behavior={behaviour}>
          {title ? (
            <AppText
              size={3}
              weight="bold"
              color="gray"
              highContrast
              align="center"
              className="mt-xs mb-lg">
              {title}
            </AppText>
          ) : null}

          {isSearchable ? (
            <AppSearchInput
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onClear={onClear}
              className="mb-xs"
            />
          ) : null}

          {!isLoading && (
            <View className="rounded-lg bg-light-white-to-dark dark:bg-dark-white-to-dark px-lg py-sm mt-lg">
              {filteredOptions?.map((option, index) => (
                <TouchableOpacity
                  key={option.value}
                  accessibilityRole="menuitem"
                  accessibilityLabel={option.label}
                  accessibilityHint={`Select ${option}`}
                  onPress={() => handleSelectOption(option)}
                  className="py-lg">
                  {renderItem ? renderItem(option) : renderDefaultItem(option)}
                </TouchableOpacity>
              ))}
            </View>
          )}

          {isLoading && (
            <View className="rounded-lg bg-light-white-to-dark dark:bg-dark-white-to-dark px-lg py-sm mt-lg h-[280px] flex-row items-center justify-center">
              {customLoader ? (
                customLoader
              ) : (
                <AppText align="center" size={2} color="gray" highContrast weight="medium">
                  Loading ....
                </AppText>
              )}
            </View>
          )}
        </KeyboardAvoidingView>
      </AppBottomSheet>
    </View>
  )
}

export default AppSelect
