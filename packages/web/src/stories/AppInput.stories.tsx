import { Meta, StoryFn } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import AppInput from '../molecules/AppInput'

export default {
  title: 'AppInput',
  component: AppInput,
  //   parameters: {
  //     controls: {
  //       expanded: true,
  //     },
  //   },
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
    },
  },
  name: { control: 'text' },
  label: { control: 'text' },
  placeholder: { control: 'text' },
  error: { control: 'text' },
} as Meta<typeof AppInput>

const Template: StoryFn<typeof AppInput> = args => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      email: '',
    },
  })

  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <AppInput
          label="Testing"
          type="email"
          // placeholder="meeeee"
          {...field} // Pass field props which includes value and onChange
        />
      )}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'email',
  label: 'Email',
}

export const inputError = Template.bind({})
inputError.args = {
  name: 'email',
  label: 'Email',
  error: 'Email is required',
}

export const inputErrorFunctionality: StoryFn<typeof AppInput> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const handleClearEmail = () => {
    setValue('email', '') // Clear the email value
  }
  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <AppInput
          label="Testing"
          type="email"
          // placeholder="meeeee"
          {...field} // Pass field props which includes value and onChange
          error={'Email is required'}
          onClear={handleClearEmail}
        />
      )}
    />
  )
}

export const WithClearFunctionality: StoryFn<typeof AppInput> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const handleClearEmail = () => {
    setValue('email', '') // Clear the email value
  }
  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <AppInput
          label="Testing"
          type="email"
          // placeholder="meeeee"
          {...field}
          onClear={handleClearEmail}
        />
      )}
    />
  )
}
