import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Montaje from './components/Montaje';
import Loading from './components/Loading';
import ListItemContainer from './components/ListItemContainer';


const fetchData = () => {

  return new Promise((resolve) => {
    const response = "Resuelta";

    setTimeout(() => {
      resolve(response)
    }, 2000)
  })
}




function App() {
  
  const [data, setData] = useState(null)

  const obtenerProductos = () => {

    return new Promise((resolve, reject) => {
  
     const productos = [
      {
        id: '1',
        name: 'Producto 1',
        description: 'Descripción del Producto 1',
        price: 10.99,
        stock: 100,
      },
      {
        id: '2',
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 19.99,
        stock: 50,
      },
      {
        id: '3',
        name: 'Producto 3',
        description: 'Descripción del Producto 3',
        price: 7.99,
        stock: 75,
      },
    ];
  
      setTimeout(() => {
        resolve(productos);
      }, 3000)
  
    });
  }
  
  

  useEffect(() => {
    // fetchData().then(datos => {
    //   console.log(datos);
    //   setData(datos)
    // })


    // llamarPromise().then(datos => {
    //   console.log(datos)
    // })

    obtenerProductos().then( datos => {
      console.log(datos)
      setData(datos);
    } )
  }, [])





  return (
    <div>

        <ListItemContainer productos={data}/>


      {/* <Montaje /> */}
    </div>
  );
}


export default App
