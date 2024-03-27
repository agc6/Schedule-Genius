import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated import statement
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter> {/* Fixed BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
