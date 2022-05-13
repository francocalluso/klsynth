import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const productos = [
  {id:'1', name:'Moog Minitaur', description:'Sintetizador analogico de bajos', stock:'4'},
  {id:'2', name:'Nord Drum', description:'Lorem Ipsum bla bla bla', stock:'15'},
  {id:'3', name:'Korg Minilogue XD', description:'blablabla', stock:'3'},
  {id:'4', name:'Arturia Microfreak', description:'Lorem ipsum', stock:'4'},
  {id:'5', name:'Arturia Minibrute', description:'Lorem ipsum', stock:'10'}
]

const getFetch = new Promise((res,rej)=>{
 setTimeout(()=> {
  res(productos)
 }, 3000);
//  rej('400 rejected')
})


function ItemListContainer() {
  
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    getFetch
    .then((respuesta)=> setProductos(respuesta))
    .catch((err) => console.log(err))
    .finally(()=> setLoading(false))
    }, [])

    console.log(productos)
 
  return (
    <>
  
    { loading ? <h2>Cargando...</h2> :
     <ItemList/>}
    </>

  )
}

export default ItemListContainer