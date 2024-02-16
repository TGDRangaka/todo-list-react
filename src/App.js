import './App.css';
import topPath from './curve-path.png';
import React, { useState } from 'react';

function App() {
  const handleRadioChange = (selectedValue) => {
    // Handle the change event, if needed
    console.log(`Selected value: ${selectedValue}`);
  };

  return (
    <div className="App flex flex-col items-center align-middle text-white h-screen">
      <img src={topPath} className=" absolute -z-10" alt='top-png' />
      <h1 className=" text-5xl text-center my-24">ToDo List</h1>

      <main className="container max-w-screen-md flex flex-col items-center">
        <div className="grid grid-cols-6 w-full h-14">
          <SearchBar />
          <AddButton />
        </div>

        <Counts/>

        <ul className="w-full">
          <Task taskName="Go to Gym" taskCategory="Workout" taskColor="blue" onChange={handleRadioChange} />
          <Task taskName="Trading" taskCategory="Finacial" taskColor="yellow" onChange={handleRadioChange} />
          <Task taskName="Trading" taskCategory="Finacial" taskColor="yellow" onChange={handleRadioChange} />
          <Task taskName="Trading" taskCategory="Finacial" taskColor="yellow" onChange={handleRadioChange} />
          <Task taskName="Trading" taskCategory="Finacial" taskColor="yellow" onChange={handleRadioChange} />
          <Task taskName="Trading" taskCategory="Finacial" taskColor="yellow" onChange={handleRadioChange} />
        </ul>

      </main>
    </div>
  );
}

function AddButton() {
  return (
    <button className="col-span-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-600 hover:border-red-700 rounded-lg h-full">
      Add +
    </button>
  );
}

function SearchBar() {
  return (
    <div className=" col-span-5 mr-4">
      <input className="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search" />
    </div>
  );
}

function Counts(){
  return (
    <div className="grid grid-cols-6 mt-6 mb-3 w-full">
      <label className="col-span-4">
        Tasks
        <div className="inline-block px-2 bg-slate-300 rounded ml-2 text-black font-semibold">5</div>
      </label>
      <label className="col-span-1">
        Completed
        <div className="inline-block px-2 bg-slate-300 rounded ml-2 text-black font-semibold">5</div>
      </label>
    </div>
  );
}

function Task({ taskName, taskCategory, taskColor, onChange }){
  const [checked, setChecked] = useState(false);

  const handleInputChange = () => {
    setChecked(!checked);
    onChange(taskName);
  };

  const textColor = {
    color: taskColor
  };

  const activeTask = {
    textDecoration: 'none',
    opacity: 1,
  }
  const nonActiveTask = {
    textDecoration: 'line-through',
    opacity: 0.5,
  }

  return (
    <div className="Task w-full border border-zinc-800 flex items-center justify-center h-16 mb-3 rounded-lg p-2 bg-black_gray border-task_border">

      <div class="inline-flex items-center">
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="ripple-on"
          data-ripple-dark="true">
          <input id="ripple-on" type="checkbox"
          value={taskName}
          onChange={handleInputChange}
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>

      <label className="grow" style={checked ? nonActiveTask : activeTask}>{taskName}</label>
      <label className="w-48 text-right" style={textColor}>#{taskCategory}</label>
    </div>
  );
}

export default App;
