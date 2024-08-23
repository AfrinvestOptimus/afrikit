import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, View, Appearance } from 'react-native'
import './global.css'
import Icon from 'react-native-remix-icon'
import colors from '../shared/colors'
import StorybookUIRoot from './.storybook'
import { useColorScheme } from 'nativewind'

export default function App() {
  const { colorScheme } = useColorScheme()
  const { setColorScheme } = Appearance
  const SHOW_STORYBOOK = false
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />
  }

  return (
    <View
      className={'justify-center items-center flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4'}>
      <Icon
        name="ri-home-wifi-line"
        size="24"
        color={colorScheme === 'light' ? colors.light.cyan9 : colors.dark.red9}
      />
      <Text className={'text-light-optiblue9 dark:text-dark-optiblue11'}>
        You can test your components on this screen!
      </Text>

      <Pressable
        onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        className={'bg-light-error9 dark:bg-dark-accent9 px-md py-sm rounded-lg mt-2xl'}>
        <Text className="text-light-contrast-accent">Set Colorscheme</Text>
      </Pressable>
      <StatusBar style="dark" backgroundColor="red" />
    </View>
  )
}
