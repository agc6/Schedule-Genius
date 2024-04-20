import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ToDoList from './pages/ToDoList';
import Dashboard from './pages/dashboard';
import ScheduleBlocker from './pages/ScheduleBlocker';
import Calendar from './pages/Calendar';
import { auth } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
        setUser(user); // Set the user state to the logged-in user
      } else {
        console.log('User is signed out');
        setUser(null); // Set the user state to null when signed out
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Element name="home" className="element"><Home /></Element>
          </div>
        } />
        <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
        <Route path="/todo" element={user ? <ToDoList /> : <Navigate to="/signin" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/scheduleblocker" element={user ? <ScheduleBlocker /> : <Navigate to="/signin" />} />
        <Route path="/calendar" element={user ? <Calendar /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
