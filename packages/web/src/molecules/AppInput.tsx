import React, { useState } from 'react'

export interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
  type?: string
  value?: string // Accept current value
  label: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
  ({ name, placeholder, error, value, label, onChange, onClear, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e)
        setIsFocused(false)
      }
    }

    return (
      <div className="flex flex-col relative">
        <div
          className={`flex align-baseline mb-lg pr-md  rounded-[4px] ${isFocused && !error ? 'border-b-2 border-solid !border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-b-[0px] transition-all duration-400' : ''} bg-light-surface-gray ${error ? 'border-b-2 border-solid border-light-type-error dark:border-dark-type-error' : ''}`}>
          <input
            className={`form-control inputFocus2`}
            placeholder={placeholder}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            onChange={onChange}
            ref={ref}
            {...props}
            autoComplete="off"
          />
          <label
            className={`absolute inline-flex left-[11px] top-md transition-all duration-200 pt-xs
                ${value || isFocused || placeholder ? 'focusLabel' : '!text-light-type-gray-placeholder dark:text-dark-type-gray-placeholder '}`}>
            {label}
          </label>
          {value && (
            <div
              onClick={onClear}
              className="absolute right-sm top-[45%] transform -translate-y-1/2 z-20 cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.99984 17.3333C4.39746 17.3333 0.666504 13.6023 0.666504 9.00001C0.666504 4.39763 4.39746 0.666672 8.99984 0.666672C13.6022 0.666672 17.3332 4.39763 17.3332 9.00001C17.3332 13.6023 13.6022 17.3333 8.99984 17.3333ZM8.99984 7.82151L6.64281 5.46447L5.4643 6.64298L7.82134 9.00001L5.4643 11.357L6.64281 12.5355L8.99984 10.1785L11.3568 12.5355L12.5353 11.357L10.1783 9.00001L12.5353 6.64298L11.3568 5.46447L8.99984 7.82151Z"
                  fill="#60646C"
                />
              </svg>
            </div>
          )}
        </div>
        {error && <span className="text-light-type-error  text-sm">{error}</span>}
      </div>
    )
  },
)

export default AppInput
