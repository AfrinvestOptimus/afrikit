import React, { useState } from 'react'
import DropdownListItem from './DropdownListItem'

const DropdownMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('option1')

  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
  ]

  const itemsWithDescription = [
    { label: 'Option 1', value: 'option1', description: 'Description for Option 1' },
    { label: 'Option 2', value: 'option2', description: 'Description for Option 2' },
    { label: 'Option 3', value: 'option3', description: 'Description for Option 3' },
    { label: 'Option 4', value: 'option4', description: 'Description for Option 4' },
    { label: 'Option 5', value: 'option5', description: 'Description for Option 5' },
  ]

  return (
    <div className="flex space-x-4 justify-between p-5xl">
      {/* No icon variant */}
      <div className="w-48 rounded shadow-sm">
        {items.map(item => (
          <DropdownListItem
            key={item.value}
            label={item.label}
            iconStyle="none"
            isSelected={selectedItem === item.value}
            onClick={() => setSelectedItem(item.value)}
          />
        ))}
      </div>

      {/* Dot icon variant */}
      <div className="w-48 rounded shadow-sm">
        {items.map(item => (
          <DropdownListItem
            key={item.value}
            label={item.label}
            iconStyle="dot"
            isSelected={selectedItem === item.value}
            onClick={() => setSelectedItem(item.value)}
          />
        ))}
      </div>

      {/* Color dot icon variant */}
      <div className="w-48 rounded shadow-sm">
        {items.map(item => (
          <DropdownListItem
            key={item.value}
            label={item.label}
            iconStyle="colorDot"
            isSelected={selectedItem === item.value}
            onClick={() => setSelectedItem(item.value)}
          />
        ))}
      </div>

      {/* Circle icon variant */}
      <div className="w-48  rounded shadow-sm">
        {items.map(item => (
          <DropdownListItem
            key={item.value}
            label={item.label}
            iconStyle="circle"
            isSelected={selectedItem === item.value}
            onClick={() => setSelectedItem(item.value)}
          />
        ))}
      </div>

      {/* Check icon variant with description */}
      <div className="w-64  rounded shadow-sm">
        {itemsWithDescription.map(item => (
          <DropdownListItem
            key={item.value}
            label={item.label}
            description={item.description}
            iconStyle="check"
            isSelected={selectedItem === item.value}
            onClick={() => setSelectedItem(item.value)}
          />
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu
