import React, { useState } from 'react'

export interface AppPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
  value?: string
  label: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

const AppPhoneInput = React.forwardRef<HTMLInputElement, AppPhoneInputProps>(
  ({ name, placeholder, error, value, label, onChange, onClear, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e)
        setIsFocused(false)
      }
    }

    return (
      <div className="flex space-x-sm items-center">
        <div className="flex flex-col relative">
          <div className={`flex align-baseline mb-lg`}>
            <input
              className={` ${isFocused && !error ? 'border-b-2 border-solid !border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-b-[0px] transition-all duration-400' : ''} bg-light-surface-gray dark:bg-dark-surface-gray ${error !== undefined ? 'border-b-2 border-solid border-light-type-error rounded-b-[0px] dark:border-dark-type-error' : ''}
               bg-light-surface-gray dark:bg-dark-surface-gray text-light-type-gray dark:text-dark-type-gray outline-none rounded-md focus:outline-none focus:z-10 appearance-none w-full min-w-[415px] h-[56px] px-md pb-lg !pt-2xl border-0 focus:ring-0 text-sm-head
                peer`}
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
              className={`absolute inline-flex left-[11px] top-md transition-all duration-200 pt-xs text-sm-title
                peer-focus:transform 
                peer-focus:origin-top-left 
                peer-focus:translate-x-[0px] 
                peer-focus:translate-y-[-12px] 
                peer-focus:scale-100 
                peer-focus:ease-[cubic-bezier(0,_0,_0.2,_1)]
                peer-focus:text-xs-body 
                peer-focus:z-10
                ${
                  value || isFocused || placeholder
                    ? 'transform origin-top-left translate-x-[1px] translate-y-[-12px] scale-100 transition duration-200 ease-[cubic-bezier(0,_0,_0.2,_1)] text-xs-body z-10 !text-light-type-gray-muted dark:text-dark-type-gray-muted '
                    : '!text-light-type-gray-placeholder dark:text-dark-type-gray-placeholder '
                }`}>
              {label}
            </label>
          </div>
          {error && <span className="text-light-type-error  text-sm">{error}</span>}
        </div>
      </div>
    )
  },
)
export default AppPhoneInput
