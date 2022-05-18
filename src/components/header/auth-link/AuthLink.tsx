import { Link, Text, LinkProps } from '@chakra-ui/react'
import { FC } from 'react'

export const AuthLink: FC<LinkProps> = props => {
  return (
    <Link href="/" display="inline-flex" whiteSpace="pre" {...props}>
      <Text color="#7C7C7C">Log in</Text> <Text color="white"> / </Text>
      <Text color="#FB9F0D">Join</Text>
    </Link>
  )
}
