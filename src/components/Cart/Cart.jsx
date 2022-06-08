import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";


import './Cart.css'
import CartList from "../CartList/CartList";
import { useState } from "react";

export const Cart = () => {

  const {totalItems, createOrder} = useCartContext()
  const [orderSent, setorderSent] = useState(false)


  function sendOrderManage(buyerData) {
    setorderSent(true)
    createOrder(buyerData)
  }


  if(totalItems === 0) {
    if(orderSent) {
      return(
        <div className="m-4">
          <p className="text-ligh rounded bg-light text-dark fw-bolder m-4 p-4 "> Pedido realizado correctamente! <br/> Te enviamos un correo con más información</p>
            <Link to={"/"}>
              <p className="btn btn-secondary m-4">Volver a la tienda</p>                                        
          </Link>
        </div> 
      )

    }else{
      return(

        <div className="text-dark m-4">
          <p className="text-light fw-bolder m-4">No hay productos en tu carrito :( </p>
            <Link to={"/"}>
              <p className="btn btn-secondary m-4">Ir a la tienda</p>                                        
          </Link>
        </div> 

    )
    }

  }else {

    return (
      <CartList sendOrderManage={sendOrderManage}/>
    ) 
    
    }

}