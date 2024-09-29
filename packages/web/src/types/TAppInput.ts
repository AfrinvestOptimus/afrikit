import { Control, RegisterOptions } from 'react-hook-form'
export interface AppInputProps {
  control: Control<HTMLFormControlsCollection> // Update with the appropriate type if known
  name: string
  rules?: RegisterOptions
  placeholder?: string
  type?: string
  value?: string // Accept current value
  label: string
  error?: string
  onClear?: () => void
}
