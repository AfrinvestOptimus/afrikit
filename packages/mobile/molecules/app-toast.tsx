/* eslint-disable no-unused-vars */
import { View } from 'react-native'
import FlashMessage, { MessageType, Position, showMessage } from 'react-native-flash-message'
import RemixIcon from 'react-native-remix-icon'
import colors from '../../shared/colors'
import fontSizes from '../../shared/fontSizes'

export const showErrorMessage = (message: string = 'Something went wrong ') => {
  showMessage({
    message,
    type: 'danger',
    duration: 4000,
  })
}

export const showSuccessMessage = (message: string = 'Success') => {
  showMessage({
    message,
    type: 'success',
    duration: 4000,
  })
}

const dictionary = {
  type: {
    success: 'success',
    error: 'danger',
    neutral: 'default',
  },
  icon: {
    success: 'checkbox-circle-fill',
    error: 'error-warning-fill',
    neutral: 'checkbox-circle-fill',
  },
  color: {
    success: colors.dark.background.success.base.DEFAULT,
    error: colors.dark.background.error.base.DEFAULT,
    neutral: colors.dark['contrast-black'],
  },
}
const transformType = {
  success: 'success',
  error: 'danger',
  neutral: 'default',
}
type AppToastMessageOptions = {
  type: 'success' | 'error' | 'neutral'
  showIcon?: boolean
  icon?: string
  message: string
}
export const showToastMessage = ({
  type,
  icon,
  showIcon = true,
  message,
}: AppToastMessageOptions) => {
  const messageType = transformType[type] || transformType.neutral
  const iconName = dictionary.icon[type] || 'checkbox-circle-fill'
  showMessage({
    message,
    type: messageType as MessageType,
    backgroundColor: dictionary.color[type],
    style: { justifyContent: 'center', alignItems: 'center', width: '100%' },
    //@ts-expect-error fontSize should be a number
    titleStyle: {
      marginLeft: 5,
      fontSize: fontSizes['subtitle2']?.[0],
      lineHeight: fontSizes['subtitle2']?.[1],
    },
    duration: 2000,
    icon:
      !!icon || showIcon
        ? () => (
            <View style={{ backgroundColor: 'transparent' }}>
              <RemixIcon name={iconName} color={colors.light['white-to-dark']} size="20" />
            </View>
          )
        : showIcon
          ? (messageType as MessageType)
          : 'none',
  })
}

type AppToastBase = {
  position: Position
}
export const AppToastBase = ({ position = 'top' }: AppToastBase) => (
  <FlashMessage position={position} />
)
