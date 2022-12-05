import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
     <BrowserRouter>
     <App />
     </BrowserRouter>

    </ContextProvider>
  </React.StrictMode>
)
