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


export default function CartPage(){
    const {cart, precioTotal, clearCart} = useContext(CartContexto)
    const [orderId, setOrderId]= useState(null)
    const [orderDate, setOrderDate]= useState(null)


    // const finishOrder = async() => {
    //     const user = {
    //         nombre: "alex",
    //         email: "cnalex_2@hotmail.com",
    //         telefono: ""
    //     }

    //     const itemsCart = cart.map((product) => ({
    //         id: product.id,
    //         title: product.titulo,
    //         quantity: product.cantidad
    //     }))
    //     await newOrder(itemsCart, user)
    // }
    // const newOrder = async (itemsCart, user) => {
    //     const db = mockedProducts
    //     const orders = db.collection("orders")
    //     const order = {
    //       buyer: user,
    //       items: itemsCart,
    //       date: new Date().toLocaleDateString(),
    //       precioTotal: precioTotal,
    //     }
    //     try {
    //       const { id } = await orders.add(order)
    //       setOrderId(id)
    //       setOrderDate(order.date)
    
    //       clearCart()
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    
    //   if (cart.length === 0 && orderId === null) {
    //     return (
    //       <h2>No hay productos seleccionados en el carrito</h2>
    //     )
    //   } else if (orderId !== null) {
    //     return (
    //       <div >
    //       <p >¡Gracias por tu compra!</p>
    //         <p >Orden: {orderId}</p>
    //         <p >La fecha de compra es:  {orderDate}</p>
    //         <Button as={Link} to="/" >Volver a Home</Button>
    //       </div>
          
    //     )
    //   } else if (cart.length > 0)
    
    // const {nombre} = useContext(CartContexto)
    console.log(cart)
    return ( 
        <Fragment>
          {
            cart.map(product=>(
              <p>{product.pictureUrl, product.title, product.price} </p>
            ))
          }
            {/* <div>
                Cartpage
                <button>hola</button>
                             
                {cart.map((item)=>
                <ItemList
                key={`cart-${item.id}`}
                />
                )}
            </div>
            <h2>Total :$ {precioTotal}</h2>
            <Button variant="danger" onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button variant="danger" onClick={() => finishOrder()}>Comprar</Button> */}

        </Fragment>
    )
}
