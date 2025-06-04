import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {


  return (
    <>
      <Navbar />
      <Login />
      <Register />
    </>
  )
}

export default App
