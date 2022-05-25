import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock, initial=1, handleInputType}) {
    
    const [count, setCount] = useState(initial)
    
    function increase(){
        if(count < stock){
            setCount(count+1)
         }else{
             setCount(count)
             console.log('has alcanzado el maximo de stock')
         }       
    }

    function decrease(){
        if(count > 1){
        setCount(count-1)
     }else{
         setCount(count)
         console.log('no puedes cargar menos de 1 item')
     }
    }
  
    function add(){
        handleInputType();
    }
  
    
    return (
    <div>
        <div>
            <button onClick={decrease} className=' btn btn-secondary'>-</button>
            <span className='px-4 py-2 '>{count}</span>
            <button onClick={increase} className='btn btn-secondary'>+</button>
        </div>
        
        <p className='my-3'>Stock: {stock}</p>
        <button onClick={add} className=' btn btn-warning'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount