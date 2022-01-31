import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContexto } from "../contexts/CartContext";

export default function ItemCount({stock, product}){
    const consContext = useContext(CartContexto)
    console.log(consContext)

    console.log(stock)
    const [contador, setContador] = useState(0);
    // <ItemCount stock="5" initial="1" />

    function agregarCarrito (event) {
        consContext.onAdd(product,contador)
        alert(`producto agregado`)
    }
    console.log(product)

    return(
        <div className="">
            <div className="">
                <div className="">
                    <div className="card-body">
                        <h2>pintura #1</h2>
                        <hr />
                        {/* boton de contar suma*/}
                        <button className="btn btn-sm btn-primary mx-2"
                            onClick={() =>{
                            if(contador < stock){
                              setContador(contador + 1)  
                            }
                            }} 
                        > 
                            +  
                        </button>
                        
                        <button className="btn btn-sm btn-success">
                            {/* contador empieza en cero y termina en cero  */}
                            { contador}
                        </button>
                            {/* contador para disminuir cantidad  */}
                        <button className="btn btn-sm btn-primary mx-2"
                            onClick={() =>{
                                if(contador > 0){
                                    setContador(contador - 1)  
                                  }
                                  }} 
                            
                        > 
                            - 
                        </button>
                        {/* <Link to={`/cart`}> */}
                        <button className="mt-2 btn btn-sm btn-primary" onClick={agregarCarrito}    
                        > 
                            Agregar al carrito
                        </button>
                        {/* </Link> */}

                        <Link to={`/cart`}>
                        <button className="mt-2 btn btn-sm btn-primary"     
                        > 
                            Irme al carrito
                        </button>
                        </Link>
                    </div>
                </div>               
            </div>
        </div>

    );
}