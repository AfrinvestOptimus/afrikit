import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from '@expo-google-fonts/manrope'
import './global.css'

import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { useForm } from 'react-hook-form'
import { Alert, Appearance, Pressable, SafeAreaView, Text, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import { FormData } from './types/atoms'

import { useState } from 'react'
import AppText from './atoms/AppText'
import AppTitle from './atoms/AppTitle'
import AppPasswordInput from './molecules/AppPasswordInput'
import AppBSheet from './molecules/AppBSheet'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const { colorScheme } = useColorScheme()
  const { setColorScheme } = Appearance
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
          <View className="items-center justify-center flex-1">
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text className="">App Bottom sheet</Text>
            </Pressable>
          </View>

          <AppBSheet
            showModal={modalVisible}
            setShowModal={setModalVisible}
            index={2}
            isSwipeable={true}
            title={{
              text: 'Choose autosave sources',
              align: 'left',
              subtitle: 'We’ll try your wallet and other linked sources',
            }}
            actionButton={{
              text: 'Got it',
              action: () => {
                setModalVisible(false)
              },
            }}>
            <View>
              <View className="">
                <AppTitle title="App Bottom Sheet" />
                <AppText
                  size={1}
                  align={'left'}
                  color={'red9'}
                  weight={'medium'}
                  className={'pb-md'}
                  highContrast>
                  This is a bottom sheet modal that can be used to display content that is not
                  critical to the user.
                </AppText>
                <AppPasswordInput
                  control={control}
                  register={register}
                  setValue={setValue}
                  errors={errors}
                />
              </View>
            </View>
          </AppBSheet>
          <StatusBar style="dark" backgroundColor="red" />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
