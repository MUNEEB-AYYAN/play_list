import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const App = () => {

  const [notes, setNotes] =useState({
    heading: "",
    details: "",
  });

  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTasks = [...tasks];
    copyTasks.push(notes);
    setTasks(copyTasks);

    console.log(notes);

    // setNotes({
    //   heading: "",
    //   details: "",
    // });
  };

  const changeHandler = (e) => {
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
    });
  }

  const deleteHandler = (index) => {
    const filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks(filteredTasks);
    console.log('note deleted');
  }

  return (
    <div className="flex justify-between p-4 h-screen">
      <form action="" onSubmit={submitHandler} 
      className="flex justify-center items-center gap-6 mt-10 ">
        <div className="flex flex-col gap-4 mb-4">
          <input type="text"
          onChange={changeHandler}
          name="heading"
          value={notes.heading}
          className="px-5 w-3/2 py-2 border-2 rounded-xl outline-none"
          placeholder="Enter notes Heading"
          /> 
        <textarea type="text"
        onChange={changeHandler}
        name="details"
        value={notes.details}
        className="h-32 w-3/2 px-5 py-2 border-2 rounded-xl outline-none"
        placeholder="Enter Details"
        />

        <button className="bg-pink-600 text-white px-8 w-3/2 py-2 rounded-lg "
        >Add Notes</button>
        </div>
        {/* <img className="rotate-y-180" src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" /> */}
      </form>


      <div className="lg:w-1/2 bg-gray-300 p-10">
        <h1 className="text-4xl font-bold underline text-center mt-10">Your Notes</h1>
        <div className="flex flex-wrap p-4 justify-center gap-5 mt-6 overflow-auto h-[90%]">
          {/* <div className="flex flex-wrap border-2 border-cyan-500 rounded-xl p-4 w-80 h-full"> */}
          {tasks.map((notes, index) => (
            <div key={index} className="h-52 w-1/3 rounded-2xl bg-pink-600 p-4 flex flex-col justify-center">
              <h1 onClick={()=>{
                deleteHandler(index);
              }} className="cursor-pointer"><X /></h1>
              <h2 className="text-2xl font-semibold underline mb-2">{notes.heading}</h2>
              <p className="text-lg">{notes.details}</p>
            </div>
          ))}
            {/* <div className="h-52 w-40 rounded-2xl bg-pink-600"></div> */}
          
            {/* <div className="h-52 w-40 rounded-2xl bg-pink-600"></div>
            <div className="h-52 w-40 rounded-2xl bg-pink-600"></div>
            <div className="h-52 w-40 rounded-2xl bg-pink-600"></div>
            <div className="h-52 w-40 rounded-2xl bg-pink-600"></div>
            <div className="h-52 w-40 rounded-2xl bg-pink-600"></div> */}
            {/* <h2 className="text-2xl font-semibold underline mb-2">{notes.heading}</h2>
            <p className="text-lg">{notes.details}</p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
