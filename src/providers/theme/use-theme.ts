import { ColorScheme } from '@mantine/core'
import { useToggle } from '@mantine/hooks'

export function useTheme() {
  const [colorScheme, toggleColorSchema] = useToggle<ColorScheme>([
    'light',
    'dark',
  ])

  return { colorScheme, toggleColorSchema }
}
