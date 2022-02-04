import  {  useEffect ,  useState  }  from  'react'
import  {  ItemDetail  }  from  './ItemDetail'

import mockedProducts from '../mock/products.json'
import { getProductById } from './firebase'


export function ItemDetailContainer({productoId})  {
  const  [ product , setProduct ]  =  useState()

  async function getProduct (id)  {
    const data = await getProductById(id)
    setProduct(data)
  }

  useEffect (()  =>  {
  getProduct(productoId)
  
    

  } ,[productoId])

   return (product? <ItemDetail product={product}/> : <div> impirmiendo itemdetail</div>) 
}



// import { getProductById } from '../firebase'
// export function ItemDetailContainer({ productId }) {
//   const [isLoading, setIsLoading] = useState(true)
//   const [product, setProduct] = useState()
//   useEffect(() => {
//     async function fn() {
//       setIsLoading(true)
//       try {
//         const product = await getProductById(productId)
//         setProduct(product)
//       } catch (error) {
//         console.error(error)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fn()
//   }, [productId])
//   return isLoading ? <Spinner centered /> : <ItemDetail product={product} />
// }

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
