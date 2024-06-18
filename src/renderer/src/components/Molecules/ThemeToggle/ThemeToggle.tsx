import { LightMode, DarkMode } from '@mui/icons-material'
import { IconButton, useTheme } from '@mui/material'
import { ReactElement, useContext } from 'react'
import { ColorModeContext } from '@renderer/App'

export const ThemeToggle = (): ReactElement => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const isDarkTheme = theme.palette.mode === 'dark'
  return (
    <IconButton onClick={colorMode.toggleColorMode}>
      {isDarkTheme ? <LightMode /> : <DarkMode />}
    </IconButton>
  )
}
