import React, {useContext} from 'react'
// import logocarro from '../logonuevo.jpg';
import { BiCart } from 'react-icons/bi';
import { CartContexto } from '../contexts/CartContext'

export function CartWidget({numOfItems}) {

    const consuCart= useContext(CartContexto)
    const cantidades=consuCart.cart.map(items=>items.cantidad)//trae los arrglos del carrito,solo los elementos cantidad
    const totalProductos=cantidades.reduce((valorAnterior,valorActual)=>valorAnterior+valorActual,0)
    
        
    return (
        <div
        
         className="">
                        
            <a className="navbar-brand" href="#">
                {/* <img src={logocarro} width='100'/> */}
                <h3 >  
                    <BiCart />
                    <span className='ml-4'>{totalProductos}</span> 

                </h3>
            </a> 
              
        </div>
    )
}

export default CartWidget