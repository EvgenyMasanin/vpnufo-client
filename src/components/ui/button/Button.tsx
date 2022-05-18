import { FC } from 'react'
import { Button as ButtonUi, ButtonProps } from '@chakra-ui/react'

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonUi
      background="linear-gradient(135.29deg, #EBC07D -1.97%, #CE7E00 100.91%)"
      boxShadow="7px 15px 19px rgba(206, 126, 0, 0.2)"
      borderRadius="55px"
      padding="24px 34px"
      textTransform="uppercase"
      fontSize="18px"
      lineHeight="27px"
      fontWeight={700}
      letterSpacing="0.1em"
      _hover={{ bg: 'linear-gradient(135.29deg, #f8d295 -1.97%, #e69a22 100.91%)' }}
      _active={{}}
      {...props}
    >
      {children}
    </ButtonUi>
  )
}
