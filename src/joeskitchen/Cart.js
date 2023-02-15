import React, { useState } from 'react'
import cart1 from './cart1.gif'

function Cart({ CartDetails,setCartDetails ,setCartOpen }) {
    const [ClearCartbtn,setClearCartbtn]=useState(true)

  let increment=(item)=>{
    const increase=CartDetails.map(e=>
        {return e.ID===item.ID   ? {...e,  QTY:e.QTY+=1 , UniqueTotalAMT:e.QTY*e.AMT } : e}); 
        setCartDetails(increase);
  }
      
  let decrement=(item)=>{
    let decrease = CartDetails.map(e=>{
      
      return e.ID===item.ID && e.QTY>0 ?   {...e, QTY:e.QTY-=1 ,UniqueTotalAMT:Number(e.UniqueTotalAMT)-Number(e.AMT) } : e;
    
    })
    decrease= decrease.filter((item) => item.QTY !== 0 )
    setCartDetails(decrease);
  }

  const handleRemove = (e) => {
    const newCart = CartDetails.filter((item) => item.ID !== e.ID)
    setCartDetails(newCart)}

 return (
    <div className='cart-overlay'>
    <div className="cart">
            <span className="btn-close-cart"><i className="fa fa-window-close" onClick={()=>setCartOpen(false)}>
               </i></span>
        {CartDetails.filter((CartDetails)=> CartDetails ? CartDetails : null ).map((e)=>{
          return<div key={e.ID} className="cart-item">
         <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt="{e.NAME}"  />
            <div>
                <h4>{e.NAME }</h4>
              <h5>Rs {e.AMT}</h5>
              <span className="remove-item" onClick={()=>handleRemove(e)}>Remove</span>
            </div>
            <div>
              <i className="fa fa-plus" onClick={()=>increment(e)}></i>
              <p className="item-amount">
                {e.QTY}
               </p>
              <i className="fa fa-minus" onClick={()=>decrement(e)}></i>
            </div>
          </div> 
        }) }
        <div className='cart-footer'>
        <h4>{CartDetails.length===0?<img src={cart1} alt='cartimage' className='clear-cart-image'/>:"Total Amount  = "+CartDetails.reduce((total,cart)=>total+Number(cart.AMT*cart.QTY),0)}</h4>
        <br/>
        {CartDetails.length!==0 && ClearCartbtn && <button className="btn btn-clear-cart" onClick={()=>{setCartDetails([]);setClearCartbtn(false)}}>Clear Cart</button>}

        </div>
    </div>
    </div>
  )
}
export default Cart