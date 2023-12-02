import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { AllFonts } from './styles/globalStyle.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AllFonts>
      <App />
    </AllFonts>
    </BrowserRouter>
  </React.StrictMode>,
)
