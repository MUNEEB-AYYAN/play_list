import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between text-shadow-sky-700 font-semibold bg-green-300 p-4 '>
      <h2 className='text-xl font-bold '>Logo</h2>
      <div className='flex space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  )
}

export default Navbar