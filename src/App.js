import './App.css';
import React, { Fragment, useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Publicacion from './components/Publicacion';
import Registrarse from './rutas/Registrarse';
import Home from './rutas/Home';

const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'

function App() {

  return (
    <Fragment>
        
        <Router>
        <Route exact path="/" component={Registrarse}/>
        </Router>
        
    </Fragment>
  );
}

export default App;
