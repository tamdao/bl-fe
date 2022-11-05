import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
      </Routes>
    </AuthProvider>
  )
}

export default App
