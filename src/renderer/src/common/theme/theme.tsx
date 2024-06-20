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
    typography: {
      fontFamily: 'Inter, sans-serif',
      body1: {
        fontSize: '16px',
      },
      body2: {
        fontSize: '18px',
        '@media (max-width:900px)': {
          fontSize: '16px',
        },
      },
      subtitle1: {
        fontSize: '14px',
      },
      subtitle2: {
        fontSize: '12px',
      },
      table: {
        fontSize: '12px',
      },
      h2: {
        fontSize: '56px',
        '@media (max-width:1200px)': {
          fontSize: '3rem',
        },
        '@media (max-width:900px)': {
          fontSize: '2rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h3: {
        fontSize: '36px',
      },
      h4: {
        fontSize: '24px',
      },
      h5: {
        fontSize: '20px',
      },
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
