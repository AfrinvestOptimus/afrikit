import { useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import AppInput from './components/molecules/AppInput'
import 'remixicon/fonts/remixicon.css'
import AppButton from './components/molecules/AppButton'
import DropdownMenu from './components/molecules/AppDropdownMenu'
import AppTopBar from './molecules/AppTopBar'

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
    </div>
  )
}

export default App
