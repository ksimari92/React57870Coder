import React, { useContext } from 'react'
import { UserContext } from '../App'

const TaskList = () => {

  const usuario = useContext(UserContext);

  return (
    <div>
        <h1>Bienvenido {usuario.user}</h1>
        <p>{usuario.isLogged ? "el usuario esta logueado" : "el usuario no esta logueado"}</p>

      <ul>
        <li>tarea 1</li>
        <li>tarea 2</li>
        <li>tarea 3</li>
      </ul>
    </div>
  )
}

export default TaskList