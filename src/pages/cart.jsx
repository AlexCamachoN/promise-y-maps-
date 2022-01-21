import { useContext } from "react";
import { Fragment } from "react";
import { ItemDetail } from "../components/ItemDetail";
import { CartContexto } from "../contexts/CartContext";

export default function CartPage(){
    // const {nombre} = useContext(CartContexto)
    return ( 
            <div>
                Cartpage
                {/* <p>{nombre}</p>               */}
            </div>
    )
}