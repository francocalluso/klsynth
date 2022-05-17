
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

import './NavBar.css'

import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function NavBar() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
               <Link to='/'>
                 <Logo/>
               </Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Sintetizadores</Nav.Link>
                    <Nav.Link href="#pricing">Accesorios</Nav.Link>
                    <Nav.Link href="#pricing">FX</Nav.Link>
                </Nav>
                <Nav>
                    <CartWidget/>
                </Nav>
            </Navbar.Collapse>            
        </Container>
    </Navbar>
        
       

  )
}

export default NavBar