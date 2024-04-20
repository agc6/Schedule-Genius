// MainContent.jsx
import React from 'react';
import ToDoList from '../pages/ToDoList';
import Calendar from '../pages/Calendar';
import StudyTimer from '../pages/StudyTimer';
function MainContent() {
  return (
    <main className="main-content">
      <StudyTimer />
      <ToDoList />
      <Calendar />
    </main>
  );
}

export default MainContent;
