import React from 'react'
import { useCart } from '../Context/Cart'

function Cart() {
  const cart = useCart()

  const total = cart.items.reduce((a,b)=>a + b.Price, 0)
  return (
    <div>
      <h1>Cart</h1>
      {
        cart && cart.items.map((item)=>(
          <li>
            {item.Product} - ${item.Price}
          </li>
        ))
      }
      <h4>Total Bill ${total}</h4>
    </div>
  )
}

export default Cart
