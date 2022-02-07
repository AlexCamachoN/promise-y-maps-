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

