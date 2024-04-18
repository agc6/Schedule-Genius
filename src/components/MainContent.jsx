// MainContent.jsx
import React from 'react';
import ToDoList from '../pages/ToDoList';
import Calendar from '../pages/Calendar';
function MainContent() {
  return (
    <main className="main-content">
      <ToDoList />
      <Calendar />
    </main>
  );
}

export default MainContent;
