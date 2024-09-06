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
import { Controller, useForm } from 'react-hook-form'
import { Alert, Appearance, Pressable, SafeAreaView, Text, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import './global.css'
import { FormData } from './types/atoms'

import { useState } from 'react'

import { ScrollView, TouchableOpacity, useColorScheme as useNativeColorScheme } from 'react-native'
import Icon from 'react-native-remix-icon'
import colors from '../shared/colors'
import './global.css'
import { AppToastBase, showToastMessage } from './molecules/app-toast'
// import KeyPad from './molecules/keypad'
import AppText from './atoms/AppText'
import AppTitle from './atoms/AppTitle'
import { AppModalLoader } from './molecules/AppModalLoader'
import AppPasswordInput from './molecules/AppPasswordInput'
import { AppTopBar } from './molecules/AppTopBar'
import ListItem from './molecules/list-item'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const { colorScheme, setColorScheme } = useColorScheme()
  const mColorScheme = useNativeColorScheme()
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

  const SHOW_STORYBOOK = true

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

  const handleKeyPress = (key: string) => {
    console.log('Key pressed:', key)
    // Handle key press logic here
  }
  const [pin, setPin] = useState('')

  if (!fontsLoaded || fontError) {
    return null
  }
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />
  }

  return (
    <SafeAreaView className="flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4">
      <ScrollView>
        <AppTopBar
          variant="small"
          title="Products"
          subtitle="Choose from a variety of products in our store"
          showLeftIcon={true}
          showRightIcon1={true}
          showRightIcon2={false}
          showRightIcon3={false}
          onLeftIconPress={handleLeftIconPress}
          onRightIconPress1={handleRightIconPress1}
          onRightIconPress2={handleRightIconPress2}
          onRightIconPress3={handleRightIconPress3}
        />
        <AppText
          size={2}
          color={'text-dark-red9'}
          weight={'regular'}
          align={'left'}
          className={'mb-2xl'}
          onPress={() => console.log('AppText pressed')}>
          Small bold text involved
        </AppText>
        <View className="flex-1 items-center justify-center">
          <Pressable onPress={handleOpenModal} className="px-4 py-2 bg-blue-600 rounded-lg">
            <Text className="text-black font-bold">Show Loader</Text>
          </Pressable>
          <AppModalLoader visible={modalVisible} />
        </View>
        <AppTitle
          title={'Title'}
          align={'left'}
          hasSubtitle={true}
          subtitle="Subtitle"
          spacing={1}
          titlePosition="top"
        />
        <AppTopBar
          variant="large-centered"
          title="Products"
          subtitle="Choose from a variety of products in our store"
          showLeftIcon={true}
          showRightIcon1={false}
          showRightIcon2={false}
          showRightIcon3={false}
          onLeftIconPress={handleLeftIconPress}
          onRightIconPress1={handleRightIconPress1}
          onRightIconPress2={handleRightIconPress2}
          onRightIconPress3={handleRightIconPress3}
        />
        <AppText
          size={2}
          color={'text-dark-red9'}
          weight={'regular'}
          align={'left'}
          className={'mb-2xl'}
          onPress={() => console.log('AppText pressed')}>
          Small bold text involved
        </AppText>
        <View className="flex-1 items-center justify-center">
          <Pressable onPress={handleOpenModal} className="px-4 py-2 bg-blue-600 rounded-lg">
            <Text className="text-black font-bold">Show Loader</Text>
          </Pressable>
          <AppModalLoader visible={modalVisible} setCloseModal={handleCloseModal} />
        </View>
        <AppTitle
          title={'Title'}
          align={'left'}
          hasSubtitle={true}
          subtitle="Subtitle"
          spacing={1}
          titlePosition="top"
        />

        <View>
          {[
            { label: 'Enter Email', key: 'email' },
            { label: 'Enter name', key: 'name' },
          ].map(item => (
            <>
              <View className="py-sm">
                <Controller
                  rules={{
                    required: {
                      value: true,
                      message: `${item?.key} is compatible with the format `,
                    },
                  }}
                  control={control}
                  key={item.key}
                  render={({ field: { onChange, onBlur, value } }) => (
                    //                 <AppInput
                    //                     value={value}
                    //                   label={item?.label}
                    //                   autoFocus={false}
                    //                   onBlur={onBlur}
                    //                   onChangeText={onChange}
                    //                   error={`${item?.key}  compatible with the format on our system`}/>

                    <AppPasswordInput
                      value={value}
                      label={item?.label}
                      autoFocus={false}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      error={`${item?.key}  compatible with the format on our system`}
                    />
                  )}
                  name={'email'}
                />
              </View>
            </>
          ))}
        </View>

        <View className={'justify-center items-center flex-1 bg-dark-red4'}>
          <Icon
            name="ri-home-wifi-line"
            // name="ri-Arrow_right"
            size="24"
            color={colorScheme === 'light' ? colors.light.cyan9 : colors.dark.red9}
          />
          <Text className={'text-light-optiblue9 dark:text-dark-optiblue11'}>
            You can test your components on this screen! •
          </Text>

          <Pressable
            onPress={() => {
              console.log('Showing Toast')
              showToastMessage({ type: 'success', message: 'Hello World!' })
            }}
            className={
              'bg-light-error9 dark:bg-dark-background-success-transparent-hover px-md py-sm rounded-lg mt-2xl'
            }>
            <Text className="text-light-contrast-accent">Show Success Toast</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log('Showing Toast')
              showToastMessage({ type: 'error', message: 'Hello World!' })
            }}
            className={
              'bg-light-error9 dark:bg-dark-background-success-transparent-hover px-md py-sm rounded-lg mt-2xl'
            }>
            <Text className="text-light-contrast-accent">Show Error Toast</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log('Showing Toast')
              showToastMessage({ type: 'neutral', message: 'Hello World!' })
            }}
            className={
              'bg-light-error9 dark:bg-dark-background-success-transparent-hover px-md py-sm rounded-lg mt-2xl'
            }>
            <Text className="text-light-contrast-accent">Show Info Toast</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log('Setting colorscheme')
              // setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
              Appearance.setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
            }}
            className={'bg-light-error9 dark:bg-dark-accent9 px-md py-sm rounded-lg mt-2xl'}>
            <Text className="text-light-contrast-accent">Set Colorscheme</Text>
          </Pressable>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} backgroundColor="red" />

          <TouchableOpacity
            // key={keyIndex}
            // onPress={() => handleKeyPress(key)}
            className={`w-[30%] h-[66] p-lg rounded-full justify-center items-center bg-light-optiblue11 mb-btn-hg-1`}
            //   className={`w-16 h-16 rounded-full justify-center items-center ${
            //     isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            //   }`}
          >
            <Text className="text-2xl">{pin}</Text>
          </TouchableOpacity>

          {/* <KeyPad type="biometric" onKeyPress={handleKeyPress} onChange={setPin} />
        <View className="p-[10]  " />
        <KeyPad type="decimal" onKeyPress={handleKeyPress} />
        <View className="p-[10]  " />
        <KeyPad type="nondecimal" onKeyPress={handleKeyPress} /> */}
          <View className="flex-1 justify-center items-center">
            {/* You can switch between 'decimal', 'nondecimal', and 'biometric' types */}
          </View>

          <View className="px-3xl w-full bg-light-page-bg dark:bg-dark-page-bg">
            <ListItem
              title="List title"
              subtitle={
                'Supporting line text lorem \nipsum dolor csadsadasdasasdasdasdsasxas \nsadsadasdasdasdas'
              }
              variant="2-line"
              leading="avatar"
              density="relaxed"
              trailing="icon"
              trailingTitle="SUbggggggggg"
              trailingSubtitle="extr"
              trailingIcon="check-line"
              trailingIconColor="red"
              separator
              // topMeta="Top"
              // subTrigger
              // bottomMeta="Bottom"
            />
            <ListItem
              title="List title"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="2-line"
              leading="brand"
              trailing="switch"
              // trailing="none"
              // separator
            />
            <ListItem
              title="List title product icon"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="2-line"
              leading="check"
              // trailing="none"
              // separator
            />
            <ListItem
              title="List title"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="2-line"
              leading="radio"
              separator
            />
            <ListItem
              title="List title"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="3-line"
              leading="flag"
              trailing="link"
              trailingContent={<Text className="text-blue-500">Text</Text>}
            />
            <ListItem
              title="List title"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="3-line"
              leading="activity"
              activity="system"
              trailing="link"
              trailingContent={<Text className="text-blue-500">Text</Text>}
            />
            <ListItem
              title="List title with trigger"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="2-line"
              leading="activity"
              activity="moneyOut"
              trailing="link"
              subTrigger
              separator
              trailingContent={<Text className="text-blue-500">Text</Text>}
            />
            <ListItem
              title="Trailing title"
              subtitle="Supporting line text lorem ipsum dolor sit amet"
              variant="3-line"
              leading="activity"
              activity="system"
              trailing="textContent"
              trailingTitle="Link"
              trailingSubtitle="sub"
              trailingIcon="ri-home-wifi-line"
              subTrigger
              trailingContent={<Text className="text-blue-500">Text</Text>}
            />
            {/* Add more ListItem components with different props as needed */}
          </View>
        </View>
        <View className="p-3xl" />
      </ScrollView>
      <AppToastBase position={'top'} />
    </SafeAreaView>
  )
}

// yarn add react-native-remix-icon@https://github.com/AfrinvestOptimus/react-native-remix-icon.git#upgrade-remix
