import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

function CartList() {

    const {cartList, deleteCart, totalPrice} = useCartContext()


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
        
    </div>
  )
}

export default CartList