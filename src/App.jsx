import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";


function App() {


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
