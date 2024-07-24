import { getTheme } from '@renderer/common/theme/theme'
import { PaletteMode } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useMemo, createContext, useState } from 'react'
import { Main } from './components/Template/Main'

dayjs.extend(utc)

export const ColorModeContext = createContext({
  toggleColorMode: (): void => {
  }
})

export const App = () => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem('theme') || 'light') as 'light' | 'dark'
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode: PaletteMode) => {
          const newThemeMode = prevMode === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newThemeMode)

          return newThemeMode
        })
      }
    }),
    []
  )

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
