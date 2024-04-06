import React, {useState} from "react";
import "./ScheduleBlocker.css";
const ScheduleBlocker = () =>{
    const [blockedTimes, setBlockedTimes] = useState([]);   //Keeps track of blocked off times
    const [selectedTime, setSelectedTime] = useState("");
    const daysofWeek = [
        {name: "Monday", short: "Mon"},
        {name: "Tuesday", short: "Tue"},
        {name: "Wednesday", short: "Wed"},
        {name: "Thursday", short: "Thu"},
        {name: "Friday", short: "Fri"},
        {name: "Saturday", short: "Sat"},
        {name: "Sunday", short: "Sun"},
    ];
    const timeSlots = Array.from(Array(24).keys()).map(hour =>{
        const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
        return { value: `${formattedHour}:00`, label: `${formattedHour}:00` };
    });
    //Function to handle blocking a time slot
    const blockTime = (dayShort) => {
        if (selectedTime) {
            const blockedDateTime = `${dayShort} - ${selectedTime}`;
            setBlockedTimes([...blockedTimes, blockedDateTime]);
            setSelectedTime(""); // Clear selected time after blocking
        } else {
            alert("Please select a time to block.");
        }
    };

    return(
        <div className="schedule-blocker">
            <h1>Calendar Schedule Blocker</h1>
            <div className="calendar">
                <div className="calendar-slots">
                    {daysofWeek.map((day, index) => (
                        <div key={index} className="day-slot">
                            <div className="day-name">{day.name}</div>
                            <div className="time-slot">
                                <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                                    <option value="">Select Time</option>
                                    {timeSlots.map((time, timeIndex) => (
                                        <option key={timeIndex} value={time.value}>{time.label}</option>
                                    ))}
                                </select>
                                <button onClick={() => blockTime(day.short)}>Block</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="blocked-times">
                <h3 className = "blocked-time-heading">Blocked Times</h3>
                {daysofWeek.map((day, index) => (
                    <div key={index} className="blocked-times-day">
                        <div className="day-name">{day.name}</div>
                        <div className="blocked-time-list">
                            {blockedTimes.map((time, timeIndex) => {
                                const [blockedDay, blockedTime] = time.split(" - ");
                                if (blockedDay === day.short) {
                                    return <div key={timeIndex}>{blockedTime}</div>;
                                }
                                return null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScheduleBlocker;