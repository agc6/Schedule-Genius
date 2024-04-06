import React, { useState } from 'react';
import './calendar.css'; 

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-of-week">
        {day}
      </div>
    ));
  };

  const renderDays = () => {
    const days = [];
    const totalDaysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    for (let i = 1; i <= totalDaysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push(
        <div
          key={i}
          className={`day ${selectedDate &&
            date.toDateString() === selectedDate.toDateString() &&
            'selected'}`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    // Add empty placeholders for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.unshift(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="days-of-week-container">{renderDaysOfWeek()}</div>
      <div className="days-container">{renderDays()}</div>
      {selectedDate && (
        <div className="selected-date">
          Selected Date: {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
};

export default Calendar;
