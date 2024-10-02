import { useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import 'remixicon/fonts/remixicon.css'
import AppButton from './components/molecules/AppButton'
import AppCodeInput from './components/molecules/AppCodeInput'
import DropdownMenu from './components/molecules/AppDropdownMenu'
import AppTopBar from './molecules/AppTopBar'
import AppPhoneInput from './components/molecules/AppPhoneInput'

interface FormData {
  email: string
}

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
    <div className="flex justify-center items-center min-h-screen bg-light-page-bg2 dark:bg-dark-page-bg2 font-sans">
      <AppTopBar
        theme="ghost"
        isOnboarding={false}
        pageTitle="Page title"
        subtitle="Find all your payment transactions here"
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

      <AppButton text="Continue" color="accent" />
      <DropdownMenu />
    </div>
  )
}

export default App
