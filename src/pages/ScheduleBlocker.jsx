import React, {useState} from "react";
import "./ScheduleBlocker.css";
const ScheduleBlocker = () =>{
    const [blockedTimes, setBlockedTimes] = useState([]);   //Keeps track of blocked off times
    const daysofWeek = [
        {name: "Monday", short: "Mon"},
        {name: "Tuesday", short: "Tue"},
        {name: "Wednesday", short: "Wed"},
        {name: "Thursday", short: "Thu"},
        {name: "Friday", short: "Fri"},
        {name: "Saturday", short: "Sat"},
        {name: "Sunday", short: "Sun"},
    ];
    //Function to handle blocking a time slot
    const blockTime = (time) => {
        setBlockedTimes([...blockedTimes, time]);
    };

    return(
        <div className="schedule-blocker">
            <h1>Calendar Schedule Blocker</h1>
            <div className="calendar">
            <div className="calendar-slots">
                    {daysofWeek.map((day, index) => (
                        <div key={index} className="calendar-slot" onClick={() => blockTime(`${day.short} - 9:00 AM - 10:00 AM`)}>
                            <span>{day.short}</span>
                        </div>
                    ))}
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