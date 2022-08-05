import { useContext, useState } from "react";
import { Fragment } from "react";
import { CartContexto } from "../contexts/CartContext";
import {useForm} from 'react-hook-form'
import { Link } from "react-router-dom";
import  Swal from   'sweetalert2' 
import withReactContent from  'sweetalert2-react-content'
// import { firestore } from 'firebase'

import { TextFormulario } from "../components/TextFormulario";
import { createOrder } from "../components/firebase";


export default function CartPage(stock, products){
    const  MySwal  =  withReactContent ( Swal )
    const {cart, removeCart, clearCart, unidadesSeleccionadas, precioTotal,} = useContext(CartContexto)
    // console.log(createOrder)

    //se crea form y se trae de la libreria react-hook-form
    const form =useForm()
  
    //funcion para agregar la orden mediante onSubmit
    async function onSubmit(formValues) {
      try {
        
        console.log(cart)
        const newOrderData = {
          buyer: formValues,
          items: cart,
          total: precioTotal.toFixed(2),//es para los decimales
        }
        
        const newOrderId = await createOrder(newOrderData)
        await MySwal.fire({
          title: <strong>Compra realizada!</strong>,
          html: <i>{`Gracias por realizar tu compra. Tu número de orden de compra es: ${newOrderId}, con el podras hacer el seguimiento a tu pedido`}</i>,
          icon: 'success'
        })
      
        // alert(`Gracias por tu compra. OrderID: ${newOrderId} lo vamos a contactar`)

        form.reset()

        clearCart()
      } catch (error) {
        // alert(`Algo inesperado ha ocurrido.`)

        console.error(error)
      }
    }


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
            <div >
              <p>precio total: $ {precioTotal}</p>
              {/* <Link to="/">
              <button className="btn btn-sm btn-primary mx-2">seguir comprando</button>
              </Link>
               */}
              <div className="card mx-2 mt-4 d-flex">
              <section>
                <h2>Completar pedido</h2>
                <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <TextFormulario
                title="Nombre"
                inputProps={{
                  placeholder: 'Alex Camacho',
                  required: true,
                  ...form.register('nombre'),
                }}
              />
              <TextFormulario
                title="Correo"
                inputProps={{
                  placeholder: 'me@example.com',
                  required: true,
                  ...form.register('email'),
                }}
              />
              <TextFormulario
                title="Telefono"
                inputProps={{
                  placeholder: '123456789',
                  required: true,
                  ...form.register('phone'),
                }}
              />
              <button className="btn btn-sm btn-warning mx-2" 
              onClick={()=>onSubmit()}
              disabled={cart.length === 0}
              >
                Finalizar compra
              </button>
              
              </form>
              </section>
              </div>
            </div>
            
           
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



