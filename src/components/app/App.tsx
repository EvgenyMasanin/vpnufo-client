import { Box, useColorMode } from '@chakra-ui/react'
import { FAQ } from 'components/faq'
import { Footer } from 'components/footer'
import { Pricing } from 'components/pricing'
import { AboutUs } from 'components/about-us'
import { Feedback } from 'components/feedbacks'
import { Header } from 'components/header/Header'
import { Advantages } from 'components/advantages'

export const App = () => {
  const { setColorMode } = useColorMode()
  setColorMode('light')
  return (
    <Box minH="100vh" maxW="1600px" margin="0 auto">
      <Header />
      <AboutUs />
      <Pricing />
      <Advantages />
      <Feedback />
      <FAQ />
      <Footer />
    </Box>
  )
}
