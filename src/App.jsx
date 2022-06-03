import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import CartList from "./components/CartList/CartList";


function App() {

  //Fetch a json en assets

  // const [productos,setProductos] = useState([])

  // useEffect(()=> {
  //   fetch('./../assets/data.json')
  //   .then((respuesta)=>respuesta.json())
  //   .then((resp)=> setProductos(resp))
  //   .catch((err)=> console.log(err))
  //   .finally(()=>console.log())
  // },[])

  // console.log(productos)
 
  return (

    <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categories/:id" element={<ItemListContainer/>}/>  
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  
    
  )
}

export default App
