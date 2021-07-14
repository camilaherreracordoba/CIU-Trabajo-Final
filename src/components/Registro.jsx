import React, { Fragment, useState } from 'react';
import { Alert} from 'react-bootstrap';
//const urlPlace = 'http://jsonplaceholder.typicode.com/users'

const Registro = ({crearCuenta}) => {
    const [cuenta, setCuenta] = useState({
        name:'', username:'', email:''  
    })
    const [error, actualizarError] = useState(false);
    const handleChange = e => {
        setCuenta({
            ...cuenta,
            [e.target.name]:e.target.value
        })
    }
    const {name, username, email} = cuenta;
    
    const submitCuenta = e => {
        e.preventDefault();
        if(name.trim() === "" || username.trim() === "" || email.trim() === "") {
            console.log('Ingresá todos los datos')
            actualizarError(true);
            return;
        }

        actualizarError(false);
        
        crearCuenta(cuenta);
        setCuenta({
            name: '', username: '', email: ''
        })
    }
    return (
    <Fragment>
        <h2>Registrarse</h2>
        { error ? <Alert variant="danger"> Tenés que completar todos los campos </Alert> : null }
        <form onSubmit={submitCuenta} >
            <label> Nombre </label>
            <input type="text" name="name" value={name} placeholder="Nombre" onChange={handleChange}/>
            <label> Nombre de Usuario </label>
            <input type="text" name="username" value={username} placeholder="Nombre de usuario" onChange={handleChange}/>
            <label> Email </label>
            <input type="text" name="email" value={email} placeholder="Email" onChange={handleChange}/>
            <button type="submit">
                Crear cuenta
            </button>
        </form>
    </Fragment> 
    );
}
 
export default Registro;