import { createStyles, Table } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { Book } from '../../types'
import { BookItem } from '../book-item/book-item'

interface BookListProps {
  books: Book[]
  onShowBookDetails: (book: Book) => void
}

const useStyles = createStyles((theme) => ({
  table: {
    '& thead tr th': {
      border: 'none',
    },
    '& tbody tr td': {
      border: 'none',
    },
  },
}))

export function BookList(props: BookListProps) {
  const { books, onShowBookDetails } = props
  const { classes } = useStyles()
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <Table my="lg" className={classes.table}>
      <thead>
        <tr>
          <th>Book Title & Author</th>
          <th>Genre</th>
          {matches && <th>Reading Progress</th>}
          {matches && <th>Last Opened</th>}
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} onClick={() => onShowBookDetails(book)}>
            <td>
              <BookItem {...book} />
            </td>
            <td>Romance</td>
            {matches && <td>70%</td>}
            {matches && <td>12 Minutes Ago</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
