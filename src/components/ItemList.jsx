
import { Link } from 'react-router-dom'
import {Item} from './Item'
import "../styles/ItemList.css"

export function ItemList ({products}) {
  console.log(products)
  return(
    <div className="container">
      <h3 className="title">Lista de productos</h3>
      <div className='item_list'>

        {products?.map((product) => {
          console.log(product)
          return (  

            // <Item key={product.id} product={product} />
            
              <Item key={product.id} product={product}/>
           
          )
        })}
      </div>
    </div>
  )
}


// const myPromise = new Promise((resolve, reject) => {
//   let exito=true
//   if(exito){
//         setTimeout(() => {
//           const products = [{
//             id: '1',
//             name: 'pintura 1',
//             description: ' oleo',
//             imagen: "/galeria/abrazo.jpg",
//             stock: 1
//           },
//           {
//             id: '2',
//             name: 'pintura 2',
//             description: ' oleo',
//             imagen: "/",
//             stock: 2
//           },
//           {
//             id: '3',
//             name: 'pintura 3',
//             description: ' oleo',
//             imagen: "",
//             stock: 3
//           }
//         ] 
//           resolve(products)
//         }, 2000)
//      }
//      else{
//        reject("error")
//      }

// })
     
// export function ItemList(){ 
//   const [pinturas, setPinturas] = useState(null)
  
  
//   useEffect(() =>{
//     myPromise
//       .then(res => setPinturas(res))
//       .catch(err =>console.log("err:", err))
//   },[])

//   if(pinturas == null){
//       return(    
//         <div>Loading...</div>
//       )
//     }

//     return (
//       <div>
//         {
//           pinturas.map(x => 
//           <div className='container mt-4'> 
//             <div className='row'>
//               <div className='card mt-2 mx-2 col-3'>
//                 <div className="card-body">{
//                   x.name}{
//                   x.description}
//                   <button className="btn btn-sm btn-primary">
//                     detalle del producto
//                   </button> 
//                   <button className="btn btn-sm btn-warning">
//                     agregar al carrito
//                   </button> 

//                 </div>
//               </div>
              
//             </div>
//           </div>)
//         }                                 
//       </div>
          
//     )
// }

// export  default ItemList