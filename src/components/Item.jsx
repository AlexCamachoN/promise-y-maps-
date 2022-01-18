import ProductDetail from "../pages/ProductDetail"
import { Link } from 'react-router-dom';
import { Fragment } from "react/cjs/react.development";
import "../styles/Item.css"

export function Item({ product }) {
    return (
      <Fragment>              
        <div className="cards">
          <div >
            <img
              src={product.pictureUrl}
              alt="imagens"
              className="w-100"
            />
          </div>  
          <p>Titulo:{product.title}</p>
          <p>Price:{product.price} </p>                                     
          <p> In Stock: {product.stock}</p>

          <button className="btn btn-sm btn-danger mx-2">                       
          ver detalle                         
          </button>
                        
            
        </div>
      </Fragment>
    )
  }