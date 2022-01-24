import React, { useState} from "react";
import { Link } from "react-router-dom";


export default function ItemCount({stock}){
    console.log(stock)
    const [contador, setContador] = useState(0);
    // <ItemCount stock="5" initial="1" />

    function agregarCarrito (event) {
        alert(`producto agregado`)
    }

    return(
        <div className="">
            <div className="">
                <div className="">
                    <div className="card-body">
                        <h2>pintura #1</h2>
                        <hr />
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
                            {/* contador:  */}
                            { contador}
                        </button>

                        <button className="btn btn-sm btn-primary mx-2"
                            onClick={() =>{
                                if(contador > 0){
                                    setContador(contador - 1)  
                                  }
                                  }} 
                            
                        > 
                            - 
                        </button>
                        <Link to={`/cart`}>
                        <button className="mt-2 btn btn-sm btn-primary" onClick={agregarCarrito}    
                        > 
                            Agregar al carrito
                        </button>
                        </Link>
                    </div>
                </div>
                {/* <div className="card mt-2 mx-2 col-4">
                    <div className="card-body">
                        <h2>pintura #2</h2>
                        <h3 className="card-title">
                            titulo
                        </h3>
                        <button className="btn btn-sm btn-warning">
                            contador: { stock}
                        </button>
                        <hr />
                        <button className="btn btn-sm btn-success"
                            onClick={() => 
                            setStock(stock + 1)} 
                        > 
                            Agregar al carrito
                            
                        </button>
                    </div> */}
                {/* </div> */}
            </div>
        </div>

    );
}