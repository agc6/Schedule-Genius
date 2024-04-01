import React, {useState, useTransition} from 'react';
import './ToDolist.css';
const ToDoList = () => {
    //ToDoList function
    const ToDoList = () => {
        const [tasks, setTasks] = useState([]); //Define tasks as array and function to update task
        const [input, setInput] = useState(''); //Define user input and function to set input

        //Function for user changing value of text field
        const handleInputChange = (e) => {
            setInput(e.target.value);
        }
    };

    return (
        <div className='todo-list'>
            <h2>To-Do List</h2>
            <div className='input-container'>
                <input 
                type='Text' 
                placeholder='Add a task...'
                value={input}
                onChange={handleInputChange}
                />

            </div>
        </div>
    );
};

export default ToDoList;
