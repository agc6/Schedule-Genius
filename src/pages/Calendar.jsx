import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function BigCalendar() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const clickRef = useRef(null);

    useEffect(() => {
        return () => {
            window.clearTimeout(clickRef.current);
        };
    }, []);

    const onSelectSlot = useCallback((slotInfo) => {
        window.clearTimeout(clickRef.current);
        clickRef.current = window.setTimeout(() => {
            setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end });
        }, 250);
    }, [newEvent]);

    function handleAddEvent() {
        let clashDetected = false;
    
        for (let i = 0; i < allEvents.length; i++) {
            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
    
            if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
                clashDetected = true;
                break;
            }
        }
    
        if (clashDetected) {
            if (window.confirm("There is a clash with existing events. Do you still want to add this event?")) {
                setAllEvents([...allEvents, newEvent]);
            }
        } else {
            setAllEvents([...allEvents, newEvent]);
        }
    }

    const defaultDate = useMemo(() => new Date(), []);

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <div className="height600">
            <Calendar
            defaultDate={defaultDate}
            events={allEvents}
            localizer={localizer}
            onSelectSlot={onSelectSlot}
            selectable
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            views={['month', 'week', 'day']}
            popup={true} // Show truncated events in an overlay
            popupOffset={{ x: 10, y: 10 }} // Position offset from the edges of the viewport
/>

            </div>
        </div>
    );
}

export default BigCalendar;
