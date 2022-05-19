import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {getFetch} from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {detalleId} = useParams()   

    
    useEffect(() => {
      setTimeout((getFetch(detalleId)
      .then(respuesta => setProducto(respuesta))
      .catch((err)=> console.log(err))
      .finally(()=> setLoading(false))), 1500)          
      },[detalleId])
 

      console.log(producto)
      console.log(detalleId)

  return (
    <div className='flex-center m-0 bg-img'>
    { loading ? 
      <Spinner className='my-4' animation="border" variant="warning" /> :
      <ItemDetail producto={producto}/>}
    </div>
    
  )
}

export default ItemDetailContainer 