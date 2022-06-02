import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";


import './Cart.css'

export const Cart = () => {

  const {cartList, deleteCart, deleteItem} = useCartContext()

  const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)

console.log(total)
  return (
    <div className="container">
      <div className="list-group col-lg-6">
        <h4 className="text-dark bg-warning my-3 p-3">Tu pedido</h4>
          {cartList.map(product => 
          <li className="list-group-item d-inline-flex justify-content-between align-items-center my-3">    
            <img className="h5rem m-3" src={product.img}></img>
            <div>
              <p className="text-dark fw-bold">{product.name}</p>
              <p className="text-dark">Precio: ${product.price}</p>
              <p className="text-dark">Cantidad: {product.count}u</p>
            </div>                        
            <button className="btn btn-danger mx-4 fw-bolder" onClick={()=>deleteItem(product.id)}>x</button>
          </li>)}

          {cartList.length ? <div className="d-inline-flex justify-content-between my-4 bg-dark p-3">`
                                <h3 className="text-light">Total: ${total}</h3>
                                <button className="btn btn-danger mx-4" onClick={deleteCart}>Vaciar Carrito</button>
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