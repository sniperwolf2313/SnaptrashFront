import React from 'react'

export function Alert({message}) {

 return (
   <div className="alert alert-danger" role="alert">
       {message}
   </div>
 )
}

export default Alert