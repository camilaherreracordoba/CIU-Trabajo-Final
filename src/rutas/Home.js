import React, { Fragment, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Cuenta from '../components/Cuenta';

import styled from '@emotion/styled';

const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const ContenedorUsuarios = styled.div`
  height: 500px;
  float:right; margin: 8px;
  overflow-y: scroll;
  border: 1px solid #DCDCDC ;
  border-radius: 5px;
  h3 {
    text-align: center;
    padding: 3px
  }
`;
const ContenedorPublicaciones = styled.div`
align-content: center;
margin: 32px;
padding: 32px;
width: 70%;
float: left;
`;

const Home = () => {
  let cuentaInicial = JSON.parse(localStorage.getItem("cuenta"));
const [usuarios, guardarUsuarios] = useState([]);
  useEffect ( () => {
    usuarioFetch();
  }, []);
  const usuarioFetch = async () => {
    try {
      const api = await fetch(urlUsers);
      const usuarios = await api.json();

      guardarUsuarios(usuarios);
    }
    catch (error) {
      console.log(error)
    }
  }
  const [posteos, guardarposteos] = useState([]);
  useEffect ( () => {
    posteosFetch(5);
  }, []);
  
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

  

  const posteosFetch = async (userId) => {
    try {
      const ruta = urlPosts+'?userId='+userId
      const api = await fetch(ruta)
      
      const posteos = await api.json()
      guardarposteos(posteos) 
    } 
    catch (err) {
      console.log(err)
    }
  }
    return ( 
        <Fragment>
          <Cuenta key={cuentaInicial.id} cuenta={cuentaInicial} ></Cuenta>
            
        <ContenedorPublicaciones>
          {
            posteos.map(post => (
              
              <Card key={post.id}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            ))
          }
        </ContenedorPublicaciones>
        <ContenedorUsuarios>
              <h3> Usuarios </h3>
          {
            usuarios.map( usuario => (
              <Card style={{ width: '18rem' }}
                key={usuario.id}
              >
                <Card.Body>
                  <Card.Title>{usuario.name}</Card.Title>
                  <Card.Subtitle>{usuario.username}</Card.Subtitle>
                </Card.Body>
              </Card>
            )
            )
          }
        </ContenedorUsuarios>
        </Fragment>
     );
}
 
export default Home;