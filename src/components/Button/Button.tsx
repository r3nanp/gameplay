import { TouchableOpacity, Text } from 'react-native'

//* CUSTOM IMPORTS
import { theme } from '@styles/theme'
import { Spinner } from '../Spinner'
import { useButtonStyles } from './button.styles'
import { ButtonProps } from './button.types'

export const Button = ({
  icon,
  content,
  style,
  height,
  backgroundColor,
  isLoading = false,
  color = theme.colors.heading,
  ...rest
}: ButtonProps) => {
  const { styles } = useButtonStyles({
    height,
    bgColor: backgroundColor,
    textColor: color
  })

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.5}
      style={[styles.container, style]}
    >
      {isLoading ? (
        <Spinner color={color} />
      ) : (
        <>
          {icon}
          {content && <Text style={styles.text}>{content}</Text>}
        </>
      )}
    </TouchableOpacity>
  )
}
