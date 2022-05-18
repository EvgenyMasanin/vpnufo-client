import { FeedbackCardProps } from 'components/feedbacks/feedback-card'
import { ReactComponent as Alien2Icon } from 'assets/svg/aliens/alien-2.svg'
import { ReactComponent as Alien3Icon } from 'assets/svg/aliens/alien-3.svg'
import { ReactComponent as Alien4Icon } from 'assets/svg/aliens/alien-4.svg'

export const feedbacks: Array<FeedbackCardProps & { id: number }> = [
  {
    id: 1,
    content:
      'An excellent service for working with multiple accounts at the same time! I no longer worry that my accounts will be blocked',
    date: '29.12.2289',
    userName: 'Ufo',
    Icon: <Alien2Icon />,
  },
  {
    id: 2,
    content:
      'If not for Vpnufo, my online business would have been blown away a long time ago! Thank you guys, you are helping me earn more.',
    date: '29.12.2289',
    userName: 'Ufo',
    Icon: <Alien3Icon />,
  },
  {
    id: 3,
    content:
      'I live in a country with strict Internet restrictions. Thanks to Vpnufo, I can get in touch with my friends on social networks prohibited in my country, watch films and matches anonymously and at high speed.',
    date: '29.12.2289',
    userName: 'Ufo',
    Icon: <Alien4Icon />,
  },
]
