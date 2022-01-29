import { useContext, useState } from "react";
import { Fragment } from "react";
import { ItemDetail } from "../components/ItemDetail";
import { ItemList } from "../components/ItemList";
import { CartContexto } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Button from "react"
import { Item, ItemImage } from "../components/Item";
import mockedProducts from '../mock/products.json'
import ContextoGeneral from "../contexts/CartContext";
import { useCart } from "../hooks/useCart";




export default function CartPage(stock, products){
    const {cart, precioTotal, clearCartd} = useContext(CartContexto)

  console.log(cart)
      if(cart.isEmpty){
      
      return ( 
          <Fragment>
            <h1>carrito</h1>           
            <div>
              <p>no hay productos en el carrito</p>
            <Link to="/">              
              <Button>segui en la compra</Button>            
            </Link>
            </div>
      </Fragment>
    )
  }
    return(
    <Fragment>
      <h1>carrito</h1>     
          <div>
            <div>
              {
              cart.map(product=>(
              <p> {<img
                src={product.pictureUrl}
                alt="imagens"
                className="w-25 h-25"
                />} {product.title} {product.price.value}</p>  
                           
              ))
              }
            </div>
            <div>
              <h2>detalle del precio</h2>
              <Link to="/">
              <button className="btn btn-sm btn-primary mx-2">seguir comprando</button>
              </Link>
              <button className="btn btn-sm btn-warning mx-2">finalizar compra</button>
              <td><button className="btn btn-danger" onClick={()=>{CartContexto.removeItem(products.id)}}>X</button></td>
              
            </div>
            <p></p>
          </div>
    </Fragment>
  )
}

// function CartItem({cartItem,}){
//   return(
//     <div>
//       <Link to={`/p/${cartItem.id}`}>
//         <div>
//           <ItemImage product={cartItem}/>
//         </div>
//       </Link>
//       <div>
//         <h2>{cartItem.title} </h2>
        
//       </div>
//       <div>
//         {cartItem.price.value.moneda} {cartItem.price.value.moneda}
//       </div>
//       <div>
//         <span>
//           {cartItem.price.value * cartItem.quantity}{' '}
//           {cartItem.price}
//         </span>{' '}
//         x cantidad {cartItem.quantity}
//       </div>
//     </div>
//   )
// }

