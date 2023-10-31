import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Montaje from './components/Montaje';
import ListItemContainer from './components/ListItemContainer';
import { ComponentWithLogging } from './components/HOC';
import Routing from './components/Routing';


// const fetchData = () => {

//   return new Promise((resolve) => {
//     const response = "Resuelta";

//     setTimeout(() => {
//       resolve(response)
//     }, 2000)
//   })
// }



function App() {

  const [pokemons, setPokemon] = useState([]);

  const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results)
      })
  };

  useEffect(() => {
    getPokemons();
    console.log(pokemons)
  }, []);

  
//   const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor del input

//   const handleInputChange = (event) => {
//       setInputValue(event.target.value); // Actualiza el estado con el nuevo valor del input
// };

const [inputValue, setInputValue] = useState("");

const handleChangeInput = (event) => {
  setInputValue(event.target.value)
}


  return (
    <div>
      {/* PRACTICA DE RUTAS */}
      <Routing />

      {/* PRACTICA EVENTOS  */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Escribe algo..."
        />
        <p>Valor del input: {inputValue}</p>
      </div>


      {/* <h2>Pokemons</h2> */}

      {/*PRACTICA CON POKE API */}
      {/* <div>
      {pokemons ? (
          pokemons.map((poke) => (
            <p key={poke.name}>{poke.name}</p>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div> */}

      {/* PRACTICA HOC */}
      {/* <ComponentWithLogging/> */}

      {/* <ListItemContainer productos={data}/> */}


      {/* <Montaje /> */}


    </div>
  );
}


export default App
