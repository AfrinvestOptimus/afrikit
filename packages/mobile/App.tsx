import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from '@expo-google-fonts/manrope'
import './global.css'
import { AppTopBar } from './molecules/AppTopBar'

import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Controller, useForm } from 'react-hook-form'
import { Alert, Appearance, View } from 'react-native'
import StorybookUIRoot from './.storybook'
import './global.css'
 
import { AppTopBar } from './molecules/AppTopBar'
import { FormData } from './types/atoms'

import AppText from './atoms/AppText'
import AppTitle from './atoms/AppTitle'
import AppInput from './molecules/AppInput'
import { AppModalLoader } from './molecules/AppModalLoader'
import AppPasswordInput from './molecules/AppPasswordInput'


export default function App() {
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

  return (
    <View className={'justify-center flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4 px-2xl'}>
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

      <AppModalLoader visible={false} />
      <AppText
        size={2}
        color={'text-dark-red9'}
        weight={'regular'}
        align={'left'}
        className={'mb-2xl'}
        onPress={() => console.log('AppText pressed')}>
        Small bold text involved
      </AppText>

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
          <View
            className='py-sm'
          >
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
          </>
          </View>
        ))}
      </View>
      <StatusBar style="dark" backgroundColor="red" />
    </View>
  )
}
