import { useMutation } from '@tanstack/react-query'
import api from '../../../services/api'

export interface BasicLogin {
  username: string
  password: string
}
export interface LoginResponse {
  accessToken: string
}

async function login(loginParams: BasicLogin) {
  const { data: loginData } = await api.post<LoginResponse>(
    '/auth/login',
    loginParams
  )
  return loginData
}

export function useLogin(options?: {
  onSuccess: (data: LoginResponse) => void
}) {
  return useMutation(login, options)
}
