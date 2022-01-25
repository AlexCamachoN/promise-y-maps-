import { Fragment, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
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
          alt="imagens"
          className="mx-2 w-25 h-25"
          />  

           {/* tratando de enrutar con cart */}
          {/* <Link to={`/cart/${product.stock}`}>       */}
           <ItemCount  stock={product.stock} product={product} />
          {/* </Link>  */}

          <div className=''>
            <p> <strong>titulo:</strong> {product.title}</p>
            <p> <strong>{product.price}</strong> </p>
            <p><strong>Descripcion:</strong>{product.description}</p>    
            <p> <strong>Medidas:</strong> {product.medidas}</p> 
          </div>
        </div>                  
      </div>
      
    </Fragment >
  )
}

