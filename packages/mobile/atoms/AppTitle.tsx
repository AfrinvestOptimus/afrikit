import React from 'react'
import { memo } from 'react'
import { Text, View } from 'react-native'
import { AppTitleAtomProps } from '../types/atoms'
import classNames from '../utilities/classnames'

function AppTitle({ title, subtitle }: AppTitleAtomProps) {
  return (
    <View className="items-center" style={{ borderWidth: 1, borderColor: 'red' }}>
      <Text className="text-light-type-gray dark:text-dark-type-gray text-2xl font-bold">
        {title}
      </Text>
      {subtitle && (
        <Text className="text-light-type-gray-muted dark:text-dark-type-gray-muted text-sm">
          {subtitle}
        </Text>
      )}
    </View>
  )
}

export default memo(AppTitle)
