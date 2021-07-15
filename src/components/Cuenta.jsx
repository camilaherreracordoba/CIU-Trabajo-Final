import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.header`
  left: 0;
  top: 0;
  width: 100%;
  height: 50%;
  background-color:  #6495ED;
  color: black;
  
  box-shadow:
       inset 0 -1em 1em rgba(0,0,0,0),
             0.1em 0.1em 1em rgba(0,0,0,0.3);
`;
const ContenedorDatos = styled.div`
padding: 10px;

color: white;
right: 0 auto;

width: 30%;
//border: 1px solid #DCDCDC ;
`;

const Cuenta = ({cuenta}) => {
    return (  
        <Contenedor>
            <ContenedorDatos>
            
            <h5>{cuenta.name} </h5>
            <h6>{cuenta.username}</h6>
            
            </ContenedorDatos>
        </Contenedor>            
     );
}
 
export default Cuenta;