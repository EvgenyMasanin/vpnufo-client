import { FC } from 'react'
import { Flex, IconButton } from '@chakra-ui/react'

import { BiEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

interface ActionsProps {
  onEdit: () => void
  onDelete: () => void
}

export const Actions: FC<ActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <Flex gap={4}>
      <IconButton variant="outline" icon={<BiEditAlt />} aria-label="edit" onClick={onEdit} />
      <IconButton
        variant="outline"
        colorScheme="red"
        icon={<MdDelete />}
        aria-label="edit"
        onClick={onDelete}
      />
    </Flex>
  )
}
