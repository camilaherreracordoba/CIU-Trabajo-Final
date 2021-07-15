import React, { Fragment, useState, useEffect } from 'react';
import Publicacion from '../components/Publicacion';
import { Card } from 'react-bootstrap';
import styled from '@emotion/styled';
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'


const Contenedor = styled.div`
h3 {
  text-align: center;
  padding: 5px

}
`;
const Publicaciones = () => {
    let cuentaInicial = JSON.parse(localStorage.getItem("cuenta"));
    let publicacionesIniciales = JSON.parse(localStorage.getItem("publicaciones"));
  if(!publicacionesIniciales) {
    publicacionesIniciales = [];
  }
  const [publicaciones, guardarPublicaciones] = useState(publicacionesIniciales);
  useEffect ( () => {
    let publicacionesIniciales = JSON.parse(localStorage.getItem("publicaciones"));
    if(publicacionesIniciales) {
      localStorage.setItem('publicaciones', JSON.stringify(publicaciones))
    } else {
      localStorage.setItem('publicaciones', JSON.stringify([]));
    }
  }, [publicaciones]);

  const crearPublicacion = async (post) => {
    try {
      const api = await fetch(urlPosts, {
        method: 'POST',
        body: JSON.stringify({
          title: post.title,
          body: post.body,
          userId: cuentaInicial.id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        
      }
      
      );
      
      
      const posteo = await api.json()
      if (publicaciones.length !== 0) {
        // como el POST a la api está simulado agrego esto para que cambie el id.
          posteo.id= publicaciones[publicaciones.length-1].id + 1
      }
      guardarPublicaciones([...publicaciones, posteo])
    }
    catch (error) {
      console.log(error)
    }
  
  }
    return (
       
        <Fragment>
            <Publicacion crearPublicacion={crearPublicacion}></Publicacion>
           {
               publicaciones.length === 0 ? <h3> Todavia no tenés publicaciones</h3>
               :
               (
                
               <Contenedor>
                
                 {
                   publicaciones.map( post => (
                
                    <Card key={post.id}>
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                  </Card>
                   ))
                 }
               </Contenedor>
               )
           }
        </Fragment>
     );
}
 
export default Publicaciones;