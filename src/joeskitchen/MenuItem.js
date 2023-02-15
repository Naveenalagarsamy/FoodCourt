import React from 'react'
import { Link } from 'react-router-dom'
export default function MenuItem() {
  
  const foods=["Latest","Veg","Non-Veg" , "Cake","Sweet","IceCream","Soup","Juice","Pizza","Favourite"] ;

  return (
    <div className="menu-item">
      <ul>
        {foods.map((items)=><li key={items}><Link to={`/products/${items}`}>{items}</Link></li>)}
      </ul>
  </div>
  )
  }
