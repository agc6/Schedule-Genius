import React, { useState } from 'react'
import React from 'react';

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
    }

    function addTask() {
    }

    function deleteTask(index) {
    }

    function moveTaskDown(index) {
    }

    function moveTaskUp(index) {
    }


    return (
        <div className='To-Do List'>
            <h1>Create a Unique To-Do List for you!</h1>
            <div>
                <input
                    type="text" />
            </div>
        </div>
    );
};

export default ToDoList;
