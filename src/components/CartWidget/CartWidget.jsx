import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import cart from '../../imagenes/cart.png'

import './CartWidget.css'


function CartWidget() {
  const {cartList} = useCartContext()
 
  const totalItems =  cartList.reduce((acc, item)=> acc = acc + item.count, 0)

  return (
    <Link to='/cart'>
      {(totalItems === 0) ? 
      <img src={cart} className="w2 invert"/> :
          (cartList.length ?  
          <div>
              <img src={cart} className="w2 invert"/>
              <button className='cartItemCount'>{totalItems}</button>
          </div> :  
          <div>
                    <img src={cart} className="w2 invert"/>
                    <button className='cartItemCount'>{totalItems}</button>
          </div>)}
    
      
    </Link>
  )
}

export default CartWidget