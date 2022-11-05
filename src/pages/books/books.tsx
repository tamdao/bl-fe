import { SimpleGrid, TextInput } from '@mantine/core'
import React from 'react'
import { IconSearch } from '@tabler/icons'
import { HeaderSimple } from '../../components'
import { BookCard } from './book-card/book-card'
import { BooksAction } from './books-action/books-action'

export function Books() {
  return (
    <div>
      <HeaderSimple title="Book Library" rightComponent={<BooksAction />} />
      <TextInput
        placeholder="Search book by name"
        icon={<IconSearch size={14} />}
        mt="lg"
      />
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
        <BookCard
          id="xx"
          title="Paint a New Scene"
          author="Deirdre O’Dare"
          gender="Romance"
          thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
        <BookCard
          id="xx"
          title="Paint a New Scene"
          author="Deirdre O’Dare"
          gender="Romance"
          thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
        <BookCard
          id="xx"
          title="Paint a New Scene"
          author="Deirdre O’Dare"
          gender="Romance"
          thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
        <BookCard
          id="xx"
          title="Paint a New Scene"
          author="Deirdre O’Dare"
          gender="Romance"
          thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
        <BookCard
          id="xx"
          title="Paint a New Scene"
          author="Deirdre O’Dare"
          gender="Romance"
          thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
        <BookCard
          id="xx"
          title="Paint a New Scene"
          author="Deirdre O’Dare"
          gender="Romance"
          thumbnailUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        />
      </SimpleGrid>
    </div>
  )
}
