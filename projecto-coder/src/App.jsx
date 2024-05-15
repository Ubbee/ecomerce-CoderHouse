
import { Nav } from './Components/Layout/Nav/Nav.jsx'
import { Footer } from './Components/Layout/Footer/Footer.jsx'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from './Components/Cart/Cart.jsx'
import { Error } from './Components/Error/Error.jsx'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer.jsx'

function App(props) {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path='/products/:ProductId' element={<ItemDetailContainer />} />


      <Route path='*' element={<Error />}></Route>
      
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App
