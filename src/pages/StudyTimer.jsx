import React, { useState, useEffect } from 'react';
import './StudyTimer.css';

function StudyTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    useEffect(() => {
      let timer;
      if (isCounting) {
        timer = setInterval(() => {
          if (seconds > 0 || minutes > 0 || hours > 0) {
            if (seconds === 0) {
              if (minutes === 0) {
                if (hours === 0) {
                  setIsCounting(false);
                  setShowAlert(true);
                } else {
                  setHours(prevHours => prevHours - 1);
                  setMinutes(59);
                  setSeconds(59);
                }
              } else {
                setMinutes(prevMinutes => prevMinutes - 1);
                setSeconds(59);
              }
            } else {
              setSeconds(prevSeconds => prevSeconds - 1);
            }
          } else {
            setIsCounting(false);
            setShowAlert(true); 
          }
        }, 1000);
      }
  
      return () => clearInterval(timer);
    }, [isCounting, seconds, minutes, hours]);
  
    const startTimer = () => {
      setIsCounting(true);
    };
  
    const stopTimer = () => {
      setIsCounting(false);
    };
  
    const resetTimer = () => {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setIsCounting(false);
      setShowAlert(false); // Hide alert on reset
    };
  
    const formatTime = time => {
      return time.toString().padStart(2, '0');
    };
  
    return (
      <div className="study-timer">
        <h2>Study Timer</h2>
        <div className="timer">
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
        {showAlert && (
          <div className="alert-message">
            <p>Time's up!</p>
            <button onClick={resetTimer}>OK</button>
          </div>
        )}
        <div className="timer-input">
          <input
            type="number"
            value={hours}
            onChange={e => setHours(parseInt(e.target.value))}
            min="0"
            max="24"
            placeholder="Hours"
          />
          <input
            type="number"
            value={minutes}
            onChange={e => setMinutes(parseInt(e.target.value))}
            min="0"
            max="59"
            placeholder="Minutes"
          />
        </div>
        <div className="timer-buttons">
          {!isCounting ? (
            <button onClick={startTimer}>Start</button>
          ) : (
            <button onClick={stopTimer}>Stop</button>
          )}
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
  
  export default StudyTimer;