import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RegisterProvider } from './Context/RegisterContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RegisterProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
  </RegisterProvider>
)
