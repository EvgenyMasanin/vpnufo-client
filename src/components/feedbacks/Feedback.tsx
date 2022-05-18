import { Box, Center, Flex, Text, useBreakpoint } from '@chakra-ui/react'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'
import { FC } from 'react'
import { feedbacks } from 'static/feedback'
import { FeedbackCard } from './feedback-card'

export const Feedback: FC = () => {
  const isMobile = useMobileBreakpoint()

  const breakpoint = useBreakpoint()

  const isTablet = breakpoint === 'md'
  return (
    <Center>
      <Box w={isMobile ? 'full' : '80%'} px={isMobile ? 5 : 0}>
        <Text
          textAlign={isMobile ? 'center' : 'initial'}
          mb="40px"
          fontSize="48px"
          lineHeight="72px"
          textTransform="capitalize"
        >
          feedback
        </Text>
        <Flex
          justifyContent="space-around"
          gap="60px"
          flexWrap={isTablet || isMobile ? 'wrap' : 'nowrap'}
        >
          {feedbacks.slice(0, 3).map(({ id, content, Icon, date, userName }) => (
            <FeedbackCard key={id} content={content} userName={userName} Icon={Icon} date={date} />
          ))}
        </Flex>
      </Box>
    </Center>
  )
}
