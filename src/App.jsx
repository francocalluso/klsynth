import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Hola, aquí estará la lista de productos :)'/>
    
    </>
  
    
  )
}

export default App
