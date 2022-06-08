import { useState } from 'react';
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

function CartList({sendOrderManage}) {
    const [buyerData, setBuyerData] = useState({});
    const {cartList, deleteCart, createOrder, totalPrice} = useCartContext()

    function changeHandler(e) {
      setBuyerData({
          ...buyerData,
          [e.target.name]: e.target.value
      });
  }

  return (
    <div className="container">
      <div className="list-group col-lg-6 rounded my-3 transparent">
        <h4 className="text-dark bg-warning m-3 p-3 rounded">Tu pedido</h4>
          {cartList.map(product => 
                                <CartItem key={product.id} item={product}/>)}
                              <div className="d-inline-flex justify-content-between m-3 rounded bg-dark p-3">`
                                <h4 className="text-light">Total: ${totalPrice}</h4>                                
                              </div>

                              <button className="btn btn-danger m-3" onClick={deleteCart}>Vaciar Carrito</button>
                                                      
      </div>
      <div className="col-lg-6 rounded my-3 transparent">
        <h4>Llena el formulario para realizar tu pedido:</h4>
        <form>
                <input name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre" />
                <input name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
                <input name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
                <textarea name="comment" onChange={(e) => changeHandler(e)} id="" cols="30" rows="10"></textarea>
        </form>
        <button className="btn btn-warning m-3" onClick={()=>sendOrderManage(buyerData)}>Realizar compra</button>
      </div>
    </div>
  )
}

export default CartList