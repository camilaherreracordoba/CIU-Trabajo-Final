import React, { Fragment, useState } from 'react';

import styled from '@emotion/styled';
const ConetedorPublicacion = styled.div`
border-color: #778899;

border: 1px solid #DCDCDC ;
border-radius: 5px;
padding: 5px;
align-items: center;

`; 
const Input = styled.input`

width: 100%;
outline:none;
display: inline-flex;
:active { border-style: none;}
border-style: none;



`;
const Button = styled.button`
  color: ##87CEEB;
  margin-right: 0;
  margin-botton: 0;
  margin: 5px;
  border: 1px solid #DCDCDC ;
  border-radius: 5px;
  :hover {
      background-color: #6495ED	;
      color: white;
  }
`;

const Publicacion = ({crearPublicacion}) => {
    const [publicacion, guardarPublicacion] = useState({
        title:'', body:'',
    })
//    const [error, actualizarError] = useState(false);
    const handleChange = e => {
        guardarPublicacion({
            ...publicacion,
            [e.target.name]:e.target.value
        })
    }
    const {title, body} = publicacion;
    const submitPublicacion = e => {
        e.preventDefault();
        if(body.trim()===''){
            console.log('Escribí algo antes de postear')
            return;
        }
        crearPublicacion(publicacion);
        guardarPublicacion({
            title:'', body:''
    })
    }
    
    return ( 
        <Fragment>
            <ConetedorPublicacion>
            <form onSubmit={submitPublicacion}>
            <Input type="text" name="title" value={title} placeholder="Agregale un título a tu publicacion" onChange={handleChange} maxlength="4"/>
            <Input type="text" name="body" value={body} placeholder="Agregá una publicación" onChange={handleChange}/>
            <Button type="submit">
                Publicar
            </Button>
            </form>
            </ConetedorPublicacion>
        </Fragment>
     );
}
 
export default Publicacion;