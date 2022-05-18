import { VFC } from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'

import FooterBg from 'assets/svg/backgrounds/footer-bg.svg'
import { Navigation } from 'components/navigation'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'

export const Footer: VFC = () => {
  const isMobile = useMobileBreakpoint()
  return (
    <Flex
      as="footer"
      backgroundImage={FooterBg}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      color="white"
      mt={10}
      px="5%"
      py="5%"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap={15}
    >
      <Text
        fontSize={isMobile ? '30px' : '58px'}
        fontWeight={900}
        lineHeight="87px"
        letterSpacing="0.05em"
      >
        vpnufo
      </Text>
      <Navigation
        flexDir={isMobile ? 'row' : 'column'}
        justifyContent={isMobile ? 'space-between' : 'inherit'}
        gap="9px"
        order={isMobile ? -1 : 0}
        w={isMobile ? 'full' : 'auto'}
        whiteSpace="nowrap"
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
      />
      <Link
        href="/"
        _hover={{ color: 'myOrange' }}
        textDecoration="underline"
        fontSize="24px"
        fontWeight={700}
        lineHeight="36px"
      >
        Contact US
      </Link>
    </Flex>
  )
}
