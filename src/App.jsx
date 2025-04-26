import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "./components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreferencePage from "@/pages/PreferencePage"; // adjust the path if needed



import './index.css'
import Navbar from './components/NavBar';
import { LogIn } from 'lucide-react';
import Login from './components/Auth/Login';
import Book from './pages/Book';
import HomePage from './pages/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

      <Route path="/" element={<PreferencePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book" element={<Book />} />
      </Routes>
    </>
  )
}

export default App
