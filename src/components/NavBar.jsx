import React from 'react'
import logo from '../logoblanco.png';
import {CartWidget}  from './CartWidget';
import { Link } from 'react-router-dom';


export function NavBar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
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
                            <li>
                                <Link 
                                className="mx-2"
                                to="/categories/abstracto">
                                    abstracto
                                </Link>
                            </li> 
                            <li>
                                <Link 
                                className="mx-2"
                                to="/categories/desnudo">
                                    Desnudo
                                </Link>
                            </li>
                            <li>
                                <Link 
                                className="mx-2"
                                to="/categories/paisaje">
                                    Paisaje
                                </Link>
                            </li>
                            <li>
                                <Link 
                                className="mx-2"
                                to="/categories/bodegon">
                                    Bodegón
                                </Link>
                            </li>
                            <li>
                                <Link 
                                className="mx-2"
                                to="/categories/retrato">
                                    retratos
                                </Link>
                            </li>
                            <li>
                                <Link 
                                className="mx-2"
                                to="/categories/materiales">
                                    Materiales Artísticos
                                </Link>
                            </li>
                              
                        </ul>
                     
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