import { SimpleGrid, TextInput } from '@mantine/core'
import React from 'react'
import { IconSearch } from '@tabler/icons'
import { HeaderSimple } from '../../components'
import { BookCard } from './book-card/book-card'
import { BooksAction } from './books-action/books-action'
import { useToggle } from '@mantine/hooks'
import { BookGrid } from './book-grid/book-grid'
import { BookList } from './book-list/book-list'

export function Books() {
  const [layout, toggleLayout] = useToggle(['grid', 'list'])

  return (
    <div>
      <HeaderSimple
        title="Book Library"
        rightComponent={
          <BooksAction layout={layout} onToggleLayout={toggleLayout} />
        }
      />
      <TextInput
        placeholder="Search book by name"
        icon={<IconSearch size={14} />}
        mt="lg"
      />
      {layout === 'grid' && <BookGrid />}
      {layout === 'list' && <BookList />}
    </div>
  )
}
