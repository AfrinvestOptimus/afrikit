import { Meta, StoryFn } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import AppInputPassword from '../components/molecules/AppInputPassword'

export default {
  title: 'AppInputPassword',
  component: AppInputPassword,
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
  onClear: { action: 'cleared' },
} as Meta<typeof AppInputPassword>

const Template: StoryFn<typeof AppInputPassword> = args => {
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
        <AppInputPassword
          label="Password"
          // placeholder="meeeee"
          {...field} // Pass field props which includes value and onChange
          // error={errors.email?.message}
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
