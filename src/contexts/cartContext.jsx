import { createContext } from "react";
import { useState } from "react";

export const CartContexto = createContext();

export default function ContextoGeneral(props){
    const [nombre, setNombre] = useState('alex')
    const [apellido, setApellido] = useState('camacho')
    return(
        <CartContexto.Provider value={{nombre, apellido} }>
            {props.children}
        </CartContexto.Provider>
    )
}