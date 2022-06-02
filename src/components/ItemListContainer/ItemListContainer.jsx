import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList'
import { getFetch } from '../../helpers/getFetch';

import './ItemListContainer.css'
import { useParams } from 'react-router-dom';




function ItemListContainer() {
  
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  
  const {id} = useParams()

  useEffect(()=> {
    if(id) {
      getFetch()
      .then(respuesta => setProductos(respuesta.filter((prods)=> prods.categories === id)))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
    }else {
      getFetch()
      .then((respuesta)=> setProductos(respuesta))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
      
    }
  }, [id])
    
 

  return (

    <div className='flex-center m-0 bg-img'>
    { loading ? 
      <Spinner className='my-4' animation="border" variant="warning" /> :
      <ItemList productos={productos}/>}
    </div>

  )
}

export default ItemListContainer