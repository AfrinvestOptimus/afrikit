import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from '@expo-google-fonts/manrope'
import { StatusBar } from 'expo-status-bar'
import { Controller, useForm } from 'react-hook-form'
import { Alert, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import './global.css'
import { FormData } from './types/atoms'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppText from './atoms/AppText'
import AppTitle from './atoms/AppTitle'
import { AppToastBase } from './molecules/app-toast'
import AppBottomSheet from './molecules/AppBottomSheet'
import AppIcon from './molecules/AppIcon'
import { AppModalLoader } from './molecules/AppModalLoader'
import AppPasswordInput from './molecules/AppPasswordInput'
import { AppTopBar } from './molecules/AppTopBar'
import { GlobalWrapper } from './molecules/GlobalWrapper'
import ListItem from './molecules/list-item'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Manrope400: Manrope_400Regular,
    Manrope500: Manrope_500Medium,
    Manrope600: Manrope_600SemiBold,
    Manrope700: Manrope_700Bold,
  })
  const {
    formState: { errors },
  } = useForm<FormData>()

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
  if (!fontsLoaded || fontError) {
    return null
  }

  const SHOW_STORYBOOK = true
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />
  }

  return (
    <GestureHandlerRootView className={'flex-1'}>
      <BottomSheetModalProvider>
        <GlobalWrapper showFloatingButton={true}>
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
                color={'accent'}
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
                color={'error'}
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
                  // { label: 'Enter Email', key: 'email' },
                  // { label: 'Enter name', key: 'name' },
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
                        // control={control}
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
                <AppModalLoader visible={modalVisible} />
                <View className="justify-center flex-1 w-full">
                  <Pressable onPress={() => setModalVisible(true)}>
                    <Text className="text-light-type-tomatobo text-sm-bold">Let him cook!</Text>
                  </Pressable>
                  <AppText
                    size={4}
                    color="info"
                    weight={'bold'}
                    align={'center'}
                    highContrast={false}>
                    Let him cook!!
                  </AppText>
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

              <AppBottomSheet
                showModal={modalVisible}
                setShowModal={setModalVisible}
                isSwipeable={true}
                backdropClose={true}
                index={0}
                isDetached={true}
                title={{ text: 'Let him cook' }}
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
              <AppToastBase position={'top'} />
            </ScrollView>
          </SafeAreaView>
        </GlobalWrapper>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
