import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Report from './views/Report/Report'
import Login from './views/Login/Login'
import SignUp from './views/SignUp/SignUp'

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route exact path ='/home' element={<Home/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<SignUp/>}/>
          <Route path ='/report' element={<Report/>}/>
          <Route path ='/help' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App