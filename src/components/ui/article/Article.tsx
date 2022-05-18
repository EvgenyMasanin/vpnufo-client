import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'
import { FC, ReactNode } from 'react'
import { TEXT_SHADOW } from 'theme'

export interface ArticleProps {
  title?: string
  image?: { url: string; alt: string; imagePosition?: 'left' | 'right' }
  children: ReactNode
  marginLeft?: string
}

export const Article: FC<ArticleProps> = ({
  title,
  image: { url, alt, imagePosition = 'left' },
  children,
  marginLeft: ml,
}) => {
  const isMobile = useMobileBreakpoint()

  const justifyContent = isMobile ? 'center' : imagePosition === 'left' ? 'flex-start' : 'flex-end'

  const imageOrder = isMobile ? 0 : imagePosition === 'left' ? 0 : 1

  return (
    <Flex
      width={isMobile ? '100%' : '70%'}
      alignItems="center"
      justifyContent={justifyContent}
      gap="46px"
      ml={isMobile ? 0 : ml}
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
    >
      <Box order={imageOrder}>
        <Image src={url} alt={alt} />
      </Box>
      <Box flex={`0 1 ${isMobile ? 100 : 45}%`} textShadow={TEXT_SHADOW}>
        <Text
          fontSize={isMobile ? '20px' : '36px'}
          lineHeight={isMobile ? 'auto' : '46.8px'}
          mb="20px"
        >
          {title}
        </Text>
        <Text>{children}</Text>
      </Box>
    </Flex>
  )
}
