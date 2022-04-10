interface Font {
  fontFamily: string
  fontSize: number
  color?: string
}

interface Spacings {
  small: number
  regular: number
  big: number
  huge: number
}

export interface Fonts {
  hugeTitle: Font
  bigTitle: Font
  title: Font
  regular: Font
  boldRegular: Font
  small: Font
  tiny: Font
}

export interface Colors {
  online: string
  busy: string
  away: string
  heading: string
  body: string
  primary: string
  secondary: string
  background: string
}

export interface Theme {
  colors: Colors
  fonts: Fonts
  spacings: Spacings
}
