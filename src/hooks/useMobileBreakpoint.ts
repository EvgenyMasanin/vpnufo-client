import { useBreakpoint } from '@chakra-ui/react'

export const useMobileBreakpoint = () => {
  const breakpoint = useBreakpoint()

  return breakpoint === 'sm' || breakpoint === 'base'
}
