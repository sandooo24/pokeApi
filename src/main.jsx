import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Inicio from './components/Inicio'

createRoot(document.getElementById('root')).render(
  <>  
    <Inicio/>
  </>
)