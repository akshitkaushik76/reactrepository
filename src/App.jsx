import { useState } from 'react'
import Usercontextprovider from './context/Usercontextprovider'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'

function App() {
 

  return (
   <Usercontextprovider>
    <Login/>
    <Profile/>
   </Usercontextprovider>
  )
}

export default App
