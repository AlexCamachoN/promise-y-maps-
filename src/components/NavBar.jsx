import React from 'react'
import logo from '../logoblanco.png';
import {CartWidget}  from './CartWidget';
import { NavLink } from 'react-router-dom';


export function NavBar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        <img src={logo} width='100'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li>
                                <NavLink 
                                className="mx-2"
                                to="/Home">
                                    Home
                                </NavLink>
                            </li>      
                        </ul>
                    </div>
                            
                    <CartWidget numOfItems={4}/>
                </div>
            </nav>
        </>
    );
}

export default NavBar;