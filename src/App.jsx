import { Route, Routes, Link } from 'react-router-dom'
import './index.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Dog from './components/Dog'
import NavBar from './components/NavBar'

function App() {

  return (
    <>

      <div id='container'>
        
        <NavBar />
        

        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue />}></Route>
                <Route path='/red' element={<Red />}></Route>
                <Route path='/dog' element={<Dog />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </div>
      </div>
  
    </>
  )
}

export default App
