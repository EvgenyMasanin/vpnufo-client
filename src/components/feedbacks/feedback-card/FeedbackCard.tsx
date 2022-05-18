import { Box, Flex, Text } from '@chakra-ui/react'
import { FC, ReactChild } from 'react'

export interface FeedbackCardProps {
  content: string
  userName: string
  date: string
  Icon: ReactChild
}

export const FeedbackCard: FC<FeedbackCardProps> = ({ content, date, Icon, userName }) => {
  return (
    <Flex
      padding="33px 50px 18px 30px"
      boxShadow="4px 4px 23px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      maxW="336px"
      fontSize="13px"
      lineHeight="20px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Text>{content}</Text>
      <Flex justifyContent="space-between" alignItems="flex-end">
        {Icon}
        <Box>
          <Text>{userName}</Text>
          <Text color="#BCBCBC">{date}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
