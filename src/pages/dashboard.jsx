import React from 'react';
import './dashboard.css'; // Import CSS file for styling
import Header from '../components/dashHeader';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
//commit

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Dashboard;
