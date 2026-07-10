import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  const nombre = "Nombre cursote";
 return (
  <div>
    <TodoApp />
 <h1 className='titulo'>{nombre}</h1>
  
  </div>
 );

}

export default App
