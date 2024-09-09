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
import { Alert, Appearance, Pressable, SafeAreaView, Text, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import { FormData } from './types/atoms'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppText from './atoms/AppText'
import AppIcon from './molecules/AppIcon'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Manrope400: Manrope_400Regular,
    Manrope500: Manrope_500Medium,
    Manrope600: Manrope_600SemiBold,
    Manrope700: Manrope_700Bold,
  })
  const { setColorScheme, getColorScheme } = Appearance
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>()

  if (!fontsLoaded || fontError) {
    return null
  }

  const SHOW_STORYBOOK = false
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
          <View className="justify-center flex-1 w-full">
            <Pressable onPress={() => setModalVisible(true)}>
              <Text className="text-light-type-tomatobo text-sm-bold">Let him cook!</Text>
            </Pressable>
            <AppText size={4} color="info" weight={'bold'} align={'center'} highContrast={false}>
              Let him cook!!
            </AppText>
          </View>

          <AppBottomSheet
            showModal={modalVisible}
            setShowModal={setModalVisible}
            isSwipeable={true}
            backdropClose={true}
            index={0}
            isDetached={true}
            title={'Let him cook!'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda blanditiis dolor, ea et iste minus placeat reprehenderit suscipit unde.'
            }
            actionButton={{
              text: 'Keep Going',
              action: () => {
                setModalVisible(false)
              },
            }}>
            {Array.from({ length: 20 }).map((_, index) => (
              <View key={index} className="flex py-4">
                <Text className="text-light-type-gray text-sm-bold">Let him cook!</Text>
              </View>
            ))}
          </AppBottomSheet>
          <AppIcon name="circle-line" size="16" color="red" />

          <StatusBar style="dark" backgroundColor="red" />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
