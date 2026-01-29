import React, { useEffect, useState } from 'react'
// import axios from 'axios';

const App = () => {

  // const [data, setData] = useState([])
  const [num, setNum] = useState(0)

  
  
  // const getData = async() => {
  //   const response = await axios('https://picsum.photos/v2/list');

  //   const data = await response.data
  //   // console.log(response);
  //   // console.log(data);
  //   setData(data)
  
  // }
  
useEffect(() => {
  console.log("API CALLING");
}, [num])

  return (
    <div className='bg-cyan-900  text-white h-full flex items-center flex-col p-2'>


    <div>
      <h1>{num}</h1>
      <button className='bg-green-400 p-2 rounded-xl'
      onClick={()=>{
        setNum(num+10)
      }}>
        Click
      </button>
    </div>



      {/* <h1>API Calling Example</h1>
      <button onClick={getData}
      className="bg-green-600 text-white cursor-pointer hover:scale-110 transition-opacity p-2 m-1 rounded"
      >Click the button</button>

      <div className='grid grid-cols-4 p-4'>
        {data.map((item) => (
          <div key={item.id} className=" m-2 p-2 rounded bg-orange-200">
            <img src={item.download_url} alt={item.author} className="h-48 w-96 object-cover rounded-xl "/>
            <p>Author: {item.author}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default App