import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/firebase-config';
import { collection, where, addDoc, query, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import './ToDolist.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const user = auth.currentUser;

    console.log(user.uid);

    useEffect(() => {
        if (user) {
            // Define a query against the firestore collection, filtering by userId
            const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
            // This onSnapshot function sets up a real-time subscription to the Firestore query.
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let tasksArr = [];
                querySnapshot.forEach((doc) => {
                    tasksArr.push({...doc.data(), id: doc.id});
                });
                setTasks(tasksArr);
            });
            // Cleanup function to unsubscribe from Firestore when the component unmounts
            return () => unsubscribe();
        }
    }, [user]);

    // Function to handle input change
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // Function to add a new task
    async function addTask() {
        if (newTask.trim() !== "" && user) {
            const order = tasks.length > 0 ? tasks[tasks.length - 1].order + 1 : 0;
            await addDoc(collection(db, "tasks"), {
                text: newTask,
                completed: false,
                order: order,
                userId: user.uid, // Include the userId when adding a task
                startDate: new Date(), // Set the start date as the current date
                dueDate: new Date() // Set the due date as the current date
            });
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
