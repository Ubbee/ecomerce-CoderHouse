import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './Components/Nav/Nav.jsx';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.jsx'
import { Footer } from './Components/Footer/Footer.jsx'

function App(props) {

  const mensaje = [{ id: 1, text: "Hola Bienvenido a mi E-commerce!" },
  { id: 2, text: "Estaré terminado Pronto!" }];

  return (
    <>
      <Nav />
      <section>
        <h1>Título</h1>
        {mensaje.map(mensaje => (
          <ItemListContainer mensaje={mensaje.text} />
        ))}
      </section>
      <Footer />
    </>
  )
}
export default App
