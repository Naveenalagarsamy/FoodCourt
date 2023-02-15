import React from 'react'
import { useParams } from 'react-router-dom';

export default function Products({products,isPending,handleFavourite,AddtoCart,CheckIsCart}) {
  const {id}=useParams();
         
        
  return (
      <div className="product">
      {isPending === true ? <h3 id="txtFoodType"> Loading...</h3> : <h3 id="txtFoodType">{id}</h3> }
        <div className="products-container">
              { products.filter(products=>id === undefined ?  products :  id ==="Latest" ? products.LATEST==="Yes" : id==="Favourite" ? localStorage.getItem(JSON.stringify(products.ID)) : products.FTYPE===id ).map((e)=>{
              return<div key={e.ID} className="product">
                        <div className="img-container">
                          <img src={`https://www.app.tutorjoes.in/img/food/${e.PIC}`} alt="{e.NAME}" className="product-img" />
                        </div>
                          <h3>{e.NAME}</h3>
                          <h4>{e.SHOP}</h4>
                          <h5><span>{e.FTYPE}</span> Rs.{e.AMT}</h5>
                        <button className="btn-item" onClick={()=>{AddtoCart(e)}} ><i className="fa fa-shopping-cart" ></i>
                          {CheckIsCart(e) !== undefined ? " In a cart" : " Add to cart"}
                        </button>
                        <button className='btn-fav' onClick={()=>{
                          handleFavourite(e.ID);
                          localStorage.hasOwnProperty(JSON.stringify(e.ID)) 
                            ? localStorage.removeItem(JSON.stringify(e.ID)) 
                            : localStorage.setItem(JSON.stringify(e.ID))
                          }}>
                          {localStorage.hasOwnProperty(JSON.stringify(e.ID)) ?
                           <i className="fa fa-heart" style={{color: "red"}}></i> 
                           : <i className="fa fa-heart"></i>}
                        </button>
                    </div> })}
        </div>
        <br/>
        <hr/>
        
    </div>
  )}
