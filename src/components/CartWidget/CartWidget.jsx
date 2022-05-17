import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../imagenes/cart.png'


function CartWidget() {
  return (
    <Link to='/cart'><img className="w2 invert" src={cart} alt="carro de compras" /></Link>
  )
}

export default CartWidget