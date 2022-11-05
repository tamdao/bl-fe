import { useQuery } from '@tanstack/react-query'
import api from '../../../services/api'

interface GetBookParams {
  query: string
  limit: number
  page: number
}

const getBooks = async (params: GetBookParams) => {
  const { data } = await api.get('/books', {
    params,
  })

  return data
}

export function useGetBooks(bookParams: GetBookParams) {
  return useQuery(['books', bookParams], () => getBooks(bookParams))
}
