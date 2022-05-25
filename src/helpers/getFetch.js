import { productos } from "../data"


console.log (productos.id)

export const getFetch = (id) => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            const query = id ? productos.find(producto => producto.id === id) : productos
            resolve(query)
        }, 1000)
    })
}