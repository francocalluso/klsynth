import React from 'react'
import { Link } from 'react-router-dom'

function BuyButton() {
  return (
    <>
    <div>
        <Link to={"/"}>
            <button className='btn btn-secondary m-3'>Seguir comprando</button>
        </Link>
        <Link to={"/cart"}>
            <button className='btn btn-success m-3'>Ver el carrito</button>
        </Link>
    </div>
</>
  )
}

export default BuyButton