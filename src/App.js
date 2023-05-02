import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Report from './views/Report/Report'
import MyReports from './views/Report/MyReports'
import Login from './views/Login/Login'
import SignUp from './views/SignUp/SignUp'
import Help from './views/Help/Help'
import Profile from './views/Profile/Profile'
import {AuthProvider} from './context/authContext'
import ProtectedRoute from './routes/ProtectecRoute'
import ResetPassword from './views/Login/ResetPassword'
import Footer from './components/Footer'
import NavbarComponent from './components/NavbarComponent'


function App() {
  return (
    <div className='App'>
      
      <AuthProvider>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route exact path ='/home' element={<Home/>}/>
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/resetpassword' element={<ResetPassword/>}/>
            <Route path ='/signup' element={<SignUp/>}/>
            <Route path ='/report' element={
            <ProtectedRoute>
              <Report/>
            </ProtectedRoute>}/>
            <Route path ='/myreports' element={
            <ProtectedRoute>
              <MyReports/>
            </ProtectedRoute>}/>
            <Route path ='/help' element={<Help/>}/>
            <Route path ='/profile' element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
            }/>
        </Routes>
      </AuthProvider>
      <Footer/>
    </div>
  );
}

export default App