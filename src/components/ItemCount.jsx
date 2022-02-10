import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContexto } from "../contexts/CartContext";
import  Swal from   'sweetalert2' 
import withReactContent from  'sweetalert2-react-content'

export default function ItemCount({stock, product}){
    const  MySwal  =  withReactContent ( Swal )
    const consContext = useContext(CartContexto)
    console.log(consContext)

    console.log(stock)
    const [contador, setContador] = useState(0);
    // <ItemCount stock="5" initial="1" />

    function agregarCarrito (event) {
        consContext.onAdd(product,contador)
    }
    console.log(product)

    return(
        <div className="">
            <div className="">
                <div className="">
                    <div className="card-body">
                        {/* <h2>pintura #1</h2> */}
                        <hr />
                        
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
                        
                        <button className="btn btn-sm btn-success">
                            {/* contador empieza en cero y termina en cero  */}
                            { contador}
                        </button>
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