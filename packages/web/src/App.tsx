import { useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'

import 'remixicon/fonts/remixicon.css'
import AppButton from './components/molecules/AppButton'
import DropdownMenu from './components/molecules/AppDropdownMenu'
import AppPhoneInput from './components/molecules/AppPhoneInput'

interface FormData {
  email: string
}

function App() {
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    // Urgent Update
    setCount(count => count + 1)

    // Start a non-urgent update
    startTransition(() => {
      // Simulating a heavy computation
      const startTime = Date.now()
      while (Date.now() - startTime < 100) {
        // Artificial delay
      }
      setCount(count => count + 1)
    })
  }

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
    <div className="flex justify-center items-center min-h-screen">
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

      <AppButton text="Continue" color="accent" />
      <DropdownMenu />
      <div>
        <AppButton text="Continue" color="accent" />
      </div>
    </div>
  )
}

export default App
