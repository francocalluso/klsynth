import React, { useState } from 'react'
import { useCartContext} from '../../context/CartContext'
import BuyButton from '../BuyButton/BuyButton'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({producto}) {

  const [inputType, setInputType] = useState('itemCount');
  const {addToCart} = useCartContext()

  function handleInputType() {
    setInputType('buyButton');
}

  const onAdd = (count) =>{
    console.log(`Has agregado ${count} producto/s a tu carrito`)
    addToCart({...producto, count})
  }
     
  

  return (
    
  <div className='flex bg-light m-3 rounded ' id={producto.id}>        
    <img className='w3 m-3' src={producto.img} />
      <div className=' mx-5 p-5 flex-column'>
        <h2>{producto.name}</h2>
        <h3>${producto.price}</h3>
        <p>{producto.description}</p>
        {inputType === 'itemCount' ?
                    <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} handleInputType={handleInputType}/>:
                    <BuyButton/>}
        
      </div>
  </div>

  )
}
 
export default ItemDetail