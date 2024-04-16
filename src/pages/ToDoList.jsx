import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, addDoc, query, onSnapshot, doc, deleteDoc, updateDoc, orderBy } from 'firebase/firestore';
import './ToDolist.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // set up firestore collection reference
    const tasksCollectionRef = collection(db, 'tasks');

    useEffect(() => {
        //define a query against the firestore collection
        const q = query(tasksCollectionRef, orderBy("order", "asc")); // Order tasks by 'order' field
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
    }, [tasksCollectionRef]) // The empty dependency array means this effect will only run once when the component mounts.

    // Function to handle input change
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Function to add a new task
    async function addTask() {
        if (newTask.trim() !== "") {
            const order = tasks.length > 0 ? tasks[tasks.length - 1].order + 1 : 0; // Set order for new task
            await addDoc(tasksCollectionRef, { text: newTask, completed: false, order });
            //setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    // Function to delete a task by index
    async function deleteTask(taskID) {
        await deleteDoc(doc(db, 'tasks', taskID));
    }
    async function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            // Swap order with the next task
            const currentTask = tasks[index];
            const nextTask = tasks[index + 1];
            await updateDoc(doc(db, "tasks", currentTask.id), { order: nextTask.order });
            await updateDoc(doc(db, "tasks", nextTask.id), { order: currentTask.order });
        }
    }
    async function moveTaskUp(index) {
        if (index > 0) {
            // Swap order with the previous task
            const currentTask = tasks[index];
            const previousTask = tasks[index - 1];
            await updateDoc(doc(db, "tasks", currentTask.id), { order: previousTask.order });
            await updateDoc(doc(db, "tasks", previousTask.id), { order: currentTask.order });
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
                        <button onClick={() => moveTaskDown(index)}>↓</button>
                        <button onClick={() => moveTaskUp(index)}>↑</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
