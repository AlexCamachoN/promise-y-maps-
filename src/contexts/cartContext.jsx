import { createContext } from "react";
import { useState } from "react";
export const CartContexto = createContext();

export function ContextoGeneral({children}){
    const [cart, setCart] = useState([])
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    const [precioTotal, setPrecioTotal]= useState(0)

    const onAdd = (producto, cantidad)=> {
        const itemExiste = cart.find(item=>item.id ===producto.id)
        if(!itemExiste){
            setCart([...cart, {
                id:producto.id, 
                title:producto.title, 
                pictureUrl:producto.pictureUrl, 
                price:producto.price, 
                cantidad:cantidad, 
                subTotal:(producto.precio*cantidad)}])
            setUnidadesSeleccionadas(unidadesSeleccionadas+1)
            setPrecioTotal(precioTotal+(producto.precio*cantidad))
        }else{
            const cartActualizado = cart.map(item =>{
                if(item.id === producto.id){
                    item.cantidad +=cantidad
                    item.subTotal += (producto.precio*cantidad)
                }
                return item
            })
            setCart(cartActualizado)
            setPrecioTotal(precioTotal+(producto.precio*cantidad))
        }
    }

    const removeCart=(id, cantidad, precio)=>{
        const nuevoCart = cart.filter((item) => item.id !==id)
        setCart (nuevoCart)
        setPrecioTotal(precioTotal-(cantidad*precio))
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
