import { createStyles, Table } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { BookItem } from '../book-item/book-item'

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

export function BookList() {
  const { classes } = useStyles()
  const matches = useMediaQuery('(min-width: 768px)')
  console.log('matches', matches)
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
        <tr>
          <td>
            <BookItem
              title="Paint a New Scene"
              author="Deirdre O’Dare"
              thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            />
          </td>
          <td>Romance</td>
          {matches && <td>70%</td>}
          {matches && <td>12 Minutes Ago</td>}
        </tr>
        <tr>
          <td>
            <BookItem
              title="Paint a New Scene"
              author="Deirdre O’Dare"
              thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            />
          </td>
          <td>Romance</td>
          {matches && <td>70%</td>}
          {matches && <td>12 Minutes Ago</td>}
        </tr>
      </tbody>
    </Table>
  )
}
