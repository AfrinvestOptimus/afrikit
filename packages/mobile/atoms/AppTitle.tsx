import { memo } from 'react'
import { Text, View } from 'react-native'
import { AppTitleAtomProps } from '../types/atoms'
import classNames from '../utilities/classnames'

function AppTitle({
  title,
  subtitle,
  align,
  titlePosition = 'top',
  spacing,
  hasSubtitle = false,
}: AppTitleAtomProps) {
  return (
    <View
      className={classNames(
        '',
        align === 'center' ? 'items-center' : 'items-start',
        titlePosition === 'top' ? 'flex-col' : titlePosition === 'bottom' ? 'flex-col-reverse' : '',
        spacing === 2 ? 'gap-y-sm' : spacing === 3 ? 'gap-y-lg' : '',
      )}>
      <Text className={classNames('text-light-type-gray dark:text-dark-type-gray text-2xl-bold')}>
        {title}
      </Text>
      {hasSubtitle && (
        <Text className={'text-light-type-gray-muted dark:text-dark-type-gray-muted text-sm-body'}>
          {subtitle}
        </Text>
      )}
    </View>
  )
}

export default memo(AppTitle)
