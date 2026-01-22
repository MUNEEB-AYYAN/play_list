import React, { useState } from 'react'
// import Navbar from './components/section1/Navbar'

const App = () => {


  const [num, setNum] = useState({user:'Muneeb',Age:24})

  const btnClick = () => {
    const newNum = {...num}
    console.log(newNum);
    newNum.user = 'Ali'
    newNum.age = 30
    setNum(newNum)

  }


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      {/* <Navbar /> */}
      <h1 className='text-3xl font-bold m-2 underline'>
        Hello world!
      </h1>
      <h2>{num.user} - {num.Age}</h2>
      <button className=' bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-600'
        onClick={btnClick}>Click Me
      </button>


      {/* <h2 className='m-2 font-semibold text-rose-200 text-3xl'>{num}</h2>
      <div className='flex flex-row gap-4'>

        <button className=' bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-600'
        onClick={() => setNum(num + 1)}>Increment</button>
        <button className=' bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-600'
        onClick={() => setNum(num - 1)}>Decrement</button>
        <button className=' bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-600'
        onClick={() => setNum(num +5)}>Jump By 5</button>
       </div>
 */}




    </div>
  )
}

export default App