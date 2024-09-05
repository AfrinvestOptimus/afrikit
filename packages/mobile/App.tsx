import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from '@expo-google-fonts/manrope'
import './global.css'

import { StatusBar } from 'expo-status-bar'
import { useForm } from 'react-hook-form'
import { Alert, Pressable, SafeAreaView, Text, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import { FormData } from './types/atoms'

import { useState } from 'react'
import AppBSheet from './molecules/AppBSheet'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-remix-icon'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Manrope400: Manrope_400Regular,
    Manrope500: Manrope_500Medium,
    Manrope600: Manrope_600SemiBold,
    Manrope700: Manrope_700Bold,
  })
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>()

  if (!fontsLoaded || fontError) {
    return null
  }

  const SHOW_STORYBOOK = true
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />
  }

  // Define your icon press handlers
  const handleLeftIconPress = () => {
    Alert.alert('Left icon pressed')
  }

  const handleRightIconPress1 = () => {
    Alert.alert('Right icon 1 pressed')
  }

  const handleRightIconPress2 = () => {
    Alert.alert('Right icon 2 pressed')
  }

  const handleRightIconPress3 = () => {
    Alert.alert('Right icon 3 pressed')
  }

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  return (
    <GestureHandlerRootView className={'flex-1'}>
      <BottomSheetModalProvider>
        <SafeAreaView className="flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4">
          <View className="items-center justify-center flex-1">
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text className="">App Bottom sheet</Text>
            </Pressable>
          </View>

          <AppBSheet
            showModal={modalVisible}
            setShowModal={setModalVisible}
            isSwipeable={true}
            backdropClose={true}
            isDetached={true}
            title="You’ve reached 50% of your goal"
            icon={<Icon name={'search-line'} size="76" color="#000" />}
            content={
              'What a satisfying feeling, and it doesn’t need to stop there. Keep going to hit your target.'
            }
            actionButton={{
              text: 'Keep Going',
              action: () => {
                setModalVisible(false)
              },
            }}
            secondaryActionButton={{
              text: 'I got this',
              action: () => {
                setModalVisible(false)
              },
            }}
          />
          <StatusBar style="dark" backgroundColor="red" />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
