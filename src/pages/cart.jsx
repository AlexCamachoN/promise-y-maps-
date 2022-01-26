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

function CartItem({cartItem,}){
  return(
    <div>
      <Link to={`/p/${cartItem.id}`}>
        <div>
          <ItemImage product={cartItem}/>
        </div>
      </Link>
      <div>
        <h2>{cartItem.title} </h2>
        
      </div>
      <div>
        {cartItem.price.value} {cartItem.price.currecyCode}
      </div>
      <div>
        <span>
          {cartItem.price.value * cartItem.quantity}{' '}
          {cartItem.price.currecyCode}
        </span>{' '}
        x cantidad {cartItem.quantity}
      </div>
    </div>
  )
}

export default function CartPage(){
    const {cart, precioTotal, clearCartd} = useContext(CartContexto)
    // const [orderI, setOrderId]= useState(null)
    // const [orderDate, setOrderDate]= useState(null)

  console.log(cart)

      const carritoTitle=(
        <h1>carrito</h1>
      )

      if(cart.isEmpty){
      
      return ( 
          <Fragment>
            {carritoTitle}
            <div>
              <p>no hay productos en el carrito</p>
            <Link to="/">
              {/* <button>seguir comprando</button>   */}
              <Button>segui en la compra</Button>            
            </Link>
            </div>
      </Fragment>
    )
  }
    return(
    <Fragment>
      {carritoTitle}
          <div>
            <div>
              {
              cart.map(product=>(
              <p>{product.pictureUrl, product.title, product.price} </p>
              ))
              } 
            {/* {cart.map((cartItem)=>{
              return(
                <CartItem
                key={cartItem.id}
                />
              )
            })} */}
            </div>
            <div>
              <h2>detalle del precio</h2>
            </div>
            <p></p>
          </div>
    </Fragment>
  )
}

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

  


