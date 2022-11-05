import { SimpleGrid } from '@mantine/core'
import React from 'react'
import { Book } from '../../types'
import { BookCard } from '../book-card/book-card'

interface BookListProps {
  books: Book[]
}

export function BookGrid(props: BookListProps) {
  const { books } = props

  return (
    <SimpleGrid
      my="lg"
      cols={5}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'lg', cols: 4, spacing: 'md' },
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
      ]}
    >
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </SimpleGrid>
  )
}
