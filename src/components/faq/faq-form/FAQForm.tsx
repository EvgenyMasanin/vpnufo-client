import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { Input, Text, Textarea } from '@chakra-ui/react'
import { ModalForm } from 'components/modal-form'
import { useFAQForm, UseFAQFormProps } from 'hooks/useFAQForm'
import { Faq } from 'types/faq.types'

export type FAQFormSubmit = ({ title, content }: { title: string; content: string }) => void

interface FAQFormProps extends UseFAQFormProps {
  isEdit: boolean
  isLoading?: boolean
  error?: { message: string }
}

export interface FAQFormRef {
  handleEdit: (
    id: string,
    faqItems: Faq[]
  ) => () => void
}

export const FAQForm = forwardRef<FAQFormRef, FAQFormProps>(
  ({ isEdit, isLoading, error, onEdit, onSubmitAdd, onSubmitEdit, onClose }, ref) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [isSubmit, setIsSubmit] = useState(false)

    const {
      isOpen,
      currentFaq: defaultData,
      handleClose,
      headerTitle,
      handleEdit,
      handleOpen,
      handleSubmit,
    } = useFAQForm({
      onEdit,
      onClose,
      onSubmitAdd,
      onSubmitEdit,
    })

    useImperativeHandle(ref, () => ({ handleEdit }))

    useEffect(() => {
      if (!defaultData) return
      setTitle(defaultData.title)
      setContent(defaultData.content)
    }, [defaultData])

    const handleFormClose = useCallback(() => {
      setTitle('')
      setContent('')
      handleClose()
    }, [handleClose])

    const onSubmit = () => {
      handleSubmit({ title, content })
      setIsSubmit(true)
    }

    useEffect(() => {
      if (!isSubmit) return
      if (isLoading) return
      if (error) return
      handleFormClose()
      setIsSubmit(false)
    }, [isLoading, error, isSubmit, handleFormClose])

    return (
      isEdit && (
        <ModalForm
          isOpen={isOpen}
          isLoading={isLoading}
          onOpen={handleOpen}
          onClose={handleFormClose}
          openBtnTitle="add"
          headerTitle={headerTitle}
          onSubmit={onSubmit}
        >
          <Input placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
          <Textarea
            spellCheck={false}
            placeholder="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <Text color="red">{error?.message}</Text>
        </ModalForm>
      )
    )
  }
)

FAQForm.displayName = 'FAQForm'
