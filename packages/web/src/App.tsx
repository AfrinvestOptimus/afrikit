import { Controller, useForm } from 'react-hook-form'
import AppButton from './molecules/AppButton'
import AppCodeInput from './molecules/AppCodeInput'
import DropdownComponent from './molecules/AppDropdownMenu'
import AppPhoneInput from './molecules/AppPhoneInput'
import AppSidebar from './molecules/AppSideBar'
import AppTopBar from './molecules/AppTopBar'
import { TSideBarItem } from './types'
import { DropdownItemProps } from './types/TAppDropdownMenu'

interface FormData {
  email: string
}

const links: TSideBarItem[] = [
  {
    id: '1',
    text: 'Get started',
    icon: true,
    iconName: 'ri-map-pin-time-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '2',
    text: 'Home',
    icon: true,
    iconName: 'ri-home-6-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '4',
    text: 'Portfolio',
    icon: true,
    iconName: 'ri-bar-chart-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '5',
    text: 'Savings',
    icon: true,
    iconName: 'ri-bank-card-2-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    current: true,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Dashboard',
      },
      {
        text: 'Open Savings',
      },
      {
        text: 'Fund Wallet',
      },
    ],
  },
  {
    id: '6',
    text: 'Invest',
    icon: true,
    iconName: 'ri-copper-coin-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Nigeria Stocks',
      },
      {
        text: 'US Stocks',
      },
      {
        text: 'Commercial papers',
      },
    ],
  },
  {
    id: '7',
    text: 'Send Money',
    icon: true,
    iconName: 'ri-send-plane-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '8',
    text: 'Wallets',
    icon: true,
    iconName: 'ri-wallet-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Naira Wallet',
      },
      {
        text: 'Dollar Wallet',
      },
      {
        text: 'Main Wallet',
      },
    ],
  },
  {
    id: '9',
    text: 'Learn',
    icon: true,
    iconName: 'ri-graduation-cap-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '10',
    text: 'Support',
    icon: true,
    iconName: 'ri-lifebuoy-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '12',
    text: 'Settings',
    icon: true,
    iconName: 'ri-settings-5-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
]

//Dropdown List Items With Avatar Image
const items: DropdownItemProps[] = [
  {
    label: 'Item 1',
    hasIcon: false,
    hasAvatar: true,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
  },
  {
    label: 'Item 2',
    hasIcon: false,
    hasAvatar: true,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2'],
  },
  {
    label: 'Item 3',
    hasIcon: false,
    hasAvatar: true,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2'],
  },
  {
    label: 'Item 4',
    hasIcon: false,
    hasAvatar: true,
    showCheck: true,
    subLabel: 'SubLabel',
    state: 'active', // Must be 'active', 'disabled', or 'default'
  },
]
//Dropdown List Items with Remix icon classes
const items2: DropdownItemProps[] = [
  {
    label: 'Item 1',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
  },
  {
    label: 'Item 2',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 3',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'active',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 4',
    hasIcon: true,
    hasAvatar: false,
    showCheck: true,
    subLabel: 'SubLabel',
    state: 'active', // Must be 'active', 'disabled', or 'default'
  },
]
const items3: DropdownItemProps[] = [
  {
    label: 'Item 1',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'disabled',
    subLabel: 'SubLabel',
  },
  {
    label: 'Item 2',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'disabled',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 3',
    hasIcon: true,
    hasAvatar: false,
    showCheck: false,
    state: 'disabled',
    subLabel: 'SubLabel',
    avatarSrc: 'images/jpg/avatar1.jpeg',
    subContent: ['Sub menu 1', 'Sub menu 2', 'Sub menu 3', 'Sub menu 4', 'Sub menu 5'],
  },
  {
    label: 'Item 4',
    hasIcon: true,
    hasAvatar: false,
    showCheck: true,
    subLabel: 'SubLabel',
    state: 'disabled', // Must be 'active', 'disabled', or 'default'
  },
]

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
  })

  const handleClearEmail = () => {
    setValue('email', '') // Clear the email value
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light-page-bg2 dark:bg-dark-page-bg2 font-sans antialiased mx-auto">
      <AppSidebar links={links} />
      <AppTopBar
        theme="filled"
        isOnboarding={false}
        pageTitle="Page title"
        subtitle="Find all your payment transactions here"
        actions={true}
        buttonThree
        buttonTwo
        buttonOne={false}
        backBtn
      />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form className="max-w-md mx-auto">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AppPhoneInput
                label="Testing"
                // placeholder="meeeee"
                onInput={e => {
                  // Cast EventTarget to HTMLInputElement
                  const input = e.target as HTMLInputElement
                  // Prevent non-numeric input
                  input.value = input.value.replace(/[^0-9]/g, '')
                  field.onChange(input.value) // Update the form value
                }}
                {...field} // Pass field props which includes value and onChange
                // error={errors.email?.message}
                onClear={handleClearEmail}
              />
            )}
          />
        </form>

        <AppCodeInput
          length={6}
          errorMessage=""
          secureEntry
          // onChange={handleCodeChange}
        />

        <AppButton text="Continue" color="accent" size={4} />
        <div className="flex flex-col space-y-lg mt-md">
          <AppButton
            text="Continue"
            color="accent"
            size={4}
            onClick={() => console.log('Button click works!!!')}
          />
          {/* Dropdown List Items with Remix icon classes */}
          <DropdownComponent items={items} separator={false} showArrow={true} variant="primary" />

          {/* Dropdown List Items with Remix icon classes */}
          <DropdownComponent items={items2} separator={false} showArrow={true} variant="primary" />

          {/* Dropdown with custom trigger and Remix icon list  */}
          <DropdownComponent
            items={items2}
            separator={false}
            showArrow={true}
            variant="primary"
            trigger={<span className="cursor-pointer">Custom Trigger</span>}
          />

          <AppButton text="Continue" color="accent" />
        </div>
      </div>
    </div>
  )
}

export default App
