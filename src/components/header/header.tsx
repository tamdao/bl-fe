import { Divider, Group, Title } from '@mantine/core'
import { ReactElement } from 'react'

interface HeaderSimpleProps {
  title: string
  rightComponent?: ReactElement
}

export function HeaderSimple(props: HeaderSimpleProps) {
  const { title, rightComponent } = props

  return (
    <div>
      <Group position="apart" pb="md">
        <Title order={3}>{title}</Title>
        {rightComponent}
      </Group>
      <Divider />
    </div>
  )
}
