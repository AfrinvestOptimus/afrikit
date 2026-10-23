/* eslint-disable no-unused-vars */
import type { ComponentProps } from 'react'
import type RemixIcon from 'react-native-remix-icon'

/**
 * The set of icon names react-native-remix-icon accepts.
 *
 * Upstream types this as an explicit union of every icon name, so forwarding a
 * plain `string` into it no longer compiles. afrikit's own components keep
 * taking `string`, to stay source-compatible for consumers that build icon
 * names dynamically, and narrow to this type at the boundary.
 */
export type RemixIconName = ComponentProps<typeof RemixIcon>['name']
