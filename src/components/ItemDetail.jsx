import { Fragment, useContext } from 'react'
import ItemCount from './ItemCount'
import { CartContexto } from '../contexts/CartContext'


export function ItemDetail({product}) {
  // // console.log(product)

  // // informacion globalizada)
  const infoGlobal = useContext(CartContexto)
  console.log(infoGlobal)

  return(
    <Fragment>
      <div className='card  mt-2 mx-2 text-center'>
        <div  className='mt-4 mx-4 d-flex text-center'>  
          <img
          src={product.pictureUrl}
          alt="imagens"
          className="w-25 h-25"
          />  
          <img
          src={product.detalleimagen}
          // alt="imagens"de esta manera estaba agregando otro imagen como detalle
          alt={"pintura de " + product.title}
          className="mx-2 w-25 h-25"
          />  

          

          <div className=''>
            <p> <strong>Titulo:</strong> {product.title}</p>
            <p> Precio: $<strong> {product.price.value}</strong> </p>
            <p><strong>Descripción:</strong>{product.description}</p>    
            <p> <strong>Medidas:</strong> {product.medidas}</p> 
          </div>
           <ItemCount  stock={product.stock} product={product} />
        </div>                  
      </div>
      
    </Fragment >
  )
}

