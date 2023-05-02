import React from 'react'
import { useAuth } from '../../context/authContext';

function Home() {

 const {loading} = useAuth()

 if(loading) return <h1>Cargando...</h1>

 return (
   <div>Home</div>
 )
}

export default Home