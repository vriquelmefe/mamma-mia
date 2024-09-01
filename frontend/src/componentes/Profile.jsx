import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
      <div className='text-center text-white mt-4 bg-dark p-3 container'>
          <p>Email: pizzeriamammamia@mammamia.cl</p>
          <Link to="/" className='btn display-3 bg-warning border-rounded'>Cerrar sesión</Link>
    </div>
  )
}


export default Profile