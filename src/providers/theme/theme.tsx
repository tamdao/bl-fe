import React, { createContext, useContext } from 'react'

import { Theme } from './types'
import { useTheme } from './use-theme'

const ThemeContext = createContext<Theme | undefined>(undefined)

const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be within ThemeProvider')
  }

  return context
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, useThemeContext }
