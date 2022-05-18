import { useDisclosure } from '@chakra-ui/react'
import { FAQFormSubmit } from 'components/faq/faq-form'
import { useCallback, useMemo, useState } from 'react'
import { Faq } from 'types/faq.types'

export interface UseFAQFormProps {
  onEdit: (id: string, faqItems: Faq[]) => Faq
  onClose: () => void
  onSubmitAdd: (data: Omit<Faq, 'id'>) => void
  onSubmitEdit: (data: Faq) => void
}

export const useFAQForm = ({ onEdit, onClose, onSubmitAdd, onSubmitEdit }: UseFAQFormProps) => {
  const { isOpen, onClose: onFormClose, onOpen } = useDisclosure()

  const [headerTitle, setHeaderTitle] = useState<'Add FAQ' | 'Edit FAQ'>('Add FAQ')

  const [currentFaq, setCurrentFaq] = useState<Faq>(null)

  const handleOpen = useCallback(() => {
    onOpen()
    setHeaderTitle('Add FAQ')
  }, [onOpen])

  const handleClose = useCallback(() => {
    onFormClose()
    setCurrentFaq(null)
    onClose()
  }, [onClose, onFormClose])

  const handleEdit = useCallback(
    (id: string, faqItems: Faq[]) => () => {
      setHeaderTitle('Edit FAQ')

      setCurrentFaq(onEdit(id, faqItems))
      onOpen()
    },
    [onOpen, onEdit]
  )

  const handleSubmit: FAQFormSubmit = useCallback(
    async data => {
      if (headerTitle === 'Add FAQ') {
        onSubmitAdd(data)
      } else {
        onSubmitEdit({ id: currentFaq.id, ...data })
      }
    },
    [currentFaq, headerTitle, onSubmitAdd, onSubmitEdit]
  )

  return useMemo(
    () => ({
      isOpen,
      handleClose,
      headerTitle,
      currentFaq,
      handleOpen,
      handleEdit,
      handleSubmit,
      setCurrentFaq,
    }),
    [isOpen, handleClose, headerTitle, currentFaq, handleOpen, handleEdit, handleSubmit]
  )
}
