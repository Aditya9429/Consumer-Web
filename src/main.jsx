import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import MedicalContextProvider from './context/Medical.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <MedicalContextProvider>
      <HashRouter >
      <App />
      </HashRouter>
      </MedicalContextProvider>
      
  
  </StrictMode>,
)
