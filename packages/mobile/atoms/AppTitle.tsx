import { memo } from 'react'
import { Text, View } from 'react-native'
import { AppTitleAtomProps } from '../types/atoms'
import classNames from '../utilities/classnames'

function AppTitle({
  title,
  subtitle,
  align = 'center',
  titlePosition = 'top',
  spacing = 1,
}: AppTitleAtomProps) {
  const spacingStyle = {
    1: '',
    2: 'gap-y-sm',
    3: 'gap-y-lg',
  }

  const titlePositionStyle = {
    top: 'flex-col',
    bottom: 'flex-col-reverse',
  }

  const alignStyle = {
    center: 'items-center',
    left: 'items-start',
  }
  return (
    <View
      className={classNames(
        '',
        alignStyle[align],
        titlePositionStyle[titlePosition],
        spacingStyle[spacing],
      )}>
      <Text className={classNames('text-light-type-gray dark:text-dark-type-gray text-2xl-bold')}>
        {title}
      </Text>
      {!!subtitle && (
        <Text className={'text-light-type-gray-muted dark:text-dark-type-gray-muted text-sm-body'}>
          {subtitle}
        </Text>
      )}
    </View>
  )
}

export default memo(AppTitle)
