
function NavBar() {


    return(
        <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
             <a className="navbar-brand text-warning" href="#">KSynth</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Acerca de</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                        Categorías
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Sintetizadores</a>
                        <a className="dropdown-item" href="#">Accesorios</a>
                        <a className="dropdown-item" href="#">Procesadores de FX</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar