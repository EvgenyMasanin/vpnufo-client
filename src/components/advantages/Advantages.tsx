import { VFC } from 'react'
import { Box, Center, Flex, Text } from '@chakra-ui/react'

import BG3 from 'assets/images/bg-3.png'
import { advantages } from 'static/advantages'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'
import { TEXT_SHADOW } from 'theme'

export const Advantages: VFC = () => {
  const isMobile = useMobileBreakpoint()
  return (
    <Center
      height="800px"
      backgroundImage={BG3}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="bottom left"
      alignItems="flex-start"
    >
      <Flex
        width={isMobile ? 'full' : '60%'}
        flexDir="column"
        gap="60px"
        mt="-150px"
        px={isMobile ? 5 : 0}
        textShadow={TEXT_SHADOW}
      >
        {advantages.map(({ title, content }) => (
          <Box key={title}>
            <Text
              textAlign={isMobile ? 'center' : 'initial'}
              fontSize="48px"
              lineHeight="72px"
              mb="11px"
            >
              {title}
            </Text>
            <Text>{content}</Text>
          </Box>
        ))}
      </Flex>
    </Center>
  )
}
