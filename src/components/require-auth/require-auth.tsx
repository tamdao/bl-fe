import { useAuthContext } from '../../providers'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAuthContext()
  let location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return children
}
