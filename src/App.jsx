import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route path="/item:id" element={<ItemDetailContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/cart" element={<div>Mi carrito</div>} />
    </Routes>
  </BrowserRouter>
  )
}  

export default App
