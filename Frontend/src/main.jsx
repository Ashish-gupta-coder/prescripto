import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import AuthContext from './Context/AuthContext.jsx'
import Current_User from './Context/Current_User.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <>
    <AuthContext>
      <Current_User>
        <App />
      </Current_User>
      <Toaster />
    </AuthContext>
  </>
)
