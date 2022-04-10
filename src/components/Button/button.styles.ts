import { theme } from '@styles/theme'
import { StyleSheet } from 'react-native'

type ButtonStyles = {
  bgColor?: string
  textColor?: string
  height?: number
}

const { colors,fonts, spacings } = theme

export const useButtonStyles = ({
  bgColor,
  height,
  textColor
}: ButtonStyles) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      height: height ?? 40,
      minWidth: 40,
      paddingHorizontal: spacings.small,
      backgroundColor: bgColor ?? colors.away
    },
    text: {
      color: textColor ?? colors.heading,
      fontFamily: fonts.regular.fontFamily,
      fontSize: fonts.regular.fontSize
    }
  })

  return { styles }
}
