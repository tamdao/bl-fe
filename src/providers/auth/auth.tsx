import React, { createContext, useContext } from 'react'

import { Auth } from './types'
import { useAuth } from './use-auth'

const AuthContext = createContext<Auth | undefined>(undefined)

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthContext must be within AuthProvider')
  }

  return context
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export { AuthProvider, useAuthContext }
