import React from "react";
import {useState} from "react";

export function FormControl () {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente'
    })
    
    const handleSubmit = e => {
        e.preventDefault()
    };

    
    const handleChange = e => {
        
    }
    return( 
        <>
            {/* <div className="">
                <h2></h2>
                <form  onSubmit={handleSubmit} >
                    <input 
                        name="todoName"
                        placeholder="ingrese todo"
                        type="text"  
                        className="form-control mb-2" 
                        onChange={e => setTodo({...todo, todoName: e.target.value})}
                    />
                    <textarea
                        name="todoDescripcion"
                        className="form-control mb-2"
                        placeholder="ingrese descripcion de Todo"
                        onChange={e => setTodo({...todo, todoDescripcion: e.target.value})}
                    />
                    <select
                        className="form-control mb-2"
                        name="todoEstado"
                        onChange={e => setTodo({...todo, todoEstado: e.target.value})}
                    >
                        <option value="pendiente">pendiente</option>
                        <option value="completada">completada</option>
                    </select>
                    <button className="btn btn-primary" type="submit">agregar</button>
                </form>
            </div>     */}
        </>

    );
}

export default FormControl
