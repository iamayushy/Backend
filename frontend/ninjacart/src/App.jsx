import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Product } from './Components/Product'
import {Route, Routes, useNavigate} from 'react-router-dom'
import { Cart } from './Components/Cart'
import {TbShoppingCartPlus} from 'react-icons/tb'

function App() {
  const cartNav = useNavigate()
  const handleCart = () => {
    cartNav('/cart')
    
  }


  return (
    <div className="App">
      <div className="header">
            <h1>NINJACART 😀</h1>
            <TbShoppingCartPlus onClick={handleCart} className="cart" color="white" size={40}/>
        </div>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/:id' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
