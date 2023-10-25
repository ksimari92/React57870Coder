import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Montaje from './components/Montaje';
import ListItemContainer from './components/ListItemContainer';
import { ComponentWithLogging } from './components/HOC';


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
    .then(data =>{
      setPokemon(data.results)
    } )
  };

  useEffect(() => {
    getPokemons();
    console.log(pokemons)
  }, []);


  return (
    <div>
       <h2>Pokemons</h2>

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
        <ComponentWithLogging/>

        {/* <ListItemContainer productos={data}/> */}


      {/* <Montaje /> */}

    
    </div>
  );
}


export default App
