import { firestore } from 'firebase'
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

export async function getProductsByCategoryId(categoria){
  const db = getFirestore()

  const snapshot = await db
      .collection('products')
      .where('categoria', '==', categoria)
      .get()

  const products = snapshot.docs.map(documentToProduct)

  return products
}


//funcion para crear las ordenes y se dispara en la pagina del carrito,finalizar compra
export async function createOrder(order){
  console.log(order)
  const db = getFirestore()

  const data={
    buyer: order.buyer,
    items: order.items,
    createdAt: firestore.Timestamp.fromDate(new Date()),//fecha de creacion
    total: order.total,
  }

  //aqui sucede la magia para realizar el pedido/orden,firebase aqui crea la collection y la inserta a la vez
  const document = await db.collection('orders').add(data)
  return document.id
}