import  {  useEffect ,  useState  }  from  'react'
import  {  ItemDetail  }  from  './ItemDetail'

import mockedProducts from '../mock/products.json'

 async function getProduct (id)  {
  console.log(id)
  // const  productPromise  =  new  Promise((resolve)  => {
    // setTimeout( ( )  =>  {
     
      const  product =  mockedProducts.filter(
        (item)  => (parseInt(item.id))  ==  (id))

      // resolve(product)
      
       console.log(product)
      return  product
    // } ,  2000 )
  // })

  // const  product  =  await  productPromise
  
}

export function ItemDetailContainer({productoId})  {

  const  [ product , setProduct ]  =  useState()

  useEffect (()  =>  {
    console.log(productoId)
   getProduct(productoId) .then(( product)  =>  {
     
      setProduct(product[0])
    } )

  } ,[productoId])

   return (product? <ItemDetail product={product}/> : <div> impirmiendo itemdetail</div>) 
}


// import React from 'react'
// import ItemDetail from './ItemDetail'

// const ItemDetailContainer = () => {
//     return (
//         <div>
//             soy ItemDetailContainer
//             <ItemDetail/>
//         </div>
//     )
// }

// export default ItemDetailContainer
