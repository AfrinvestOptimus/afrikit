import colors from 'afrikit-shared/dist/colors'
import React, { useState } from 'react'
import useDarkMode from '../../hooks/useDarkMode'

export interface AppPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
  value?: string // Accept current value
  label: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AppPasswordInput = React.forwardRef<HTMLInputElement, AppPasswordInputProps>(
  ({ name, placeholder, error, value, label, onChange, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [colorTheme, setTheme] = useDarkMode()

    const [passwordVisible, setPasswordVisible] = useState(false)
    const handleToggle = () => {
      setPasswordVisible(!passwordVisible)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e)
        setIsFocused(false)
      }
    }

    const VisibilityIcon = (color: string) => {
      return (
        <div onClick={handleToggle} className="cursor-pointer">
          {passwordVisible ? (
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.0002 0.5C14.4936 0.5 18.2319 3.73313 19.0157 8C18.2319 12.2668 14.4936 15.5 10.0002 15.5C5.50669 15.5 1.76838 12.2668 0.984619 8C1.76838 3.73313 5.50669 0.5 10.0002 0.5ZM10.0002 13.8333C13.5298 13.8333 16.5502 11.3767 17.3147 8C16.5502 4.62336 13.5298 2.16667 10.0002 2.16667C6.47042 2.16667 3.4501 4.62336 2.68557 8C3.4501 11.3767 6.47042 13.8333 10.0002 13.8333ZM10.0002 11.75C7.92907 11.75 6.25014 10.0711 6.25014 8C6.25014 5.92893 7.92907 4.25 10.0002 4.25C12.0712 4.25 13.7502 5.92893 13.7502 8C13.7502 10.0711 12.0712 11.75 10.0002 11.75ZM10.0002 10.0833C11.1508 10.0833 12.0835 9.15058 12.0835 8C12.0835 6.84942 11.1508 5.91667 10.0002 5.91667C8.84959 5.91667 7.9168 6.84942 7.9168 8C7.9168 9.15058 8.84959 10.0833 10.0002 10.0833Z"
                fill={color}
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.78573 10.6516L6.17586 10.2202L6.83208 7.77121C5.84116 7.40621 4.93067 6.87487 4.13446 6.21121L2.34002 8.00562L1.16151 6.82713L2.95596 5.03271C1.96334 3.84196 1.26695 2.39559 0.97998 0.806859L2.62005 0.508667C3.25257 4.01054 6.31626 6.66679 10.0003 6.66679C13.6844 6.66679 16.7482 4.01054 17.3807 0.508667L19.0207 0.806859C18.7337 2.39559 18.0373 3.84196 17.0447 5.03271L18.8392 6.82713L17.6607 8.00562L15.8662 6.21121C15.07 6.87487 14.1595 7.40621 13.1686 7.77121L13.8248 10.2202L12.215 10.6516L11.5585 8.20154C11.0521 8.28829 10.5315 8.33346 10.0003 8.33346C9.46925 8.33346 8.94858 8.28829 8.44225 8.20154L7.78573 10.6516Z"
                fill={color}
              />
            </svg>
          )}
        </div>
      )
    }

    return (
      <div className="flex flex-col relative">
        <div className={`flex align-baseline mb-lg`}>
          <input
            className={` ${isFocused && !error ? 'border-b-2 border-solid !border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-b-[0px] transition-all duration-400' : ''} bg-light-surface-gray dark:bg-dark-surface-gray ${error !== undefined ? 'border-b-2 border-solid border-light-type-error rounded-b-[0px] dark:border-dark-type-error' : ''}
               bg-light-surface-gray dark:bg-dark-surface-gray text-light-type-gray dark:text-dark-type-gray outline-none rounded-md focus:outline-none focus:z-10 appearance-none w-full min-w-[415px] h-[56px] px-md pb-lg !pt-2xl border-0 focus:ring-0 text-sm-head
                peer`}
            type={passwordVisible ? 'text' : 'password'}
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
          <div className="absolute right-sm top-[45%] transform -translate-y-1/2 z-20">
            {VisibilityIcon(colors[!colorTheme ? 'dark' : 'light'].type.gray.DEFAULT)}
          </div>
        </div>
        {error && <span className="text-light-type-error  text-sm">{error}</span>}
      </div>
    )
  },
)

export default AppPasswordInput
