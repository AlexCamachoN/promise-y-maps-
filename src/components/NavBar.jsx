import React from 'react'
import logo from '../logoblanco.png';
import {CartWidget}  from './CartWidget';
import { Link } from 'react-router-dom';


export function NavBar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <a className="navbar-brand" >
                            <img src={logo} width='100'/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li>
                                <Link 
                                className="mx-2"
                                to="/">
                                    Home
                                </Link>
                            </li> 
                            <li>
                                <Link 
                                className="mx-2"
                                to="/Reconocimiento">
                                    Reconocimientos
                                </Link>
                            </li> 
                            <li>
                                <Link 
                                className="mx-2"
                                to="/Exposiciones">
                                    Exposiciones
                                </Link>
                            </li>  
                              
                        </ul><div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/category" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/category/1b47567f-8f7b-444b-aae3-b0c634622d10">Retrato</Link></li>
                            <li><Link className="dropdown-item" to="/category/dbe8757e-9e92-4ed4-b39f-9dfc589691d4">Paisaje</Link></li>
                            <li><Link className="dropdown-item" to="/category/5fc02f99-4091-4486-a531-98459a3e95e9">bodegon</Link></li>
                        </ul>
                    </li>
                    
                </ul>
                </div>
                    </div>
                     <Link to='/Cart'> 
                       <a href="">     
                         <CartWidget numOfItems={4}/>
                       </a>
                    </Link> 
                </div>
            </nav>
        </>
    );
}

export default NavBar;