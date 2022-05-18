import WorkingAlienIcon from 'assets/svg/aliens/working-alien.svg'
import UfoIcon from 'assets/svg/ufo.svg'
import LaptopIcon from 'assets/svg/laptop.svg'

import { ArticleProps } from 'components/ui/article'
import { Text } from '@chakra-ui/react'

export const articles: ArticleProps[] = [
  {
    title: 'We will make your browsing the Internet secure and anonymous.',
    image: {
      url: WorkingAlienIcon,
      alt: 'Working Alien',
    },
    children:
      'Search for information or watch your favorite shows without ads or third party tracking! With Vpnufo, your accounts are completely safe.',
  },
  {
    title: 'Features',
    image: {
      url: UfoIcon,
      alt: 'Ufo',
      imagePosition: 'right',
    },
    children: (
      <>
        With <Text as="b">Vpnufo</Text> your work will be fun and fast! And most importantly -{' '}
        <Text as="span" textDecoration="underline" color="myOrange" textShadow="none">{`it's
        free!`}</Text>{' '}
        Play, enjoy movies and chat with like-minded people without thinking that afterwards you
        will receive a bill for using the service.
      </>
    ),
    marginLeft: '10%',
  },
  {
    image: {
      url: LaptopIcon,
      alt: 'Laptop',
    },
    children:
      'We have created a unique work system for Vpnufo. Our users connect directly to each other, sharing their IP in exchange for free unlimited VPN use. This favorably distinguishes Vpnufo in the modern VPN services market.',
    marginLeft: '29%',
  },
]
