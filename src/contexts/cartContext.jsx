import { createContext } from "react";
import { useState } from "react";
export const CartContexto = createContext();

export function ContextoGeneral({children}){
    const [cart, setCart] = useState([])
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    const [precioTotal, setPrecioTotal]= useState(0)
    function onAdd (producto, contador)  {
        console.log(producto)
        const itemExiste = cart.find(item => item.id === producto.id)
        // console.log(itemExiste)
        if (!itemExiste) {
            setCart([...cart, {id:producto.id, nombre:producto.title, foto:producto.pictureUrl, precio:producto.price.value, cantidad:contador, precioTotal:(producto.precio*contador)}])
            setUnidadesSeleccionadas(unidadesSeleccionadas+1)
            setPrecioTotal(precioTotal+(producto.price.value*contador))
        } else {
            const cartActualizado = cart.map(item => {
                if (item.id === producto.id) {
                    item.cantidad += contador
                    item.precioTotal += (producto.price.value*contador)
                }
                return item
            })
            setCart(cartActualizado)
            console.log(cartActualizado)
            setPrecioTotal(precioTotal+(producto.price.value*contador))
        }
    }

    const removeCart=(id, stock, price)=>{
        const nuevoCart = cart.filter((item) => item.id !==id)
        setCart (nuevoCart)
        setPrecioTotal(precioTotal-(stock*price.value))
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



