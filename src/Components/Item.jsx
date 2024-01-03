import React, { useContext } from 'react'
import {CartContext} from "../Context/Cart"

function Item({Product,Price}) {
    const cart = useContext(CartContext)
    console.log(cart)
  return (
    <div className='item-card' >
      <h4>{Product}</h4>
      <p>Price : {Price}$</p>
      <button onClick={()=>cart.setItems([...cart.items,{Product:Product,Price:Price}])} >Add to Cart</button>
    </div>
  )
}

export default Item
