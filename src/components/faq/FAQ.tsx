import { FC, useCallback, useRef } from 'react'
import { Box, Center, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { NavItems } from 'components/navigation'
import { FAQForm, FAQFormRef } from './faq-form'

import { BsFillGearFill } from 'react-icons/bs'

import BG4 from 'assets/svg/backgrounds/bg-4.svg'
import { useMobileBreakpoint } from 'hooks/useMobileBreakpoint'
import { useMutation, useQuery } from 'hooks'
import { FAQItemsList } from './faq-items-list'
import { Faq } from 'types/faq.types'

export const FAQ: FC = () => {
  const {
    data,
    refetch,
    loading: faqItemsLoading,
  } = useQuery<{
    faqItems: Faq[]
  }>('http://localhost:7000/api/faq')

  const [mutateFAQ, { loading, error, clearError }] = useMutation<{
    id?: string
    title: string
    content: string
  }>('http://localhost:7000/api/faq')

  const { isOpen: isEdit, onToggle: onEditToggle } = useDisclosure()

  const onEdit = useCallback(
    (id: string, faqItems: Faq[]) => faqItems?.find(faq => faq.id === id),
    []
  )

  const handleSubmitAdd = useCallback(
    async (data: Omit<Faq, 'id'>) => {
      await mutateFAQ({ method: 'POST', body: data })
      await refetch()
    },
    [mutateFAQ, refetch]
  )
  const handleSubmitEdit = useCallback(
    async (data: Faq) => {
      await mutateFAQ({ method: 'PATCH', body: data })
      await refetch()
    },
    [mutateFAQ, refetch]
  )

  const handleDelete = (id: string) => async () => {
    await mutateFAQ({ method: 'DELETE', param: id })
    await refetch()
  }

  const faqFormRef = useRef<FAQFormRef>(null)

  const isMobile = useMobileBreakpoint()

  return (
    <Center
      minH="780px"
      backgroundImage={BG4}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      alignItems="flex-start"
    >
      <Box w={isMobile ? 'full' : '80%'} px={isMobile ? 5 : 0} mt="140px">
        <Flex justifyContent="space-between" alignItems="center">
          <Text id={NavItems.FAQ.toLowerCase()} fontSize="48px" lineHeight="72px">
            FAQ
          </Text>
          <Flex gap={4}>
            <FAQForm
              ref={faqFormRef}
              isEdit={isEdit}
              onClose={clearError}
              onEdit={onEdit}
              onSubmitAdd={handleSubmitAdd}
              onSubmitEdit={handleSubmitEdit}
              isLoading={loading}
              error={error}
            />
            <IconButton
              variant="ghost"
              fontSize="30px"
              aria-label="edit"
              icon={<BsFillGearFill />}
              onClick={onEditToggle}
            />
          </Flex>
        </Flex>
        <FAQItemsList
          isLoading={faqItemsLoading}
          faqItems={data?.faqItems ?? []}
          isEdit={isEdit}
          onEdit={faqFormRef.current?.handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </Center>
  )
}
