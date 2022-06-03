import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {detalleId} = useParams()   


    useEffect(()=>{
        const db = getFirestore()
        const dbQuery = doc(db, 'items', detalleId)
        getDoc(dbQuery)
        .then(resp => setProducto({id: resp.id, ...resp.data()}))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false), 1500) 
      }, [detalleId])
    

  return (
    <div className='flex-center m-0 bg-img'>
    { loading ? 
      <Spinner className='my-4' animation="border" variant="warning" /> :
      <ItemDetail producto={producto}/>}
    </div>
    
  )
}

export default ItemDetailContainer 