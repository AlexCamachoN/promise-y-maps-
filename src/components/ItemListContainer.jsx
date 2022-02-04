import React from 'react'
import { useState, useEffect } from 'react'
import {ItemList} from './ItemList'
import mockedProducts from '../mock/products.json'
import {getAllProducts, getProductsByCategoryId} from './firebase'

function getProducts(artes){
  const categoria = artes?.categoria
  if(categoria){
    return getProductsByCategoryId(categoria)
  }else{
    return getAllProducts()
  }
}

// async function getProducts (Catid)  {

//     const  productsPromise  =  new Promise ((resolve)  =>  {
          
//        setTimeout (()  =>  {
//          resolve(mockedProducts)
//       } ,  2000 )
//   } )
  
//   const  products = await productsPromise
//    return  products
// }

export function ItemListContainer({artes}){
  console.log(artes)
    const [products, setProducts] = useState([])

    // useEffect(()=>{
    //   const Data=getAllProducts()
    //   console.log(Data)
    // },[])


    useEffect(()=> {
        getProducts(artes).then((products) => {
            // setProducts(products)
            const diferencia = products.filter((elemento)=> {
              if(artes){
                return elemento.categoria == artes
              }else{
                return true
              }
              
              
            })
            setProducts(diferencia)
        })  
    }, [artes])
    return <ItemList products= {products} />
}