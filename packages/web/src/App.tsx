import { useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import AppPasswordInput from './molecules/AppPasswordInput'

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
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="max-w-md mx-auto">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <AppPasswordInput
              label="Testing"
              // placeholder="meeeee"
              {...field} // Pass field props which includes value and onChange
              // error={errors.email?.message}
            />
          )}
        />
      </form>
    </div>
  )
}

export default App
