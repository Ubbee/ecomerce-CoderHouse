import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './Components/Nav/Nav.jsx';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.jsx'
import {Footer} from './Components/Footer/Footer.jsx'

function App(props) {

  const mensaje= "Hola Bienvenido!";

  return (
    <>
      <Nav />
      <section>
        <h1>Título</h1>
        <ItemListContainer mensaje={mensaje}/>
      </section>
      <Footer />
    </>
  )
}
export default App
