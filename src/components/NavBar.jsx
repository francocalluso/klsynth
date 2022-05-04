
import CartWidget from './CartWidget'
import Logo from './Logo'

import './NavBar.css'

import {Container, Nav, Navbar} from 'react-bootstrap'



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
               <Logo/>
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