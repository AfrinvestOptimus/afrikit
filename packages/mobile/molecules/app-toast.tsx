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
    duration: 2000,
  })
}

type AppToastBase = {
  position: Position
}
export const AppToastBase = ({ position = 'top' }: AppToastBase) => (
  <FlashMessage position={position} />
)
