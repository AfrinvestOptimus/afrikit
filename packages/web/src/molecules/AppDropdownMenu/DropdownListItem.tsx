import React from 'react'
import { DropdownListItemProps } from '../../types/TAppDropdownMenu'

const DropdownListItem: React.FC<DropdownListItemProps> = ({
  label = 'Label',
  description,
  isSelected = false,
  iconStyle = 'none',
  onClick,
}) => {
  const renderIcon = () => {
    switch (iconStyle) {
      case 'dot':
        return (
          <i
            className={`ri-checkbox-blank-circle-fill text-sm mr-2 ${isSelected ? 'text-blue-500' : 'text-gray-300'}`}
          />
        )
      case 'check':
        return isSelected ? (
          <i className="ri-check-line text-blue-500 mr-2" />
        ) : (
          <span className="w-4 mr-2" />
        )
      case 'circle':
        return (
          <i
            className={`ri-checkbox-blank-circle-line text-lg mr-2 ${isSelected ? 'text-blue-500' : 'text-gray-300'}`}
          />
        )
      case 'colorDot':
        return (
          <span className="w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mr-2" />
        )
      default:
        return null
    }
  }

  return (
    <button
      className={`flex items-center w-full px-4 space-x-sm py-2 text-sm hover:bg-gray-100 ${
        isSelected ? 'bg-gray-50' : ''
      }`}
      onClick={onClick}>
      {renderIcon()}
      <div className="flex flex-col items-start">
        <span className="font-medium">{label}</span>
        {description && <span className="text-xs text-gray-500">{description}</span>}
      </div>
    </button>
  )
}

export default DropdownListItem
