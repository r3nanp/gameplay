import { ActivityIndicator, View } from 'react-native'

//* CUSTOM IMPORTS
import { theme } from '@styles/theme'
import { styles } from './spinner.styles'
import { SpinnerProps } from './spinner.types'

export const Spinner = ({
  size = 'small',
  color = theme.colors.primary,
  ...rest
}: SpinnerProps) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator {...rest} size={size} color={color} />
    </View>
  )
}
