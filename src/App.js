import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './views/Home/Home'
import Report from './views/Report/Report'
import Login from './views/Login/Login'
import SignUp from './views/SignUp/SignUp'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<SignUp/>}/>
          <Route path ='/report' element={<Report/>}/>
          <Route path ='/help' element={<Home/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App