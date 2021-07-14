import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
//import Registro from './components/Registro';
//import Cuenta from './components/Cuenta';
//import { Card } from 'react-bootstrap';
//import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Publicacion from './components/Publicacion';
import Registrarse from './rutas/Registrarse';
import Home from './rutas/Home';

const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'

function App() {

  /*<Router> 
        <div className="App">
          <Route exact path="/" component={Registrarse}/>
        </div>
        </Router>
        <Router> 
        <div className="App">
          <Route exact path="/" component={Home}/>
        </div>
        </Router> */
  /*
  {
          cuentaInicial.length === 0 
          ? <Router> 
          <div className="App">
            <Route exact path="/" component={Registrarse}/>
          </div>
          </Router>
          :
          <Router> 
        <div className="App">
          <Route exact path="/" component={Home}/>
        </div>
        </Router>
        }
  */

  return (
    <Fragment>
        
        <Router>
        <Route exact path="/" component={Registrarse}/>
        </Router>
        
    </Fragment>
  );
}

export default App;
