import { FC } from 'react'
import { Box, Center, Flex, Text, useBreakpoint } from '@chakra-ui/react'
import { Logo } from 'components/logo'
import { Button } from 'components/ui/button'
import { Navigation, NavItems } from 'components/navigation'
import { AuthLink } from './auth-link'

import { toKebabCase } from 'utils/string/toKebabCase'

import { BRAND_NAME, HEADER_TEXT } from 'static/header'

import { ReactComponent as AlienIcon } from 'assets/svg/aliens/alien-1.svg'
import HeaderBg from 'assets/svg/backgrounds/header-bg.svg'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'

export const Header: FC = () => {
  const isMobile = useMobileBreakpoint()

  return (
    <Box
      id={toKebabCase(NavItems.whatIsaVPN)}
      backgroundImage={HeaderBg}
      height={isMobile ? '600px' : '780px'}
      paddingTop={isMobile ? 5 : '65px'}
      paddingX={isMobile ? 2 : '12.375%'}
      color="white"
    >
      <Flex as="header" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Logo />
        <Navigation
          flex={`0 1 ${isMobile ? 100 : 40}%`}
          gap={4}
          mt={isMobile ? 5 : 0}
          whiteSpace="nowrap"
          order={isMobile ? 1 : 0}
        />
        <AuthLink />
      </Flex>
      <Center paddingY="80px" paddingX={isMobile ? 2 : '80px'} flexDir="column">
        <Text
          fontSize={isMobile ? '80px' : '96px'}
          lineHeight="144px"
          fontWeight={700}
          letterSpacing="0.05em"
          textTransform="uppercase"
        >
          {BRAND_NAME}
        </Text>
        <Text fontSize="24px" lineHeight="36px" textAlign="center">
          {HEADER_TEXT}
        </Text>
        <Box position="relative" mt="30px">
          <Box
            position="absolute"
            zIndex={1}
            top="0"
            right="0"
            transform="translateY(-80%) scale(1.5) rotate(-8deg)"
          >
            <AlienIcon />
          </Box>
          <Button>Get it free</Button>
        </Box>
      </Center>
    </Box>
  )
}
