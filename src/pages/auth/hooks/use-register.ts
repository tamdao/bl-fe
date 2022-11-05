import { useMutation } from '@tanstack/react-query'
import api from '../../../services/api'

export interface BasicRegister {
  fullName: string
  username: string
  password: string
}
export interface RegisterResponse {
  fullName: string
  username: string
  id: string
}

async function register(registerParams: BasicRegister) {
  const { data: registerData } = await api.post<RegisterResponse>(
    '/users',
    registerParams
  )
  return registerData
}

export function useRegister(options?: {
  onSuccess: (data: RegisterResponse) => void
}) {
  return useMutation(register, options)
}
