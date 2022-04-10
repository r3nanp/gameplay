import { StyleSheet } from 'react-native'
import { theme } from '@styles/theme'

const { fonts, colors, spacings } = theme

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  image: {
    width: '100%',
    height: 360
  },
  content: {
    marginBottom: -40
  },
  button: {
    height: 56,
    justifyContent: 'space-evenly'
  },
  iconContainer: {
    borderRightWidth: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: spacings.regular
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.hugeTitle.fontFamily,
    fontSize: fonts.hugeTitle.fontSize,
    color: colors.heading,
    marginBottom: spacings.regular
  },
  description: {
    textAlign: 'center',
    fontFamily: fonts.regular.fontFamily,
    fontSize: fonts.regular.fontSize,
    color: colors.heading,
    marginBottom: spacings.huge
  }
})
