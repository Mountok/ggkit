import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/fonts/Raleway-VariableFont_wght.ttf'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Components/Routing/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>,
)
