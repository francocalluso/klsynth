import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";


import './Cart.css'
import CartList from "../CartList/CartList";

export const Cart = () => {

  const {totalItems, totalPrice, cartList, deleteCart} = useCartContext()

  // const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)

  if(totalItems === 0) {

    return(

      <div className="text-dark m-4">
         <p className="text-light fw-bolder m-4">No hay productos en tu carrito :( </p>
          <Link to={"/"}>
            <p className="btn btn-secondary m-4">Ir a la tienda</p>                                        
         </Link>
      </div> 

    )

  }else {

    return (
      <CartList/>
    ) 
    
    }





  // return (    
  //   <div className="container">
  //     <div className="list-group col-lg-6 rounded my-3 transparent">
  //       <h4 className="text-dark bg-warning m-3 p-3 rounded">Tu pedido</h4>
  //         {cartList.map(product => 
  //         <li className="list-group-item d-inline-flex justify-content-between align-items-center m-3">    
  //           <img className="h5rem m-3" src={product.img}></img>
  //           <div>
  //             <p className="text-dark fw-bold">{product.name}</p>
  //             <p className="text-dark">Precio: ${product.price}</p>
  //             <p className="text-dark">Cantidad: {product.count}u</p>
  //           </div>                        
  //           <button className="btn btn-danger mx-4 fw-bolder" onClick={()=>deleteItem(product.id)}>x</button>
  //         </li>)}

  //         {cartList.length ? <>                              
  //                             <div className="d-inline-flex justify-content-between m-3 rounded bg-dark p-3">`
  //                               <h4 className="text-light">Total: ${total}</h4>                                
  //                             </div>
  //                             <button className="btn btn-danger m-3" onClick={deleteCart}>Vaciar Carrito</button>
  //                           </>  : <div className="text-dark m-3">
  //                                               <p className="text-dark fw-bolder">No hay productos en tu carrito</p>
  //                                               <Link to={"/"}>
  //                                                 <p className="btn btn-secondary">Ir a la tienda</p>
                                        
  //                                               </Link>
  //                                             </div> }
                              
  //     </div>
        
  //   </div>
  // )
}