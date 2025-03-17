import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/itemListContainer/itemListContainer'
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer'


function App() {
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route path='/item:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    </Routes>
  </BrowserRouter>
  
}  

export default App
