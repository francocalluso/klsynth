import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({producto}) {
  return (
    
  <div className='flex bg-light m-3 rounded ' id={producto.id}>        
    <img className='w3 m-3' src={producto.img} />
      <div className=' mx-5 p-5 flex-column'>
        <h2>{producto.name}</h2>
        <h3>{producto.price}</h3>
        <p>{producto.description}</p>
        <ItemCount stock={producto.stock}/>
        <Link to='/'>
          <Button className='my-3' variant="dark">Volver</Button>
        </Link>
      </div>
  </div>

  )
}
 
export default ItemDetail