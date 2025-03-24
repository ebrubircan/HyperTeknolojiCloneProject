import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import CartPage from '../pages/CartPage'; 
import PaymentPage from '../pages/PaymentPage';

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
