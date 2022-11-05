import { ActionIcon, Group } from '@mantine/core'
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons'

interface BooksActionProps {
  layout: string
  onToggleLayout: () => void
}

export function BooksAction(props: BooksActionProps) {
  const { layout, onToggleLayout } = props
  return (
    <Group>
      <ActionIcon
        variant={layout === 'grid' ? 'filled' : 'transparent'}
        color="blue"
        onClick={() => layout !== 'grid' && onToggleLayout()}
      >
        <IconLayoutGrid size={16} />
      </ActionIcon>
      <ActionIcon
        variant={layout === 'list' ? 'filled' : 'transparent'}
        color="blue"
        onClick={() => layout !== 'list' && onToggleLayout()}
      >
        <IconLayoutList size={16} />
      </ActionIcon>
    </Group>
  )
}
