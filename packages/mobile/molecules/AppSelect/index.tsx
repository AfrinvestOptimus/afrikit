import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import colors from '../../../shared/colors'
import AppText from '../../atoms/AppText'
import { AppInputProps } from '../../types/atoms'
import AppBottomSheet from '../AppBottomSheet'
import IconTemp from '../AppIcon'
import AppInput from '../AppInput'

interface AppSelectProps extends Omit<AppInputProps, 'onChangeText'> {
  options: string[]
  onValueChange?: (value: string) => void
}

const AppSelect: React.FC<AppSelectProps> = ({
  options = [],
  label,
  error,
  containerStyle,
  onValueChange,
  value = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [selectedValue, setSelectedValue] = React.useState<string>(value)

  const handleOpenBottomSheet = () => {
    console.log('hhhh')

    setIsOpen(true)
  }

  const handleSelect = (option: string) => {
    console.log({ option })

    setSelectedValue(option)
    // onValueChange?.(option)
    setIsOpen(false)
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpenBottomSheet}>
        <AppInput
          {...props}
          label={label}
          value={selectedValue}
          onChangeText={() => {}}
          error={false}
          containerStyle={containerStyle}
          editable={false} // Make the input non-editable
          placeholder={label}
          rightIcon={
            <IconTemp name="arrow-down-s-line" size="24" color={colors.dark['white-to-dark']} />
          }
        />
      </TouchableOpacity>
      <AppBottomSheet
        backdropClose
        index={3}
        showModal={isOpen}
        setShowModal={setIsOpen}
        isDetached={false}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelect(option)}
            style={{ padding: 16 }}>
            <AppText size={3} color="accent">
              {option}
            </AppText>
          </TouchableOpacity>
        ))}
      </AppBottomSheet>
    </>
  )
}

export default AppSelect
