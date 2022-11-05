import {
  createStyles,
  LoadingOverlay,
  Pagination,
  TextInput,
} from '@mantine/core'
import { IconSearch } from '@tabler/icons'
import debounce from 'lodash/debounce'
import { HeaderSimple } from '../../components'
import { BooksAction } from './components/books-action/books-action'
import { useToggle } from '@mantine/hooks'
import { BookGrid } from './components/book-grid/book-grid'
import { BookList } from './components/book-list/book-list'
import { useSearchParams } from 'react-router-dom'
import { ChangeEvent, useCallback } from 'react'
import { useGetBooks } from './hooks'

const useStyles = createStyles((theme) => ({
  content: {
    position: 'relative',
  },
}))

export function Books() {
  const { classes } = useStyles()
  const [layout, toggleLayout] = useToggle(['grid', 'list'])

  const [searchParams, setSearchParams] = useSearchParams()

  const { data, isLoading } = useGetBooks({
    query: searchParams.get('query') || '',
    page: +(searchParams.get('page') || 1),
    limit: 10,
  })

  const pagination = data?.meta

  const onQueryChange = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      searchParams.set('query', event.target.value)
      setSearchParams(searchParams)
    }, 1000),
    [searchParams]
  )

  const onPaginationChange = useCallback(
    (page: number) => {
      searchParams.set('page', page.toString())
      setSearchParams(searchParams)
    },
    [searchParams]
  )

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
        onChange={onQueryChange}
        defaultValue={searchParams.get('query') || ''}
      />
      <div className={classes.content}>
        {layout === 'grid' && <BookGrid books={data?.items || []} />}
        {layout === 'list' && <BookList books={data?.items || []} />}
        {pagination && !!(data?.items || []).length && (
          <Pagination
            total={pagination.totalPages || 0}
            size="sm"
            onChange={onPaginationChange}
          />
        )}
        <LoadingOverlay visible={isLoading} overlayBlur={2} />
      </div>
    </div>
  )
}
