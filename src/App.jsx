import { useState, useEffect, createContext } from 'react'
// import { UserContext } from './context';
import { query, where, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Montaje from './components/Montaje';
import ListItemContainer from './components/ListItemContainer';
import { ComponentWithLogging } from './components/HOC';
import Routing from './components/Routing';
import Condicionales from './components/Condicionales';
import { appFirestore } from './main'


// const fetchData = () => {

//   return new Promise((resolve) => {
//     const response = "Resuelta";

//     setTimeout(() => {
//       resolve(response)
//     }, 2000)
//   })
// }

export const UserContext = createContext({ user: null, isLogged: false });

function App() {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  // const [pokemons, setPokemon] = useState([]);

  // const getPokemons = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  //     .then(response => response.json())
  //     .then(data => {
  //       setPokemon(data.results)
  //     })
  // };

  //TRABAJO CON FIRESTORE
  useEffect(() => {
    const db = getFirestore(appFirestore);

    const ref = doc(db, 'items', 'r3AJBEAv4hDQPj1M8vRg');
    const collectionRef = collection(db, 'items');
    const querySnapshot = query(collectionRef, where("precio", ">", 500));

    // const ref = doc(db, "items", "RhfdCqJnAYx1uUhSDB3E");
    // const collectionRef = collection(db, 'items')
    // const querySnapshot = query(collectionRef, where("precio", ">", 500));

     //para un documento getDoc y para una collection getDocs
    getDocs(querySnapshot).then((snapshot) => {
      //Para un documento
    
      // if(snapshot.exists()){
      //   console.log(snapshot.id, snapshot.data())
      //   setProduct({
      //     id : snapshot.id,
      //     ...snapshot.data()      
      //   })
       
      // } else {
      //   console.log("Item no encontrado");
      // }

      //Para una coleeccion
        if(snapshot.size != 0){
          const lista = snapshot.docs.map( (doc) => ({
            id : snapshot.id,
            ...doc.data()
          })
          )
          setProducts(lista);
          console.log(lista);
        } else {
             console.log("coleccion no encontrada");

        }

      // if (snapshot.size != 0) {
      //   const snapshotsList = snapshot.docs.map( (doc) => ({
      //     id: doc.id,
      //     ...doc.data()
      //   })
      //   );
      //   setProducts(snapshotsList);
      //   console.log(snapshotsList)
      // } else {
      // }
    }).catch((error) => {
      console.error("Error al obtener el documento:", error);
    });
  }, []);


  //   const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor del input

  //   const handleInputChange = (event) => {
  //       setInputValue(event.target.value); // Actualiza el estado con el nuevo valor del input
  // };

  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  // const [productos, setProductos]= useState([])

  // setProductos(["Leche", "pan", "jabon"]);

  // const agregarProducto = () => {
  //   setProductos([...productos, "galletitas"])
  // }

  return (
    <div>
      {/* PRACTICA DE RUTAS Y CONTEXT*/}
      {/* <UserContext.Provider value={productos}>
        <Routing />
      </UserContext.Provider> */}

      <UserContext.Provider value={{ user: null, isLogged: false }}>
        <Condicionales />
      </UserContext.Provider>
      <ul>
      {products.map((prod, index) => <li key={index}>{prod.nombre} ${prod.precio}</li>)}
      </ul>

      <p>{product.nombre}</p>
      <p>{product.precio}</p>


      {/* PRACTICA EVENTOS  */}
      {/* <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Escribe algo..."
        />
        <p>Valor del input: {inputValue}</p>
      </div> */}


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
