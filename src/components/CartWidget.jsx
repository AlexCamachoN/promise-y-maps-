import React, {useContext} from 'react'
// import logocarro from '../logonuevo.jpg';
import { BiCart } from 'react-icons/bi';
import { CartContexto } from '../contexts/CartContext'

export function CartWidget({numOfItems}) {

    const consuCart= useContext(CartContexto)
    

    
    return (
        <div
         role="button"
         className="rounded-md bg-blue-600 font-bold text-2xl text-white px-6 flex items-center justify-center">
             
           
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