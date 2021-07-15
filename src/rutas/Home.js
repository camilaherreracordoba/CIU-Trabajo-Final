import React, { Fragment, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Cuenta from '../components/Cuenta';
import Publicacion from './Publicaciones';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import styled from '@emotion/styled';

const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const ContenedorUsuarios = styled.div`
  height: 500px;
  float:right; margin: 8px;
  margin-top: 30px;
  overflow-y: scroll;
  border: 1px solid #6495ED;// #DCDCDC ;
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
h3 {
  padding: 10px

}
`;

const Home = () => {
  let cuentaInicial = JSON.parse(localStorage.getItem("cuenta"));
  let usuariosInicial = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuariosInicial) {
    usuariosInicial = [];
  }
  const [usuarios, guardarUsuarios] = useState(usuariosInicial);
  useEffect ( () => {
    let usuariosInicial = JSON.parse(localStorage.getItem("usuarios"));
      if (usuariosInicial) {
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
      }else{
        localStorage.setItem('usuarios', JSON.stringify([]));
      }
    }, [usuarios]);
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
    posteosFetch();
  }, []);
  
  
  

  const posteosFetch = async () => {
    try {
      const ruta = urlPosts 
      const api = await fetch(ruta)
      
      const posteos = await api.json()
      
      guardarposteos(posteos)
      
    } 
    catch (err) {
      console.log(err)
    }
  }

//{usuarios.find(user => user.id === post.userId).name}
    return ( 
        <Fragment>
          <Cuenta key={cuentaInicial.id} cuenta={cuentaInicial} ></Cuenta>
 
            
        <ContenedorPublicaciones>
        <h3> Publicaciones </h3>
        <Router>
        <Route exact path="/" component={Publicacion}/>
        </Router>
        {
            posteos.map(post => (
              
              <Card key={post.id}>
                
                <Card.Body>
                  <Card.Subtitle> {post.title}</Card.Subtitle>
                  <Card.Text>
                    {post.body}</Card.Text>
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