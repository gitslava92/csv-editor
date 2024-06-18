import '@renderer/assets/main.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@renderer/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
