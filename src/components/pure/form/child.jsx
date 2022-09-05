import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

    const mensajeRef = useRef("")
    const nameRef = useRef("")

    function pulsarBoton(){ 
        const text = mensajeRef.current.value
        alert(`Texto en el input ${text}`)
    }

    function presionarBotonParams(text){
        alert(`Texto: ${text}`)
    }

    function actualizarNombre (e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{background: "grey", padding: "30px"}}>
            <p onMouseOver={() => console.log("On mouse Over")}>Hola {name}</p>
            <button onClick={()=> console.log("boton 1 pulsado")}>Boton 1</button>
            <button onClick={pulsarBoton}>Boton 2</button>
            <button onClick={()=> presionarBotonParams("hola")}>Boton 3</button>
            <input 
            placeholder='enviar mensaje al padre' 
            onFocus={ () => console.log("Input focus")}
            onChange={ (e) => console.log("input changed", e.target.value)}
            onCopy={()=> console.log("texto copiado del input")}
            ref={mensajeRef}
            />
            <button onClick={ () => send(mensajeRef.current.value)}>Mandar mensaje</button>
            <div style={{marginTop: "20px"}}>
                <form onSubmit={actualizarNombre}>
                    <input ref={nameRef} placeholder='Nuevo nombre'/>
                    <button type='submit'>Actualizar nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
