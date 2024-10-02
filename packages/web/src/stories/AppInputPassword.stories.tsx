import { ComponentStory, Meta } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import AppInputPassword from '../components/molecules/AppInputPassword'

export default {
  title: 'AppInput',
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

const Template: ComponentStory<typeof AppInputPassword> = (args: any) => {
  const { control } = useForm()
  return <AppInputPassword control={control} {...args} />
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

export const WithClearFunctionality: ComponentStory<typeof AppInputPassword> = () => {
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
          label="Testing"
          type="email"
          // placeholder="meeeee"
          {...field} // Pass field props which includes value and onChange
          // error={errors.email?.message}
        />
      )}
    />
  )
}
