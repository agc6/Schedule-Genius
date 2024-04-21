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
            const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let tasksArr = [];
                querySnapshot.forEach((doc) => {
                    tasksArr.push({...doc.data(), id: doc.id});
                });
                setTasks(tasksArr);
            });
            return () => unsubscribe();
        }
    }, [user]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    async function addTask() {
        if (newTask.trim() !== "" && user) {
            const order = tasks.length > 0 ? tasks[tasks.length - 1].order + 1 : 0;
            await addDoc(collection(db, "tasks"), {
                text: newTask,
                completed: false,
                order: order,
                userId: user.uid,
                startDate: new Date(),
                dueDate: new Date()
            });
            setNewTask("");
        }
    }

    async function deleteTask(taskID) {
        await deleteDoc(doc(db, 'tasks', taskID));
    }
    async function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const currentTask = tasks[index];
            const nextTask = tasks[index + 1];
            await updateDoc(doc(db, "tasks", currentTask.id), { order: nextTask.order });
            await updateDoc(doc(db, "tasks", nextTask.id), { order: currentTask.order });
        }
    }
    async function moveTaskUp(index) {
        if (index > 0) {
            const currentTask = tasks[index];
            const previousTask = tasks[index - 1];
            await updateDoc(doc(db, "tasks", currentTask.id), { order: previousTask.order });
            await updateDoc(doc(db, "tasks", previousTask.id), { order: currentTask.order });
        }
    }

    // Function to handle Enter key press
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTask();
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
                    onKeyPress={handleKeyPress} // Add this line
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
