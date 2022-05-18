import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'

export interface FAQItemProps {
  title: string
  content: string
}

export const FAQItem: FC<FAQItemProps> = ({ title, content }) => {
  return (
    <Box>
      <Text fontSize="24px" fontWeight={700} lineHeight="36px" mb="16px">
        {title}
      </Text>
      <Text fontSize="18px" lineHeight="27px" whiteSpace="break-spaces">
        {content}
      </Text>
    </Box>
  )
}
