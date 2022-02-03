// import { getFirestore } from './conector'

// //funcion reutilitaria 
// function documentToProduct(document) {
//     return{
//         id: document.id,
//         ...document.data(),
//     }
// }

// export async function getAllProducts(){

//     //se puede llamar tambien como database(db)
//     const db = getFirestore()

//     const snapshot = await db.collection('products').get()

//     const products = snapshot.docs.map(documentToProduct)

//     return products
// }

// export async function getProductById(productId) {}

// export async function getProductsByCategoryId(categoria){}