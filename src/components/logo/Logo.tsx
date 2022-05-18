import { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'

import { ReactComponent as AlienIcon } from 'assets/svg/aliens/alien-1.svg'

export const Logo: FC = () => {
  return (
    <Box position="relative">
      <Box position="absolute" top="0" right="0" transform="translate(40%, -38%)" rotate="180deg">
        <AlienIcon />
      </Box>
      <Text
        textTransform="uppercase"
        color="white"
        size="24px"
        fontWeight={900}
        lineHeight="36px"
        letterSpacing="0.1em"
      >
        vpnufo
      </Text>
    </Box>
  )
}
