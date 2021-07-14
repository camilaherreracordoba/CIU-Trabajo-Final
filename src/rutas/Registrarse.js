import React, { Fragment, useState, useEffect } from 'react';
import Registro from '../components/Registro';
import Cuenta from '../components/Cuenta';
//import Home from './Home';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';

const urlUsers = 'http://jsonplaceholder.typicode.com/users'

const Registrarse = ()=> {
  let cuentaInicial = JSON.parse(localStorage.getItem("cuenta"));
  if (!cuentaInicial) {
    cuentaInicial = [];
  }
  const [cuenta, guardarCuenta] = useState(cuentaInicial);
  useEffect ( () => {
    let cuentaInicial = JSON.parse(localStorage.getItem("cuenta"));
      if (cuentaInicial) {
        localStorage.setItem('cuenta', JSON.stringify(cuenta))
      }else{
        localStorage.setItem('cuenta', JSON.stringify([]));
      }
    }, [cuenta]);
    const crearCuenta = async (registro) => {
        try {
          const api = await fetch(urlUsers, {
            method: 'POST',
            body: JSON.stringify({
              name: registro.name,
              username: registro.username,
              email: registro.email,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            
          }
          );
          const cuenta = await api.json()
          guardarCuenta(cuenta)
        }
        catch (error) {
          console.log(error)
        }
      
      }
// <Cuenta key={cuenta.id} cuenta={cuenta} ></Cuenta>
/*
{
            cuenta.length === 0 ?
            <Registro crearCuenta={crearCuenta}></Registro>
            :
            <Cuenta key={cuenta.id} cuenta={cuenta} ></Cuenta>
            }
*/
    return  (
        <Fragment>
            {
            cuenta.length === 0 ?
            <Registro crearCuenta={crearCuenta}></Registro>
            :
            <Router>
              <Route exact path="/" component={Home}/>
            </Router>
            }
        </Fragment>
    )
}
export default Registrarse