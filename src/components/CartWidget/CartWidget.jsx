import React from 'react'
import cart from '../../imagenes/cart.png'


function CartWidget() {
  return (
    <img className="w2 invert" src={cart} alt="carro de compras" />
  )
}

export default CartWidget