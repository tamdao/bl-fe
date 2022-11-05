import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { AuthUser } from './types'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem('token')
  )
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    const loadUserInfo = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const { data: userInfo } = await api.get('/profile')
          setUser(userInfo)
        } catch (error) {
          logout()
        }
      }
      setLoading(false)
    }
    loadUserInfo()
  }, [])

  const login = (token: string) => {
    setIsLoggedIn(true)
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('token')
    navigate('/auth', { replace: true })
  }

  return { login, logout, isLoggedIn }
}
