import React from 'react'

import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    
    const navigate = useNavigate();

  return (
    <div className='py-3 px-5 bg-cyan-700'>
        <button onClick={()=>{
        console.log("Button Clicked");
        navigate('/');
      }}
      className='bg-teal-500 cursor-pointer text-white p-2 m-2  rounded-xl font-medium active:scale-90 transition-all'>
        Return to HomePage
      </button>

      <button onClick={()=>{
        console.log("Button Clicked");
        navigate(-1);
      }}
      className='bg-teal-500 cursor-pointer text-white p-2 m-2  rounded-xl font-medium active:scale-90 transition-all'>
        Back
      </button>

      <button onClick={()=>{
        console.log("Button Clicked");
        navigate(+1);
      }}
      className='bg-teal-500 cursor-pointer text-white p-2 m-2  rounded-xl font-medium active:scale-90 transition-all'>
        Next
      </button>
    </div>
  )
}

export default Navbar2