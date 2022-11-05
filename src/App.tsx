import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './providers'
import { Auth } from './pages'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Auth />} path="/auth" />
      </Routes>
    </AuthProvider>
  )
}

export default App
