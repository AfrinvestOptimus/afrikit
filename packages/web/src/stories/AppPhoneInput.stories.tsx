import { Meta, StoryFn } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import AppPhoneInput from '../molecules/AppPhoneInput'

export default {
  title: 'AppPhoneInput',
  component: AppPhoneInput,
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
} as Meta<typeof AppPhoneInput>

const Template: StoryFn<typeof AppPhoneInput> = args => {
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
        <AppPhoneInput
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
