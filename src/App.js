import './App.css';
import AddTask from './components/AddTask';
import Counts from './components/Counts';
import Task from './components/Task';
import topPath from './curve-path.png';
import React, { useState } from 'react';

function App() {
  const [colors] = useState(['#FF6F31','#359EFF','#FBFF2A','#39FF35']);
  const [category, setCategory] = useState(['Workouts', 'School', 'Home', 'Finacial', 'Office']);
  const [tasks, setTasks] = useState([{id:Date.now().toString() ,name:'Go to gym', category:'Workout', color:'#FF6F31', state:false}]);

  const updateTask = (task) => {
    setTasks((tasks) => {
      return tasks.map((t) =>
        t.id === task.id ? task : t
      );
    });
  }

  const removeTask = (id) => {
    setTasks((tasks) => {
      return tasks.filter((t) => t.id!== id);
    });
  }

  return (
    <div className="App flex flex-col items-center align-middle text-white h-screen p-2">
      <img src={topPath} className=" absolute -z-10" alt='top-png' />
      <h1 className="text-8xl text-center my-20 kranky-regular">To Do List</h1>

      <main className="container max-w-screen-md flex flex-col items-center">
        <AddTask task={tasks} setTasks={setTasks} colors={colors} category={category} setCategory={setCategory}/>
        <Counts tasks={tasks}/>

        <ul className="w-full">
          {
            tasks.map((task) => {
              return (
                <Task task={task} updateTask={updateTask} removeTask={removeTask} />
              );
            })
          }
        </ul>

      </main>
    </div>
  );
}

export default App;
