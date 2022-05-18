import { Center, Flex, Spinner } from '@chakra-ui/react'
import { Actions } from 'components/actions'
import { FC } from 'react'
import { Faq } from 'types/faq.types'
import { FAQItem } from '../faq-item/FAQItem'

interface FAQItemsListProps {
  faqItems: Faq[]
  isEdit: boolean
  isLoading?: boolean
  onEdit: (
    id: string,
    faqItems: Faq[]
  ) => () => void
  onDelete: (id: string) => () => void
}

export const FAQItemsList: FC<FAQItemsListProps> = ({
  faqItems,
  isEdit,
  isLoading,
  onEdit,
  onDelete,
}) => {
  return (
    <Flex flexDir="column" gap="40px" mt="40px">
      {isLoading && faqItems.length === 0 ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        faqItems?.map(({ id, title, content }) => (
          <Flex key={id} justifyContent="space-between">
            <FAQItem title={title} content={content} />
            {isEdit && <Actions onEdit={onEdit(id, faqItems)} onDelete={onDelete(id)} />}
          </Flex>
        ))
      )}
    </Flex>
  )
}
