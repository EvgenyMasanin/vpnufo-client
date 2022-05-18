import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif",
  },
  colors: {
    myOrange: '#FB9F0D',
  },
  mode: 'light',
})

export const TEXT_SHADOW =
  '0.5px 0 0.5px #fff, 0 0.5px 0.5px #fff, -0.5px 0 0.5px #fff, 0 -0.5px 0.5px #fff'
