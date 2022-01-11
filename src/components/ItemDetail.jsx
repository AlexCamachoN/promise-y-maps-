import React from 'react'
import {useEffect, useState } from 'react'
import imagen1 from '../galeria/campesinae.jpg'

const myPromise = new Promise((resolve, reject) => {
    let exito=true
    if(exito){
          setTimeout(() => {
            const products = [{
              id: 'pintura 01',
              name: 'abstracto 1',
              description: ' oleo/Lienzo ',
              imagen: imagen1,
              precio: 250,
              stock: 1
            },
          ] 
            resolve(products)
          }, 2000)
       }
       else{
         reject("error")
       }
  
  })

const ItemDetail = () => {
    const [pinturas, setPinturas] = useState(null)
  
  
  useEffect(() =>{
    myPromise
      .then(res => setPinturas(res))
      .catch(err =>console.log("err:", err))
  },[])

  if(pinturas == null){
      return(    
        <div>Loading...</div>
      )
    }

    return (
      <div>
       {
          pinturas.map(x => 
          <div className='container mt-4'> 
            <div className='row'>
              <div className='card mt-2 mx-2 col-3'>
                <div className="card-body">{
                  x.name}{
                  x.description}{
                  x.imagen}{
                  x.stock}{
                  x.precio}
                  

                </div>
              </div>
              
            </div>
          </div>)
        }                                
      </div>
          
    )
}

export default ItemDetail
