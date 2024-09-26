import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import AppInput from './molecules/AppInput'

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
        <AppInput
          label="Testing"
          control={control}
          name="email"
          rules={{ required: 'email is required' }}
          placeholder="email"
          type="email"
          value={getValues('email')}
          // error={errors.username?.message}
          onClear={handleClearEmail}
        />
      </form>
    </div>
  )
}

export default App
