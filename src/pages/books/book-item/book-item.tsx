import { createStyles, Paper, Image, Title, Text, Group } from '@mantine/core'
import React from 'react'

interface BookItemProps {
  title: string
  author: string
  thumbnailUrl: string
}

const useStyles = createStyles((theme) => ({
  container: {},
  imageWrapper: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  author: {
    color: theme.colors.dark[2],
  },
  gender: {
    position: 'absolute',
    right: theme.spacing.sm,
    bottom: theme.spacing.sm,
  },
}))

export function BookItem(props: BookItemProps) {
  const { classes } = useStyles()
  const { title, author, thumbnailUrl } = props
  return (
    <Group className={classes.container}>
      <Image
        radius="md"
        src={thumbnailUrl}
        alt={title}
        height={90}
        width={60}
      />
      <div>
        <Title order={4} className={classes.title} weight={500}>
          {title}
        </Title>
        <Text size="sm" className={classes.author}>
          {author}
        </Text>
      </div>
    </Group>
  )
}
