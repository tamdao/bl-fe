import { createStyles, Paper, Image, Title, Text, Group } from '@mantine/core'
import React from 'react'

interface BookItemProps {
  name: string
  author: string
  thumbnailUrl: string
}

const useStyles = createStyles((theme) => ({
  container: {},
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  author: {
    color: theme.colors.dark[2],
  },
}))

export function BookItem(props: BookItemProps) {
  const { classes } = useStyles()
  const { name, author, thumbnailUrl } = props
  return (
    <Group className={classes.container}>
      <Image radius="md" src={thumbnailUrl} alt={name} height={90} width={60} />
      <div>
        <Title order={4} className={classes.title} weight={500}>
          {name}
        </Title>
        <Text size="sm" className={classes.author}>
          {author}
        </Text>
      </div>
    </Group>
  )
}
