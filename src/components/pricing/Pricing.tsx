import { VFC } from 'react'
import { Box, Center, Text, useBreakpoint } from '@chakra-ui/react'
import { Button } from 'components/ui/button'
import { NavItems } from 'components/navigation'

import { PRICING_TEXT } from 'static/pricing'

import Astronaut from 'assets/svg/astronaut.svg'
import BG2 from 'assets/svg/backgrounds/bg-2.svg'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'
import { TEXT_SHADOW } from 'theme'

export const Pricing: VFC = () => {
  const isMobile = useMobileBreakpoint()
  const breakpoint = useBreakpoint()

  const isTablet = breakpoint === 'md'

  return (
    <Center
      height="1120px"
      mt={isMobile ? 0 : '-300px'}
      backgroundImage={BG2}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Box
        id={NavItems.pricing.toLowerCase()}
        w={isMobile ? '100%' : isTablet ? '85%' : '65%'}
        px={isMobile ? 5 : 0}
        h="450px"
        backgroundImage={Astronaut}
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Text
          as="h2"
          textAlign={isMobile ? 'center' : 'initial'}
          color="myOrange"
          fontSize="48px"
          lineHeight="72px"
          fontWeight={700}
        >
          FREE{' '}
          <Text as="span" color="black">
            PLAN
          </Text>
        </Text>

        <Text w={isMobile ? 'full' : '60%'} textShadow={TEXT_SHADOW}>
          {PRICING_TEXT}
        </Text>
        <Box textAlign={isMobile ? 'center' : 'initial'}>
          <Button color="white" mt="35px">
            Get it free
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
