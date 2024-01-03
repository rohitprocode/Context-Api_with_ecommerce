import React from 'react'
import Item from './Components/Item'
import "./App.css"
import Cart from './Components/Cart'
function App() {
  return (
    <div className='App' >
      <Item Product="Orange" Price={15}/>
      <Item Product="Potato" Price={25}/>
      <Item Product="Apple"  Price={95}/>
      <Cart/>
    </div>
  )
}

export default App
