import { useCartContext } from '../../context/CartContext'

function CartItem({item}) {
  
    const {deleteItem} = useCartContext()

    function removeItem() {
        deleteItem(item.id)
    }
  
    return (
    <li className="list-group-item d-inline-flex justify-content-between align-items-center m-3">    
            <img className="h5rem m-3" src={item.img}></img>
            <div>
              <p className="text-dark fw-bold">{item.name}</p>
              <p className="text-dark">Precio: ${item.price}</p>
              <p className="text-dark">Cantidad: {item.count}u</p>
            </div>                        
            <button className="btn btn-danger mx-4 fw-bolder" onClick={removeItem}>x</button>
    </li>
  )
}


export default CartItem