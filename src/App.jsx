import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


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
    <Navbar/>
    <Routes> 
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categories/:id" element={<ItemListContainer/>}/>  
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  
    
  )
}

export default App
