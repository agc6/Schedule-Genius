import React, {useState} from "react";

const ScheduleBlocker = () =>{
    const [blockedTimes, setBlockedTimes] = useState([]);   //Keeps track of blocked off times
    //Function to handle blocking a time slot
    const blockTime = (time) => {
        setBlockedTimes([...blockedTimes, time]);
    };

    return(
        <div className="schedule-blocker">
            <h1>Schedule Blocker.</h1>
            <div className="time-slots">
                <button className="block-time-btn" onClick={() => blockTime('9:00 AM - 10:00 AM')}>
                    Block off 9:00 AM - 10:00 AM
                </button>
            </div>

            <div className="blocked-times">
                <h3>Blocked Times.</h3>
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