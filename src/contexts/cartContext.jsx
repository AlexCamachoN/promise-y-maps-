import { createContext } from "react";
import { useState } from "react";
export const CartContexto = createContext();

export function ContextoGeneral({children}){
    const [cart, setCart] = useState([])
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    const [precioTotal, setPrecioTotal]= useState(0)

    const onAdd = (producto, stock)=> {
        const itemExiste = cart.find(item=>item.id ===producto.id)
        if(!itemExiste){
            setCart([...cart, {
                id:producto.id, 
                title:producto.title, 
                pictureUrl:producto.pictureUrl, 
                price:producto.price, 
                stock:stock, 
                subTotal:(producto.price*stock)}])
            setUnidadesSeleccionadas(unidadesSeleccionadas+1)
            setPrecioTotal(precioTotal+(producto.price*stock))
        }else{
            const cartActualizado = cart.map(item =>{
                if(item.id === producto.id){
                    item.stock +=stock
                    item.subTotal += (producto.price*stock)
                }
                return item
            })
            setCart(cartActualizado)
            setPrecioTotal(precioTotal+(producto.price*stock))
        }
    }

    const removeCart=(id, stock, price)=>{
        const nuevoCart = cart.filter((item) => item.id !==id)
        setCart (nuevoCart)
        setPrecioTotal(precioTotal-(stock*price))
        setUnidadesSeleccionadas(unidadesSeleccionadas-1)
    }

    const clearCart=()=>{
        setCart([])
        setUnidadesSeleccionadas(0)
        setPrecioTotal(0)
    }
    return(
        <CartContexto.Provider value={{cart, unidadesSeleccionadas, precioTotal, onAdd, removeCart, clearCart}}>
            {children}
        </CartContexto.Provider>
    )
}
