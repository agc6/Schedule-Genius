import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Features from './pages/Features';
import ToDoList from './pages/ToDoList';
import Dashboard from './pages/dashboard';
import ScheduleBlocker from './pages/ScheduleBlocker';
import Calendar from './pages/Calendar';
import { auth } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Settings from './pages/Settings';




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
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
          <Route path="/features" element={<Features />} />
          <Route path="/todo" element={user ? <ToDoList /> : <Navigate to="/signin" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
          <Route path="/scheduleblocker" element={user ? <ScheduleBlocker /> : <Navigate to="/signin" />} />
          <Route path="/calendar" element={user ? <Calendar /> : <Navigate to="/signin" />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to="/signin" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
