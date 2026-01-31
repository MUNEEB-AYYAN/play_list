import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-800 flex justify-between p-4 '>
        <div className='font-semibold text-2xl'>Variance</div>
        <div className='flex space-x-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar