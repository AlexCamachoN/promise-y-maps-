import React from 'react'
import { useState, useEffect } from 'react'
import {ItemList} from './ItemList'
import mockedProducts from '../mock/products.json'

async function getProducts (Catid)  {
    const  productsPromise  =  new Promise ((resolve)  =>  {
    // const categories = mockedProducts.filter((products)=>{
    //       const result = mockedProducts.filter(mockedProducts=> products.lengh)
    //     }) 
          
      setTimeout (()  =>  {
        resolve(mockedProducts)
      } ,  2000 )
    } )
  
    const  products = await productsPromise
    return  products
  }
export function ItemListContainer({artes}){
  console.log(artes)
    const [products, setProducts] = useState([])


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