import { ReactElement } from 'react'
import { TouchableOpacityProps } from 'react-native'

export type ButtonProps = TouchableOpacityProps & {
  content?: string
  icon?: ReactElement
  color?: string
  isLoading?: boolean
  height?: number
  backgroundColor?: string
}
