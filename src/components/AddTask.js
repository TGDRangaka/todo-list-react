import React, {useState} from 'react'
import ColorPicker from './ColorPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddTask({ tasks, setTasks, colors, category, setCategory}) {
    const [taskName, setTaskName] = useState("");
    const [task, setTask] = useState({});
    const [colorPickerPopUp, setColorPickerPopUp] = useState(false);
  
    return (
      <div className="grid grid-cols-6 w-full h-14">
        <div className=" col-span-5 mr-4">
          <input className="bg-gray-200 border text-xl font-bold border-gray-200 rounded-lg w-full h-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="New Task"
          value={taskName}
          onChange={(e)=> setTaskName(e.target.value)}
          />
        </div>

        <button className="col-span-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-600 hover:border-blue-700 rounded-lg h-full"
        onClick={()=>{
          if(!taskName) return;
          setTask({
            id: null,
            name: taskName,
            category: null,
            color: null,
            state: null,
          })
          setColorPickerPopUp(true)
          setTaskName("");
        }}
        >
          Add<FontAwesomeIcon icon={faPlus} className="ml-3 text-xl" />
        </button>
  
        <ColorPicker trigger={colorPickerPopUp} colors={colors} setTrigger={setColorPickerPopUp} categories={category} setCategories={setCategory} task={task} setTasks={setTasks} />
      </div>
      
    );
  }

export default AddTask;
