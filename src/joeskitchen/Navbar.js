import React from 'react'

export default function Navbar({setCartOpen,CartDetails}) {


  
  return (
    <div className="navbar">
    <div className="navbar-banner">
      Welcome back Naveen
    </div>

    <div className="nav-cart" onClick={()=>setCartOpen(true)} >
      <i className="fa fa-shopping-cart" > </i>
       
      <div className="cart-items">{CartDetails.reduce((total,cart)=>total+Number(cart.QTY),0)}</div>
    </div>
    
  </div>
  )
}
