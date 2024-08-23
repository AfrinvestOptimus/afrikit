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
const transformType = {
  success: 'success',
  error: 'danger',
  neutral: 'default',
} 

type AppToastBase = {
  position: Position
}
export const AppToastBase = ({ position = 'top' }: AppToastBase) => (
  <FlashMessage position={position} />
)
