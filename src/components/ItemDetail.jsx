import ItemCount from './ItemCount'

export function ItemDetail({product}) {
  return(
    <div  className = "" >
      {JSON . stringify( product, null,  2 ) }
      <div>
      <ItemCount key={product.id} product={product} />
      </div>
     
    </div >
  )
}

