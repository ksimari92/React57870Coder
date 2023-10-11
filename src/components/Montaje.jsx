import React, { useState, useEffect } from 'react';

const Montaje = () => {
  
  // const [miEstado, setMiEstado] = useState('Valor inicial');

  // useEffect(() => {
  //   //simulamos la peiticion a la API
  //   setTimeout(() => {
  //     const nuevoValor = 'Nuevo valor después del montaje';

  //     setMiEstado(nuevoValor);
  //   }, 2000); 
  // }, []); 

  const [valor, setValor] = useState("Valor inicial");

  useEffect(() => {
      setTimeout(()=> {
          const nuevoValor = "Valor despues del montaje";
          setValor(nuevoValor);
      }, 3000)
  }, [])

  return (
    <div>
      <p>{valor}</p>
    </div>
  );
}

export default Montaje