import ProductDetail from "../pages/ProductDetail"
import { Link } from 'react-router-dom';
import { Fragment } from "react/cjs/react.development";
import "../styles/Item.css"

export function ItemImage({ product }) {  
  return (
    <div >
      <img
        src={product.pictureUrl}
        alt={product.title}
        className=""
      />
    </div>
  )
}


export function Item({ product }) {
    return (
      <Fragment>              
        <div className="cards">
          <div >
          <Link  to={`/p/${product.id}`}>
            <img
              src={product.pictureUrl}
              alt="imagens"
              className="w-100"
            />           
            </Link>
          </div>  
          <p><strong>"{product.title}"</strong></p>
          <p> $ {product.price.value} </p>                                     
          <p > Stock: {product.stock}</p>
          <p>Codigo: {product.codigo} </p>

          <Link  to={`/p/${product.id}`}>
          <button className="btn btn-sm btn-outline-info col-12 mx-auto align-bottom" >                       
          ver detalle                         
          </button>
          </Link>
                        
          
        </div>
      </Fragment>

    )
  }