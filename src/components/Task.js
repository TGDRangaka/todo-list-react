import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'


function Task({ task, updateTask, removeTask}){
    const [checked, setChecked] = useState(task.state);
  
    const handleInputChange = () => {
      setChecked(!checked);
    };
  
    const textColor = {
      color: task.color,
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
      <div className="Task w-full border border-zinc-800 bg-zinc-900 flex items-center justify-center h-16 mb-3 rounded-lg py-2 px-3 bg-black_gray border-task_border k2d-light hover:scale-105 duration-100">
  
        <div class="inline-flex items-center mr-3 hover:scale-125 duration-150">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="ripple-on"
            data-ripple-dark="true">
            <input id="ripple-on" type="checkbox"
            value={task.name}
            onClick={()=>{
              updateTask({id:task.id ,name:task.name, category:task.category, color:task.color, state:!checked});
            }}
            onChange={handleInputChange}
            checked={checked}
              class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-500 checked:bg-black checked:before:bg-black hover:before:opacity-10" />
            <span
              class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </label>
        </div>
  
        <label className="grow text-2xl" style={checked ? nonActiveTask : activeTask}>{task.name}</label>
        <label className="w-48 text-right text-xl" style={textColor}>
          #{task.category}<FontAwesomeIcon icon={faTrashCan} className="ml-6 mr-1 cursor-pointer hover:scale-125 duration-100"
          onClick={()=>{
            removeTask(task.id);
          }} />
        </label>
      </div>
    );
  }

export default Task;
