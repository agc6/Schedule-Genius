import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin'; // Correct import

function App() {
  return (
    <div>
      <Router> {/* Fixed BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} /> {/* Corrected path */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
