import { Badge, createStyles, Image, Paper, Text, Title } from '@mantine/core'
import React from 'react'

interface BookCardProps {
  id: string
  name: string
  author: string
  genre: string
  thumbnailUrl: string
}

const useStyles = createStyles((theme) => ({
  container: {
    marginBottom: theme.spacing.lg,
  },
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
  genre: {
    position: 'absolute',
    right: theme.spacing.sm,
    bottom: theme.spacing.sm,
  },
  process: {
    position: 'absolute',
    top: theme.spacing.sm,
    left: theme.spacing.sm,
  },
}))

export function BookCard(props: BookCardProps) {
  const { classes } = useStyles()
  const { name, author, genre, thumbnailUrl } = props
  return (
    <div className={classes.container}>
      <Paper className={classes.imageWrapper} shadow="md">
        <Image radius="md" src={thumbnailUrl} alt={name} height={360} />
        <Badge className={classes.genre} color="dark">
          {genre}
        </Badge>
        <Badge className={classes.process} color="dark">
          70%
        </Badge>
      </Paper>
      <div>
        <Title order={4} className={classes.title} weight={500}>
          {name}
        </Title>
        <Text size="sm" className={classes.author}>
          {author}
        </Text>
      </div>
    </div>
  )
}
