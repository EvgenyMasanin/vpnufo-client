import { VFC } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { NavItems } from 'components/navigation'
import { Article } from 'components/ui/article'
import { articles } from 'static/about-us'

import BG1Icon from 'assets/svg/backgrounds/bg-1.svg'
import WaveIcon from 'assets/svg/backgrounds/wave-bg.svg'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'

export const AboutUs: VFC = () => {
  const isMobile = useMobileBreakpoint()
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        backgroundImage={WaveIcon}
        backgroundRepeat="no-repeat"
        backgroundPosition="left bottom"
      >
        <Box px={isMobile ? 5 : 0}>
          <Article
            title={articles[0].title}
            image={articles[0].image}
            marginLeft={articles[0].marginLeft}
          >
            {articles[0].children}
          </Article>
        </Box>
        <Flex
          id={NavItems.features.toLowerCase()}
          flexDir="column"
          gap={5}
          alignItems="center"
          height="900px"
          backgroundImage={BG1Icon}
          backgroundRepeat="no-repeat"
          backgroundPosition="left bottom"
          px={isMobile ? 5 : 0}
        >
          {articles.slice(1, 3).map(({ title, image, marginLeft, children }, i) => (
            <Article key={i} title={title} image={image} marginLeft={marginLeft}>
              {children}
            </Article>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
