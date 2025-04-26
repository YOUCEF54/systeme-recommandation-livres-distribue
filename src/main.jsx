import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from './components/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Toaster />
      <App />
    </BrowserRouter>
  </StrictMode>,
  
)
