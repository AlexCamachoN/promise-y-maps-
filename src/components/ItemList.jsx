
import { Link } from 'react-router-dom'
import {Item} from './Item'
import "../styles/ItemList.css"

export function ItemList ({products}) {
  // console.log(products)
  return(
    <div className="container">
      <h3 className="title">Lista de productos, loading...</h3>
      <div className='item_list'>

        {products?.map((product) => {
          // console.log(product)
          return (  

            // <Item key={product.id} product={product} />
            
              <Item key={product.id} product={product}/>
           
          )
        })}
      </div>
    </div>
  )
}

