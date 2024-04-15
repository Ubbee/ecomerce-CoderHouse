import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Practica from './Components/Practica/Practica';
import { Nav } from './Components/Nav/Nav.jsx';
import { ItemCount } from './Components/ItemCount/ItemCount.jsx'
import {Footer} from './Components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <div>
        <h1>TITULO</h1>
        <Practica />
        <ItemCount />
      </div>
      <Footer />
    </>
  )
}
export default App
