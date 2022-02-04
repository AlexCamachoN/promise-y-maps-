import { getFirestore } from './conector'

//funcion reutilitaria 
function documentToProduct(document) {
    return{
        id: document.id,
        ...document.data(),
    }
}

export async function getAllProducts(){

    //se puede llamar tambien como database(db)
    const db = getFirestore()
    console.log("holaaaa")
   
    const snapshot = await db.collection('products').get()
    console.log("hh")

    const products = snapshot.docs.map(documentToProduct)
    console.log(products)
    return products
}

export async function getProductById(productId) {
    const db = getFirestore()
  const doc = await db.collection('products').doc(productId).get()
  
  if (!doc.exists) {
    return null
  }
  
  return documentToProduct(doc)
}

export async function getProductsByCategoryId(categoria){}