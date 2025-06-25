import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from '@expo-google-fonts/manrope'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import StorybookUIRoot from './.storybook'
import AppText from './atoms/AppText'
import AppTitle from './atoms/AppTitle'
import './global.css'
import {
  AppInput,
  AppInputHandle,
  AppListItem,
  AppModalLoader,
  AppToastBase,
  GlobalWrapper,
} from './molecules'
import AppBottomSheet from './molecules/AppBottomSheet'
import AppIcon from './molecules/AppIcon'
import AppPasswordInput from './molecules/AppPasswordInput'
import { FormData } from './types/atoms'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [loaderModalVisible, setLoaderModalVisible] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Manrope400: Manrope_400Regular,
    Manrope500: Manrope_500Medium,
    Manrope600: Manrope_600SemiBold,
    Manrope700: Manrope_700Bold,
  })
  const inputRef = React.useRef<AppInputHandle>(null)

  const [code, setCode] = useState('')
  const {
    formState: { errors },
    control,
  } = useForm<FormData>()

  const handleOpenLoaderModal = () => {
    setLoaderModalVisible(true)
    setTimeout(() => {
      setLoaderModalVisible(false)
    }, 5000)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }
  if (!fontsLoaded || fontError) {
    return null
  }

  const SHOW_STORYBOOK = false
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />
  }

  const handleKeyPressFromKeyPad = (key: string) => {
    if (key === '←') {
      setCode(prevCode => prevCode.slice(0, -1))
    } else if (key !== '') {
      setCode(prevCode => (prevCode.length < 6 ? prevCode + key : prevCode))
    }
  }

  return (
    <GestureHandlerRootView className={'flex-1'}>
      <BottomSheetModalProvider>
        <GlobalWrapper showFloatingButton={true}>
          <SafeAreaView className="flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4">
            <ScrollView>
              {/* <AppTopBar
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
              /> */}
              <AppText
                size={2}
                color={'accent'}
                weight={'regular'}
                align={'left'}
                className={'mb-2xl'}
                onPress={() => console.log('AppText pressed')}>
                Small bold text involved
              </AppText>
              <AppText
                size={2}
                color={'accent'}
                weight={'regular'}
                align={'left'}
                className={'mb-2xl'}
                onPress={() => {
                  // Set value
                  // inputRef.current?.setValue('new value')
                  // Clear value
                  inputRef.current?.clear()
                }}>
                Test REF
              </AppText>
              <View className="flex-1 items-center justify-center">
                <Pressable
                  onPress={handleOpenLoaderModal}
                  className="px-4 py-2 bg-blue-600 rounded-lg">
                  <AppText className="text-black font-bold">Show Loader</AppText>
                </Pressable>
                <AppModalLoader visible={loaderModalVisible} />
              </View>
              <AppTitle
                title={'Title'}
                align={'left'}
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
                        render={({ field: { onChange, onBlur, value = 'Default' } }) => (
                          <>
                            <AppInput
                              value={value}
                              label={item?.label + value}
                              autoFocus={false}
                              ref={inputRef}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              hintText="my hint"
                              error={`${item?.key} ::: compatible with the format on our system`}
                            />

                            <AppPasswordInput
                              value={value}
                              label={item?.label}
                              autoFocus={false}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              hintText="my hint"
                              error={`${item?.key}  compatible with the format on our system`}
                            />
                          </>
                        )}
                        name={'email'}
                      />
                    </View>
                  </>
                ))}
              </View>

              <View className={'justify-center items-center flex-1 bg-dark-red4'}>
                <View className="justify-center flex-1 w-full">
                  <Pressable onPress={() => setModalVisible(true)}>
                    <AppText className="text-light-type-tomatobo text-sm-bold">
                      Let him cook!
                    </AppText>
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
                  <AppListItem
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
                  <AppListItem
                    title="List title"
                    subtitle="Supporting line text lorem ipsum dolor sit amet"
                    variant="2-line"
                    leading="brand"
                    trailing="switch"
                    // trailing="none"
                    // separator
                  />
                  <AppListItem
                    title="Refer a friend"
                    subtitle="Refer a friend, earn as much as N1000 on every referral"
                    variant="3-line"
                    leading="productIcon"
                    // leading="paymentMethod"
                    leadingComponent={{ name: 'user-line', size: '40' }}
                    subTrigger
                    badge={{ text: 'Up to 15% p.a', color: 'accent' }}
                    // trailing="none"
                    // separator
                  />
                  <AppListItem
                    title="List title"
                    subtitle="Supporting line text lorem ipsum dolor sit amet"
                    variant="2-line"
                    leading="radio"
                    separator
                  />
                  <AppListItem
                    title="List title"
                    subtitle="Supporting line text lorem ipsum dolor sit amet"
                    variant="3-line"
                    leading="flag"
                    trailing="link"
                    trailingContent={<AppText className="text-blue-500">Text</AppText>}
                  />
                  <AppListItem
                    title="List title"
                    subtitle="Supporting line text lorem ipsum dolor sit amet"
                    variant="3-line"
                    leading="activity"
                    activity="system"
                    trailing="link"
                    trailingContent={<AppText className="text-blue-500">Text</AppText>}
                  />
                  <AppListItem
                    title="List title with trigger"
                    subtitle="Supporting line text lorem ipsum dolor sit amet"
                    variant="2-line"
                    leading="activity"
                    activity="moneyOut"
                    trailing="link"
                    subTrigger
                    separator
                    trailingContent={<AppText className="text-blue-500">Text</AppText>}
                  />
                  <AppListItem
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
                    trailingContent={<AppText className="text-blue-500">Text</AppText>}
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
                index={2}
                isDetached={false}
                title={{ text: 'Let him cook' }}
                // title={'Let him cook'}
                content={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda blanditiis dolor, ea et iste minus placeat reprehenderit suscipit unde.'
                }
                actionButton={{
                  text: 'Keep Going',
                  action: () => {
                    setModalVisible(false)
                  },
                }}>
                <View className="bg-light-page-bg dark:bg-dark-page-bg p-md rounded-md">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <View key={index} className="flex py-4">
                      <AppText className="text-light-type-gray text-sm-bold">Let him cook!</AppText>
                    </View>
                  ))}
                </View>
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
