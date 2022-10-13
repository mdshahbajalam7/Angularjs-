import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Editpage from '../components/Editpage'
import Empolyes from '../components/Empolyes'
import Home from '../components/Home'
import Login from '../components/Login'
import Navbar from '../components/Navbar/Navbar'
import Signup from '../components/Signup'

function MainRouter() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/empolyes' element={<Empolyes/>}/>
          <Route path='/edit/:id' element={<Editpage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default MainRouter