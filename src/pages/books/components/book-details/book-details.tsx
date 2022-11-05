import { createStyles, Image, Paper, Stack, Text, Title } from '@mantine/core'
import React from 'react'

interface BookDetailsProps {
  id: string
  name: string
  author: string
  thumbnailUrl: string
  description: string
}

const useStyles = createStyles((theme) => ({
  container: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },
  title: {
    color: theme.black,
  },
  author: {
    color: theme.colors.dark[2],
  },
  description: {
    color: theme.colors.dark[2],
  },
}))

export function BookDetails(props: BookDetailsProps) {
  const { classes } = useStyles()
  const { name, author, thumbnailUrl, description } = props
  return (
    <div className={classes.container}>
      <Image
        mb="lg"
        radius="md"
        src={thumbnailUrl}
        alt={name}
        height={360}
        width={240}
      />
      <Stack>
        <Title order={4} className={classes.title} weight={500}>
          {name}
        </Title>
        <Text size="sm" className={classes.author}>
          {author}
        </Text>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Stack>
    </div>
  )
}
