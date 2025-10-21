import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './landingpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LandingPage />

  </StrictMode>,
)
