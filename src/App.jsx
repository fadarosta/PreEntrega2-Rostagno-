import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/itemListContainer/itemListContainer'


function App() {
  <BrowserRouter>
    <Routes>
      <Route exact path='/'>
      <NavBar/>
      <ItemListContainer/>
    </Routes>
  </BrowserRouter>
  
}  

export default App
