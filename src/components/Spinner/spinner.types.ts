import { ActivityIndicatorProps } from 'react-native'

export type SpinnerProps = ActivityIndicatorProps & {
  size?: number | 'large' | 'small'
  color?: string
}
