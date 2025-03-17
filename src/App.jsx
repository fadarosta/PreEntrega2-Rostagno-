import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/itemListContainer/itemListContainer'
import ItemDitailContainer from '.icomponents/ItemDitailContainer'


function App() {
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route path='/item:id' element={<ItemDitailContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    </Routes>
  </BrowserRouter>
  
}  

export default App
