import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Appearance, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import AppTitle from './atoms/AppTitle'
import './global.css'

export default function App() {
  const { colorScheme } = useColorScheme()
  const { setColorScheme } = Appearance
  const SHOW_STORYBOOK = true
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />
  }

  return (
    <View className={'justify-center flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4 px-2xl'}>
      {/*<Icon
        name="ri-home-wifi-line"
        size="24"
        color={colorScheme === "light" ? colors.light.red9 : colors.dark.red9}
      />
      <Text className={"text-light-crimson9 dark:text-dark-crimson6 text-left"}>
        You can test your components on this screen!
      </Text>*/}

      <AppTitle
        title={'Title'}
        align={'left'}
        hasSubtitle={true}
        subtitle="Subtitle"
        spacing={1}
        titlePosition="top"
      />

      <StatusBar style="dark" backgroundColor="red" />
    </View>
  )
}
