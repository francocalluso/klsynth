import { useCartContext } from "../../context/CartContext"
import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react'

import './Cart.css'

export const Cart = () => {

  const {cartList, deleteCart, deleteItem} = useCartContext()

  const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)

console.log(total)
  return (
    <div>
      <div>
        <h2 className="text-light">Tu pedido</h2>
          {cartList.map(product => 
          <li className="cartItem">
            <Link to={`/detail/${product.id}`}>
            <img className="w3 m-3" src={product.img}></img>
            </Link>
            <p className="text-light">{product.name}</p>
            <p className="text-light">Precio: {product.price}</p>
            <p className="text-light">Cantidad: {product.count}u</p>
            <button className="btn btn-danger" onClick={()=>deleteItem(product.id)}>X</button>
          </li>)}
          {cartList.length ? <div>`
                                <h3 className="text-light">Total: {total}</h3>
                                <button className="btn btn-danger" onClick={deleteCart}>Vaciar Carrito</button>
                            </div>  : <div className="text-light">
                                                <p className="text-light">No hay productos en tu carrito</p>
                                                <Link to={"/"}>
                                                  <p className="btn btn-secondary">Ir a la tienda</p>
                                        
                                                </Link>
                                              </div> }
                              
      </div>
        
    </div>
  )
}