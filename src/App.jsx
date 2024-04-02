import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin'; // Correct import
import Signup from './pages/Signup'; // Correct import
import { auth } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';


const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in');
      console.log('User:', user);
    } else {
      console.log('User is signed out');
    }
  });
};

monitorAuthState();

function App() {
  return (
    <div>
      <Router> {/* Fixed BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} /> {/* Corrected path */}
          <Route path="/signup" element={<Signup />} /> {/* added signup */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
