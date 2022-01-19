import React from 'react'
import { useState, useEffect } from 'react'
import {ItemList} from './ItemList'
import { useParams } from 'react-router-dom'
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
export function ItemListContainer(Catid){
    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts(Catid).then((products) => {
            setProducts(products)
        })
    }, [])
    return <ItemList products= {products} />
}