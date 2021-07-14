import React from 'react';
import styled from '@emotion/styled';
import { Navbar } from 'react-bootstrap';

const Contenedor = styled.div`
    margin: 0 auto;
`;

const Cuenta = ({cuenta}) => {
    return ( 
                   
            
            
        <Navbar>
        <p>
                Nombre: {cuenta.name}
            </p>
            <p>
                Usuario: {cuenta.username}
            </p>
            <p>
                Email: {cuenta.email}
            </p>
        
            </Navbar>            
     );
}
 
export default Cuenta;