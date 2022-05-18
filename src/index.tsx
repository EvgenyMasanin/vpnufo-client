import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { theme } from 'theme'
import { App } from './components/app'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
