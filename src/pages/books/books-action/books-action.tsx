import { ActionIcon, Group } from '@mantine/core'
import { IconLayoutGrid, IconLayoutList, IconSearch } from '@tabler/icons'
import React from 'react'

export function BooksAction() {
  return (
    <Group>
      <ActionIcon variant="filled" color="blue">
        <IconLayoutGrid size={16} />
      </ActionIcon>
      <ActionIcon>
        <IconLayoutList size={16} />
      </ActionIcon>
    </Group>
  )
}
