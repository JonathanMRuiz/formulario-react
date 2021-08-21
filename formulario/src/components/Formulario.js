import React, { useState } from 'react';

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    });
    
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const enviarDatos = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>

                <div className="col-md-3">
                    <input
                    type="text"
                    name="nombre" 
                    className="form-control"
                    placeholder="Ingrese nombre"
                    onChange ={handleInputChange}
                    />
                </div>

                <div className="col-md-3">
                    <input
                    type="text"
                    name="apellido" 
                    className="form-control"
                    placeholder="Ingrese apellido"
                    onChange = {handleInputChange}
                    />
                </div>

                <div className="col-md-3">
                    <button  
                    className="btn btn-dark"
                    type="submit">Enviar 
                    </button>
                </div>

                <h3>
                    {datos.nombre}
                </h3>
            </form>
        </>
    )
}

export default Formulario;