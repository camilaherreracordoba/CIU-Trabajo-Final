import React, { Fragment, useState } from 'react';

const Publicacion = () => {
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
        //crearPublicacion(publicacion);
        guardarPublicacion({
            title:'', body:''
    })
    }
    
    return ( 
        <Fragment>
            <form onSubmit={submitPublicacion}>
            <input type="text" name="title" value={title} placeholder="Agregale un titulo a tu publicacion" onChange={handleChange}/>
            <input type="text" name="body" value={body} placeholder="Agregá una publicación" onChange={handleChange}/>
            <button type="submit">
                Publicar
            </button>
            </form>
        </Fragment>
     );
}
 
export default Publicacion;