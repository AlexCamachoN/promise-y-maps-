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
    const {cart, removeCart, clearCart, unidadesSeleccionadas, precioTotal} = useContext(CartContexto)

    return(
    <Fragment>
      {
        unidadesSeleccionadas > 0?
        <div>     
      <h1>carrito</h1>     
          <div>
            <div>
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Valor</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
              {
              cart.map(product=>(
              <div className='mt-4 mx-4 d-flex text-center'>

                <img
                src={product.foto}
                alt="imagens"
                className=""
                style={{width:'80px'}}
                />                 
                <p>Obra:{product.nombre}</p>
               <p>Precio:{product.precio.value}</p>
               <p>cantidad:{product.cantidad} </p>
               <div>
               {/* //boton para eliminar productos del carrito con removeCart, se aplica funcion anonima, tambien de destructura removecart*/}
               <button className="btn btn-sm btn-danger mx-2" onClick={()=>removeCart(product.id,product.cantidad,product.precio)}>Eliminar</button>
              </div>
              <hr />
              </div>               
              ))
              }
            </div>
            <div> 
              <p>precio total: $ {precioTotal}</p>            
              <Link to="/">
              <button className="btn btn-sm btn-primary mx-2">seguir comprando</button>
              </Link>
              <button className="btn btn-sm btn-warning mx-2" onClick={()=>clearCart()}>Limpiar carrito</button>             
            </div>
            <p></p>
          </div>
          </div>
          :
          <Fragment>
            <h1>carrito</h1>           
            <div className="text-center">         
              <p>No hay productos en el carrito</p>
              <Link to="/">
              <button className="btn btn-sm btn-primary mx-2">volver a inicio</button>
              </Link>
            </div>
       </Fragment>
      }
    </Fragment>
  )
}



