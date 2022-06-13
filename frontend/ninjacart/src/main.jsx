import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductData } from './Context/ProductContext'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { CartContext } from './Context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContext>
    <ProductData>
    <App />
    </ProductData>
    </CartContext>
    </BrowserRouter>
  </React.StrictMode>
)
