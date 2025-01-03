import './App.css'

import {BrowserRouter, Routes, Route, Navigate, useAsyncError} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import Search from './pages/Search/Search'
import Posts from './pages/Posts/Posts'
import EditPost from './pages/EditPost/EditPost'

//Context 
import { AuthProvider } from './context/AuthContext'



// Pages
function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  },[auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div id='root'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/search' element={<Search/>} />
              <Route path='/posts/:id' element={<Posts/>} />
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>} />
              <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>} />
              <Route path='/posts/edit/:id' element={user ? <EditPost/> : <Navigate to="/login"/>} />
              <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to="/login"/>} />
              <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
