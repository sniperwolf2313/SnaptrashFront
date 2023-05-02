import React from 'react'
import { useAuth } from '../../context/authContext'

function Help() {

 const {loading} = useAuth()

 if(loading) return <h1>Cargando...</h1>

 return (
   <div>Help</div>
 )
}

export default Help