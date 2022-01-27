import React, {useContext} from 'react'
// import logocarro from '../logonuevo.jpg';
import { BiCart } from 'react-icons/bi';
import { CartContexto } from '../contexts/CartContext'

export function CartWidget({numOfItems}) {

    const consuCart= useContext(CartContexto)
    

    
    return (
        <div
        
         className="">
             
           
            <a className="navbar-brand" href="#">
                {/* <img src={logocarro} width='100'/> */}
                <h3 >  
                    <BiCart />
                    <span className='ml-4'>{consuCart.cart.length}</span> 
                </h3>
            </a> 
              
        </div>
    )
}

export default CartWidget