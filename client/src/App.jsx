import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProductCards from './components/products/productCards'

function App() {


  return (
    <>
      <Navbar />
      <Login />
      <Register />
      <ProductCards />
    </>
  )
}

export default App
