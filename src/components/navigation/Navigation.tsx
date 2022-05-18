import { Flex, Link, FlexProps } from '@chakra-ui/react'
import { FC } from 'react'
import { toKebabCase } from 'utils/string/toKebabCase'

export enum NavItems {
  whatIsaVPN = 'What is a VPN',
  features = 'Features',
  pricing = 'Pricing',
  FAQ = 'FAQ',
}

const navItems = [NavItems.whatIsaVPN, NavItems.features, NavItems.pricing, NavItems.FAQ]

export const Navigation: FC<FlexProps> = props => {
  return (
    <Flex justifyContent="space-between" {...props}>
      {navItems.map(navItem => (
        <Link href={`#${toKebabCase(navItem)}`} key={navItem} _hover={{ color: 'myOrange' }}>
          {navItem}
        </Link>
      ))}
    </Flex>
  )
}
