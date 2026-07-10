import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoApp from './components/TodoApp'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";


function App() {
  const nombre = "Nombre cursote";
 return (
     <div>
      <h1>Actividad 5 - React</h1>

      <Saludo />

      <Tarjeta
        nombre="Emilio"
        edad="22"
        carrera="Ingeniería en Sistemas"
      />

      <Contador />

      <ListaTareas />
    </div>
 );

}

export default App
