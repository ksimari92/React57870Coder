import React, { useEffect } from 'react';

//funcion que toma el comoponente como parametro, 
const withLogging = (ComponenteParam) => {
    //mostramos por consola que se monto el componente desde el hook useEffect
  return (props) => {
    useEffect(() => {
      console.log(`ComponentWithLogging: ${ComponenteParam.name} se ha montado.`);
    }, []);
   //luego retornamos el componente
    return <ComponenteParam {...props} />;
  };
};

//luego creamos el componente funcional
const MyFunctionalComponent = () => {
  return <div>Este es el componente funcional MyFunctionalComponent.</div>;
};

//y creamos una variable con el nuevo nombre del componente, llamamos a la funcion y le pasamos por parametro el componente que creamos
export const ComponentWithLogging = withLogging(MyFunctionalComponent);

//AHORA PODEMOS UTILIZAR EL NUEVO COMPONENTE CREADO A TRAVES DE UNA FUNCION!
