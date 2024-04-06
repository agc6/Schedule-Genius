import React, {useState} from "react";
import "./ScheduleBlocker.css";
const ScheduleBlocker = () =>{
    const [blockedTimes, setBlockedTimes] = useState([]);   //Keeps track of blocked off times
    //Function to handle blocking a time slot
    const blockTime = (time) => {
        setBlockedTimes([...blockedTimes, time]);
    };

    return(
        <div className="schedule-blocker">
            <h1>Calendar Schedule Blocker</h1>
            <div className="calendar">
                <div className="calendar-slots">
                    <div className="calendar-slot" onClick={() => blockTime('9:00 AM - 10:00 AM')}>
                        <span>9:00 AM - 10:00 AM</span>
                    </div>
                    <div className="calendar-slot" onClick={() => blockTime('10:00 AM - 11:00 AM')}>
                        <span>10:00 AM - 11:00 AM</span>
                    </div>
                </div>
            </div>

            <div className="blocked-times">
                <h3>Blocked Times</h3>
                <ul>
                    {blockedTimes.map((time, index) => (
                        <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ScheduleBlocker;