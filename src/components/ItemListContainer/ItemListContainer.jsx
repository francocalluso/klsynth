import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList'
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';




function ItemListContainer() {
  
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  
  const {id} = useParams()


  useEffect(()=>{
      if(id){
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = query(queryCollection, where('categories','==', id ))
        getDocs(queryCollectionFilter)
        .then(resp => setProductos(resp.docs.map( item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
      }else {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map( item => ({ id: item.id, ...item.data() }))))
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