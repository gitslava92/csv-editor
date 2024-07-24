import '@renderer/assets/main.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@renderer/App'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
)
