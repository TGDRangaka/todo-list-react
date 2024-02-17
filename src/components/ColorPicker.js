import React, { useState } from 'react';

function ColorPicker({trigger, colors, setTrigger, categories, setCategories, task, setTasks}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (trigger) ? (
    <div className="fixed w-full h-full left-0 top-0 flex flex-col items-center justify-center backdrop-blur-sm z-10 backdrop-brightness-75">
        <h1 className="text-5xl font-semibold mb-5">Pick category & color</h1>

        <div className="relative w-56 mb-5 text-black">
            <input
                type="text"
                value={selectedOption}
                onChange={handleInputChange}
                onClick={toggleDropdown}
                placeholder="Select or type a category"
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
                <ul>
                    {categories.map((option) => (
                    <li
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                        {option}
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>

        <ul className="w-56">
            {colors.map((clr)=>{
                const styleColor = {
                    backgroundColor: clr,
                }
                return (
                    <button style={styleColor} className="block w-full h-10 border border-black rounded-lg mb-3 hover:brightness-125 hover:scale-110 duration-100"
                    onClick={()=>{
                        if(!selectedOption) return;
                        const isNewCategory = categories.filter(category => category === selectedOption).length === 0;
                        if(isNewCategory){
                            setCategories([...categories, selectedOption])
                        }
                        setTasks((prevTasks) => [
                            ...prevTasks,
                            {
                              id: Date.now().toString(),
                              name: task.name,
                              category: selectedOption,
                              color: clr,
                              state: false,
                            },
                          ]);
                        setSelectedOption("");
                        setTrigger(false)
                    }}
                    ></button>
                );
            })}
        </ul>
    </div>
  ) : "";
}

export default ColorPicker;
