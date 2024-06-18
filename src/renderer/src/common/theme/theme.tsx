import { PaletteMode, PaletteOptions } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles'

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === 'light'
    ? {
      primary: {
        main: '#1fa4c4',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#38373c',
        dark: '#DCE4E8',
        contrastText: '#1B2632'
      },
      text: {
        primary: '#1B2632',
        secondary: '#959595FF'
      },
      background: {
        default: '#FFFFFF'
      },
      input: {
        border: '#4D4D4D',
        borderLight: '#C4C4C4'
      }
    }
    : {
      primary: {
        main: '#1fa4c4',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#38373c',
        dark: '#DCE4E8',
        contrastText: '#1B2632'
      },
      text: {
        primary: '#ffffff',
        secondary: '#959595FF'
      },
      background: {
        default: '#2c2c2c'
      },
      input: {
        border: '#4D4D4D',
        borderLight: '#C4C4C4'
      }
    })
})

export const getTheme = (mode: PaletteMode): ThemeOptions => {
  const palette = getPalette(mode)

  return {
    palette,
    components: {
      MuiSelect: {
        defaultProps: {
          size: 'small',
          variant: 'outlined'
        }
      },
      MuiButton: {
        defaultProps: {
          color: 'primary',
          variant: 'contained'
        },
        styleOverrides: {
          contained: {
            borderRadius: '4px',
            padding: '8px 16px'
          },
          outlined: {
            borderRadius: '4px',
            padding: '8px 16px'
          }
        }
      },
      MuiTextField: {
        defaultProps: {
          size: 'small',
          margin: 'normal',
          variant: 'outlined'
        }
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
        lg: 1280,
        xl: 1440
      }
    }
  }
}
