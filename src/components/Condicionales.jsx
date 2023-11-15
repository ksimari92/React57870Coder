import React, { useContext } from 'react'
import { UserContext } from '../App';
import './condicional.css';
// style={{
//     color: esCondicional ? 'green' : 'red',
//     fontWeight: esCondicional ? 'bold' : 'normal',
//   }}
const Condicionales = () => {
    //operador ternario
    //operador && 
    //codicional atributo estilos
    //condicional clases
    
    const esCondicional = false;

    const usuario = useContext(UserContext);

    return (
      <div>
     {/* <h1> {usuario.user ? `Bienvenido ${usuario.user}` : "No hay usuario logueado"}</h1> 
     <h2>{usuario.isLogged ? "El usuario se logueo correctamente" : "No se pudo iniciar sesion"}</h2>
       
      {esCondicional && " Este es un texto con estilizado condicional."} */}

      Este es un texto de estilizado condicional.

      <h1 className={esCondicional ? "fuenteGrande" : "fuenteRoja"}>Bienvenidos</h1>
      </div>
      
    );
}

export default Condicionales