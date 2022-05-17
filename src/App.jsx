import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  // const [productos,setProductos] = useState([])

    // const getFetch = async () => {
    //   try{
    //     const peticion = await fetch('./../assets/data.json')
    //     const peticionParse = JSON.parse(peticion)
    //     setProductos(peticionParse)
    //   } catch(err) {
    //     console.log(err)
    //   }
    // }

  // useEffect(()=> {
  //   fetch('./../assets/data.json')
  //   .then((respuesta)=>respuesta.json())
  //   .then((resp)=> setProductos(resp))
  //   .catch()
  //   .finally()
    // getFetch()
  // },[])


 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<ItemListContainer/>}/>  
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  
    
  )
}

export default App
