import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount/ItemCount'

function ItemListContainer({greeting}) {
 
 
  return (
    <>
    <h3>{greeting}</h3>
    <ItemCount stock={14} initial={1}/>
    </>

  )
}

export default ItemListContainer