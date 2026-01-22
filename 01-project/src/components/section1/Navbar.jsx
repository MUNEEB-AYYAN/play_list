import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-400 text-white w-full p-2 font-semibold flex justify-between '>
        <h1>Logo</h1>
        <ul className='w-1/5 flex justify-around'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div>Sign In</div>
    </div>
  )
}

export default Navbar