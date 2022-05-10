import React, { useState } from 'react'

function ItemCount({stock, initial}) {
    
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
        console.log('Añadiste '+ count + ' items al carrito.')
    }
  
    
    return (
    <div className='m-3'>
        <button onClick={decrease} className=' btn btn-secondary'>-</button>
        <span className='px-4 py-2 border-top border-bottom border-secondary'>{count}</span>
        <button onClick={increase} className='btn btn-secondary'>+</button>
        <p className='m-3' >Stock: {stock}</p>
        <button onClick={add} className=' btn btn-warning'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount