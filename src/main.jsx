import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

// creamos un proyecto de firestore
// copiamos la configuracion
// creamos una constatnte para inicializar nuestro proyecto
// importamos getFirestore desde firebase
// creamos nuestra "base de datos" con getFirestore y le pasamos la constante anterior
// si queremos traernos un item en particular importamos "doc" y "getDoc"
//si queremos traernos una coleccion debemos usar "collection" y "getDocs"

const firebaseConfig = {
  apiKey: "AIzaSyAMoR2KCIXmX7xIJ0_REqSJtV6iaKayJU4",
  authDomain: "coder-project-1b5bd.firebaseapp.com",
  projectId: "coder-project-1b5bd",
  storageBucket: "coder-project-1b5bd.appspot.com",
  messagingSenderId: "794886447798",
  appId: "1:794886447798:web:8c27a335821739d0a53c17"
};

export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
