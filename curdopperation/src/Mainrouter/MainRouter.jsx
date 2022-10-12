import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Editpage from '../components/Editpage'
import Empolyes from '../components/Empolyes'
import Home from '../components/Home'
import Navbar from '../components/Navbar/Navbar'

function MainRouter() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/empolyes' element={<Empolyes/>}/>
          <Route path='/edit/:id' element={<Editpage/>}/>
        </Routes>
    </div>
  )
}

export default MainRouter