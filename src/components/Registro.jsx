import React, { Fragment, useState } from 'react';
import { Alert} from 'react-bootstrap';
import styled from '@emotion/styled';

const Contenedor = styled.div`
//position: center;
width: 30%;
padding: 20px;
//display: flex;
justify-content: center;
//border: 1px solid #DCDCDC ;
margin: 0 auto;
font-family: Arial, Helvetica, sans-serif;
`;

const Formulario = styled.div`
justify-content: center;
text-align: left;
padding: 20px;
//display:flex;
    justify-content: center;
    align-items: center;
width: 50%;
`;

const Label = styled.label`

width: 100%;
    height: 50%;
    font-size: medium;
    border-radius: 5px;
`;
const Button = styled.button`
  color: ##87CEEB;
  margin-right: 0;
  margin-botton: 0;
  width: 100%;
  margin: 5px;
  border: 1px solid #DCDCDC ;
  border-radius: 5px;
  :hover {
      background-color: #6495ED	;
      color: white;
      border: 1px solid white;
  }
`;
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
        <Contenedor>
        
        { error ? <Alert variant="danger"> Tenés que completar todos los campos </Alert> : null }
        
        <Formulario>
        <h2>Registrarse</h2>
        <form onSubmit={submitCuenta} >
            <Label> Nombre </Label>
            <input type="text" name="name" value={name} placeholder="Nombre" onChange={handleChange}/>
            <Label> Nombre de Usuario </Label>
            <input type="text" name="username" value={username} placeholder="Nombre de usuario" onChange={handleChange}/>
            <Label> Email </Label>
            <input type="text" name="email" value={email} placeholder="Email" onChange={handleChange}/>
            <Button type="submit">
                Crear cuenta
            </Button>
        </form>
        </Formulario>
        </Contenedor>
    </Fragment> 
    );
}
 
export default Registro;