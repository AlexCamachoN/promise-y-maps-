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

// export default function CartPage() {
    
//   const cartContext = useContext(CartContexto);
//   const {carrito} = cartContext;
  
//   const clear = ()=>{
//       cartContext.clear()
//   }

//   if(carrito == ''){
//       return (
//           <Fragment>
//               <h1 className="mt-4">Su carrito esta vacio</h1>
//               <Link to="/">
//               <button className="btn btn-primary mt-4">Ir a Comprar</button>
//               </Link>
//           </Fragment>
         
//       )
//   }

//   return(
//       <Fragment >
//           <div className="row mt-4 container-fluid">
//           <div className="col-md-8">
//           <h1>Sus Productos</h1>
          
//           <div>
              
//                    <table className="table mt-4" >
//                                         <tbody>
//                                         {carrito.map((product)=>{
//                                           return(
//                                             <tr key={product.id}>
//                                                 <td><img src={`../public/${product.pictureUrl}`} className='img-fluid rounded-start' alt=''/></td>
//                                                 <td>{product.title}</td>
//                                                 <td>cant. {product.contador}</td>
//                                               <td>$ {product.precioTotal}</td>
//                                               <td><button className="btn btn-danger" onClick={()=>{cartContext.removeItem(product.id)}}>X</button></td>
                                              
//                                             </tr>
//                                             )})}
//                                         </tbody>
//                                     </table>
                   

              
                  
              
//           </div>
//           <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
//           </div>
//           <div className="col-md-4">
//                    <h3>Resumen de tu compra</h3>
//                    <p>Total ${cartContext.TotalCompra()}</p>
//                    <button className="btn btn-primary">Finalizar compra</button>
                   
                   
//                    </div> 
//                    </div>   
//       </Fragment>
//   );
  
// }

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
        {cartItem.price.value.moneda} {cartItem.price.value.moneda}
      </div>
      <div>
        <span>
          {cartItem.price.value * cartItem.quantity}{' '}
          {cartItem.price}
        </span>{' '}
        x cantidad {cartItem.quantity}
      </div>
    </div>
  )
}

export default function CartPage(stock){
    const {cart, precioTotal, clearCartd} = useContext(CartContexto)
    // const [orderI, setOrderId]= useState(null)
    // const [orderDate, setOrderDate]= useState(null)

  console.log(cart)
      if(cart.isEmpty){
      
      return ( 
          <Fragment>
            <h1>carrito</h1>
            
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
              <Link to="/">
              <button className="btn btn-sm btn-primary mx-2">finalizar compra</button>
              </Link>
              
            </div>
            <p></p>
          </div>
    </Fragment>
  )
}
//


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

  


