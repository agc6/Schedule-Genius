import React, { useState } from 'react';
import './ToDolist.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Function to handle input change
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Function to add a new task
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    // Function to delete a task by index
    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    // Function to move a task down by index
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }

    // Function to move a task up by index
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>Your To-Do List:</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed-task' : ''}>
                        {task}
                        <button onClick={() => deleteTask(index)}>✘</button>
                        <button onClick={() => moveTaskDown(index)}>↓</button>
                        <button onClick={() => moveTaskUp(index)}>↑</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
