import React, { useState } from 'react';

//Definiendo estilos en constantes. 

//  estilo para usuario logueado
const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}

//  estilo para usuario no logueado

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};

const GreetingStyled = (props) => {

    //  Creamos un estado para el componente
    //  y asi controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Por favor, loguearse</p>)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {   logged ? greetingUser() : pleaseLogin() }
            <button onClick={() => {
                console.log("boton pulsado")
                setLogged(!logged);
            }}>
                {   logged ? "Logout" : "Login" }
            </button>
        </div>
    );
}

export default GreetingStyled;