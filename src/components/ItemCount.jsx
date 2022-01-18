import React, { useState} from "react";


export default function ItemCount(){
    const [contador, setContador] = useState(0);
    // <ItemCount stock="5" initial="1" />

    const [stock, setStock] =  useState(1);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="card mt-2 mx-2 col-4">
                    <div className="card-body">
                        <h2>pintura #1</h2>
                        <h3 className="card-title">
                            titulo
                        </h3>
                        <button className="btn btn-sm btn-danger">
                            contador: { contador}
                        </button>
                        <hr />
                        <button className="btn btn-sm btn-primary mx-2"
                            onClick={() => 
                            setContador(contador + 1)}
                        > 
                            suma  
                        </button>

                        <button className="btn btn-sm btn-primary mx-2"
                            onClick={() => 
                            setContador(contador - 1)}
                        > 
                            resta  
                        </button>
                        
                        <button className="btn btn-sm btn-primary"
                            onClick={() => 
                            setContador(0)}
                        > 
                            reset  
                        </button>

                    </div>
                </div>
                <div className="card mt-2 mx-2 col-4">
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
                    </div>
                </div>
            </div>
        </div>

    );
}