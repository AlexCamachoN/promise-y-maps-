import { createContext } from "react";
import { useState } from "react";
export const CartContexto = createContext();

export function ContextoGeneral (){
    const [carrito, setCarrito] = useState([])

    const addToCart =(products, contador) =>{

        if(carrito.some(product=> product.id === products.id)){
            let index = carrito.findIndex(product => product.id === products.id );
            let producto = carrito[index];
            console.log(producto)
            producto.contador = producto.contador + contador;
            producto.precioTotal = (producto.precioTotal + products.precio.value* contador);
            const newProducto = [...carrito];
            newProducto.splice(index, 1, producto);
            
            setCarrito([...newProducto]);
            console.log(carrito);
            
        }else{
            const precioTotal = products.price.value * contador;
            let producto ={...products, contador, precioTotal}
            setCarrito([...carrito, producto])
            console.log(carrito)
            
           
        }
    }

    const removeItem = (id) =>{
        let index = carrito.findIndex((product)=> product.id === id);
        console.log(index)
        const newProducto = [...carrito];
        newProducto.splice(index, 1);
        setCarrito([...newProducto]);

        
    }

    const clear = () =>{
        setCarrito([]);
    }
    
    const TotalCompra = () => {
        return  carrito.reduce((a,b)=>a + b.precioTotal, 0)
    }
    const contadorProductos =() =>{
        
        return carrito.reduce((a,b)=> a + b.contador, 0)
    }
    

    return(
        <CartContexto.Provider value ={{carrito, setCarrito, addToCart, removeItem, clear, TotalCompra, contadorProductos}}>

            
        
        </CartContexto.Provider>
    )
    
}

// export default ContextoGeneral;

// export function ContextoGeneral({children}){
//     const [cart, setCart] = useState([])
//     const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
//     const [precioTotal, setPrecioTotal]= useState(0)

//     const onAdd = (producto, stock)=> {
//         const itemExiste = cart.find(item=>item.id ===producto.id)
//         if(!itemExiste){
//             setCart.map([...cart, {
//                 id:producto.id, 
//                 title:producto.title, 
//                 pictureUrl:producto.pictureUrl, 
//                 price:producto.price, 
//                 stock:stock, 
//                 subTotal:(producto.price*stock)}])
//             setUnidadesSeleccionadas(unidadesSeleccionadas+1)
//             setPrecioTotal(precioTotal+(producto.price*stock))
//         }else{
//             const cartActualizado = cart.map(item =>{
//                 if(item.id === producto.id){
//                     item.stock +=stock
//                     item.subTotal += (producto.price*stock)
//                 }
//                 return item
//             })
//             setCart(cartActualizado)
//             setPrecioTotal(precioTotal+(producto.price*stock))
//         }
//     }

//     const removeCart=(id, stock, price)=>{
//         const nuevoCart = cart.filter((item) => item.id !==id)
//         setCart (nuevoCart)
//         setPrecioTotal(precioTotal-(stock*price))
//         setUnidadesSeleccionadas(unidadesSeleccionadas-1)
//     }

//     const clearCart=()=>{
//         setCart([])
//         setUnidadesSeleccionadas(0)
//         setPrecioTotal(0)
//     }
//     return(
//         <CartContexto.Provider value={{cart, unidadesSeleccionadas, precioTotal, onAdd, removeCart, clearCart}}>
//             {children}
//         </CartContexto.Provider>
//     )
// }
