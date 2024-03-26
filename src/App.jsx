import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // You can import global styles here if needed

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="content">
        <Home /> {/* Render different pages based on your app's routing */}
        {/* <About />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
