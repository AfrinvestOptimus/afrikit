import React, { useEffect, useRef } from 'react'

interface AppCodeInputProps {
  length?: number
  errorMessage?: string
  secureEntry: boolean
  onChange?: (code: string) => void
}

const AppCodeInput: React.FC<AppCodeInputProps> = ({
  length = 6,
  errorMessage,
  secureEntry = true,
  onChange,
}) => {
  useEffect(() => {
    inputs.current[0]?.focus()
  }, [])

  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    if (value) {
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus()
      }
    }

    if (value === '' && index > 0) {
      inputs.current[index - 1]?.focus()
    }

    const code = inputs.current.map(input => input?.value).join('')
    if (onChange) {
      onChange(code)
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData('text')
    const digits = pastedData.split('').slice(0, inputs.current.length)

    digits.forEach((digit, index) => {
      if (inputs.current[index]) {
        inputs.current[index].value = digit
        if (index < inputs.current.length - 1) {
          inputs.current[index + 1]?.focus()
        }
      }
    })

    const code = inputs.current.map(input => input?.value).join('')
    if (onChange) {
      onChange(code)
    }

    e.preventDefault()
  }

  return (
    <div>
      <div id="code-input" className="flex space-x-sm">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            type={secureEntry ? 'password' : 'text'}
            className={`text-lg-head h-5xl w-[62px] px-lg py-md text-center outline-none focus:outline-none appearance-none border-0 focus:ring-0 rounded-md focus:!bg-light-optiblueA3 focus:dark:bg-dark-optiblueA3 ${
              errorMessage !== ''
                ? 'text-light-type-error dark:text-dark-type-error bg-light-background-error-light dark:bg-dark-background-error-light'
                : '!text-light-type-gray dark:text-dark-type-gray !bg-light-surface-gray dark:bg-dark-surface-gray'
            }`}
            maxLength={1}
            onChange={e => handleChange(e, index)}
            onPaste={handlePaste}
            ref={el => (inputs.current[index] = el)}
            aria-invalid="false"
            aria-describedby={`code-input-error-${index}`}
          />
        ))}
      </div>
      {/* <span id={`code-input-error-${0}`} className="text-red-500 text-sm mt-2">
        {errorMessage}
      </span> */}
    </div>
  )
}

export default AppCodeInput
