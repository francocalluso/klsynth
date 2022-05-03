import React from 'react'
import CartWidget from './CartWidget'
import logo from '../imagenes/logo2.png'
import './NavBar.css'



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <img className='h2' src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Sintetizadores <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Accesorios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">FX</a>
                </li>
            </ul>
        
        </div>
        <CartWidget/>
       
    </nav>
  )
}

export default NavBar