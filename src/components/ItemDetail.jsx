import { Fragment } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

export function ItemDetail({product}) {
  console.log(product)
  return(
    <Fragment>
      <div>
        <p>{product.description}</p>   
        <p> <strong>titulo:</strong> {product.title}</p>
          
          
        <div >
            
              <img
                src={product.pictureUrl}
                alt="imagens"
                className="w-100"
              />           
              
        </div> 
      </div>
    </Fragment >
  )
}

