import React, {useState} from 'react';
import Child from '../pure/form/child';

const Father = () => {

    const [name, setName] =useState("Mariana")

    function mostrarMensaje(text) {
        alert(`Mensaje recibido: ${text}`)
    }

    function updateName (newName){
        setName(newName)
    }


    return (
        <div style={{background: "tomato", padding: "10px" }}>
            <Child name={name} send={mostrarMensaje} update={updateName}></Child>
        </div>
    );
}

export default Father;
