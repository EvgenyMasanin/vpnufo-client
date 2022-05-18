import { FC, FormEventHandler } from 'react'
import {
  Box,
  Button,
  Modal,
  chakra,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  ModalFooter,
} from '@chakra-ui/react'

import { GrFormAdd } from 'react-icons/gr'

export interface ModalFormProps {
  isOpen: boolean
  openBtnTitle: string
  headerTitle: string
  isLoading?: boolean
  onOpen: () => void
  onClose: () => void
  onSubmit: () => void
}

export const ModalForm: FC<ModalFormProps> = ({
  isOpen,
  onClose,
  onOpen,
  headerTitle,
  isLoading,
  onSubmit,
  openBtnTitle,
  children,
}) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <>
      <Box>
        <Button onClick={onOpen} leftIcon={<GrFormAdd />}>
          {openBtnTitle}
        </Button>
      </Box>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <chakra.form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>{headerTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Stack spacing="6">{children}</Stack>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="green" mr={3} isLoading={isLoading}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </chakra.form>
      </Modal>
    </>
  )
}
