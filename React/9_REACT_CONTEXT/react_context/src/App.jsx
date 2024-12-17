import './App.css'

// react
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Components
import Navbar from './components/NavBar'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Curiosities from './pages/Curiosities'

function App() {
  return (
    <div>
      <h1>React-Context</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/curiosities" element={<Curiosities/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
