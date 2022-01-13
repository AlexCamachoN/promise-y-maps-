import React from 'react'
// import logocarro from '../logonuevo.jpg';
import { BiCart } from 'react-icons/bi';


export function CartWidget({numOfItems}) {
    
    return (
        <div
         role="button"
         className="rounded-md bg-blue-600 font-bold text-2xl text-white px-6 flex items-center justify-center">
             
           
            <a className="navbar-brand" href="#">
                {/* <img src={logocarro} width='100'/> */}
                <h3 >  
                    <BiCart />
                    <span className='ml-4'>{numOfItems}</span> 
                </h3>
            </a> 
              
        </div>
    )
}

export default CartWidget