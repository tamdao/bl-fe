import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Global, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ModalsProvider } from '@mantine/modals'
import { ThemeProvider, useThemeContext } from './providers/theme/theme'

const queryClient = new QueryClient()

function RootApp() {
  const { colorScheme } = useThemeContext()
  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <Global
        styles={() => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },

          body: {
            fontSize: 14,
          },
        })}
      />
      <BrowserRouter>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </BrowserRouter>
    </MantineProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RootApp />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
