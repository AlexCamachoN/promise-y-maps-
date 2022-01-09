import React from 'react'
// import logocarro from '../logonuevo.jpg';
import { BiCart } from 'react-icons/bi';


export function CartWidget(props) {
    const {numOfItems}=props
    return (
        <div>
           
            <a className="navbar-brand" href="#">
                {/* <img src={logocarro} width='100'/> */}
                <h3 >  <BiCart /> carrito </h3>
            </a> 
            <span>{numOfItems}</span>   
        </div>
    )
}

export default CartWidget