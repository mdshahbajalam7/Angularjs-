import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
        </Routes>
    </div>
  )
}

export default MainRouter