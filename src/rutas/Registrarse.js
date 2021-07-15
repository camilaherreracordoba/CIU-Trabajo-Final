import React, { Fragment, useState, useEffect } from 'react';
import Registro from '../components/Registro';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
      // se realiza un POST simulado, la api devuelve los datos con el mismo fórmato 
      // que el de las otras cuentas génericas de la página 
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