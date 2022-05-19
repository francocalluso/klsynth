
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

import './NavBar.css'

import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'



function NavBar() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Nav.Link as={Link} to="/">               
                 <Logo/> 
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink 
                        to='/categories/sintetizadores'
                        className={({isActive}) => isActive ? 'active' : 'noActive'} >
                        Sintetizadores</NavLink>
                    <NavLink 
                        to='/categories/accesorios'
                        className={({isActive}) => isActive ? 'active' : 'noActive'} >
                        Accesorios</NavLink>
                    <NavLink 
                        to='/categories/fx'
                        className={({isActive}) => isActive ? 'active' : 'noActive'} >
                        FX</NavLink>
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