import React from 'react'

function Counts({tasks}){
  return (
    <div className="grid grid-cols-2 mt-8 mb-5 w-full text-xl k2d-medium">
      <label>
        Active Tasks
        <div className="inline-block px-2 bg-slate-300 rounded ml-2 text-black font-semibold">{tasks.filter(task => !task.state).length}</div>
      </label>
      <label className="text-right">
        Completed
        <div className="inline-block px-2 bg-slate-300 rounded ml-2 text-black font-semibold">{tasks.filter(task => task.state).length}</div>
      </label>
    </div>
  );
}

export default Counts
