import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './providers'
import { Auth, Books } from './pages'
import { Layout, RequireAuth } from './components'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/books"
            element={
              <RequireAuth>
                <Books />
              </RequireAuth>
            }
          />
        </Route>
        <Route element={<Auth />} path="/auth" />
        <Route element={<Navigate to="/books" />} path="*" />
      </Routes>
    </AuthProvider>
  )
}

export default App
