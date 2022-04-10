import { Theme } from './theme.types'

export const theme: Theme = {
  fonts: {
    hugeTitle: {
      fontFamily: 'rajdhani_700',
      fontSize: 40
    },
    title: {
      fontFamily: 'rajdhani_700',
      fontSize: 28
    },
    bigTitle: {
      fontFamily: 'rajdhani_700',
      fontSize: 24
    },
    regular: {
      fontFamily: 'inter_400',
      fontSize: 16
    },
    boldRegular: {
      fontFamily: 'inter_700',
      fontSize: 18
    },
    small: {
      fontFamily: 'inter_400',
      fontSize: 15
    },
    tiny: {
      fontFamily: 'inter_400',
      fontSize: 15
    }
  },
  spacings: {
    small: 8,
    regular: 16,
    big: 24,
    huge: 64,
  },
  colors: {
    heading: '#DDE3F0',
    primary: '#E51C44',
    busy: '#D07622',
    online: '#32BD50',
    secondary: '#495BCC',
    background: '#0D133D',
    body: '#ABB1CC',
    away: '#E51C44'
  }
}
