import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, addDoc, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import './ToDolist.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // set up firestore collection reference
    const tasksCollectionRef = collection(db, 'tasks');

    useEffect(() => {
        //define a query against the firestore collection
        const q = query(tasksCollectionRef);
        // This onSnapshot function sets up a real-time subscription to the Firestore query.
        // It will automatically invoke the provided callback function whenever the data changes.
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let tasksArr = []; // Initialize an empty array to hold the tasks
            // iterate over each doc in the querySnapshot
            querySnapshot.forEach((doc) => {
                // push each task into our array with an added id property
                tasksArr.push({...doc.data(), id: doc.id});
            });
            // update the tasks state with the new array of tasks
            setTasks(tasksArr)
        })
        // Return a cleanup function that unsubscribes from the Firestore subscription when the component unmounts.
        // This prevents memory leaks and unnecessary data retrieval when the component is no longer in use.
        return () => unsubscribe;
    }, []) // The empty dependency array means this effect will only run once when the component mounts.

    // Function to handle input change
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Function to add a new task
    async function addTask() {
        if (newTask.trim() !== "") {
            await addDoc(tasksCollectionRef, { text: newTask, completed: false })
            //setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    // Function to delete a task by index
    async function deleteTask(taskID) {
        await deleteDoc(doc(db, 'tasks', taskID));
        //const updatedTasks = [...tasks];
        //updatedTasks.splice(index, 1);
        //setTasks(updatedTasks);
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
                    <li key={task.id} className={task.completed ? 'completed-task' : ''}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>✘</button>
                        {/* Moving tasks up and down would require additional logic */}
                    </li>
                    // <li key={index} className={task.completed ? 'completed-task' : ''}>
                    //     {task}
                    //     <button onClick={() => deleteTask(index)}>✘</button>
                    //     <button onClick={() => moveTaskDown(index)}>↓</button>
                    //     <button onClick={() => moveTaskUp(index)}>↑</button>
                    // </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
