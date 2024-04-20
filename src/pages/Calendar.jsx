// Import date utility functions from date-fns library
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
// Import React and its hooks
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
// Import Calendar component and localization function from react-big-calendar
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// Import default CSS for react-big-calendar
import "react-big-calendar/lib/css/react-big-calendar.css";
// Import DatePicker component and its default CSS from react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Import custom styles for the calendar
import "./calendar.css";
// Import Firestore functions from the firebase-config file
import { db, auth } from "../firebase/firebase-config";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
// Locale configurations for date functions
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
// Configure localizer for calendar with date-fns functions and locale data
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Static list of initial calendar events
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2024, 6, 0),
        end: new Date(2024, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2024, 6, 7),
        end: new Date(2024, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2024, 6, 20),
        end: new Date(2024, 6, 23),
    },
];

// Define the BigCalendar functional component
function BigCalendar() {
    const user = auth.currentUser;
    // State for managing new event details
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    // State for managing all calendar events
    const [allEvents, setAllEvents] = useState(events);
    const [tasks, setTasks] = useState([]); // If tasks are managed here, they should be part of the state
    // Reference to manage the click timeout
    const clickRef = useRef(null);

    // Effect to clean up timeouts when component unmounts
    useEffect(() => {
        const fetchTasks = async () => {
            const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const fetchedTasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTasks(fetchedTasks);
        }
        fetchTasks();
        return () => {
            window.clearTimeout(clickRef.current);
        };
    }, [user.uid]);

    // Callback to handle slot selection with a debounced approach
    const onSelectSlot = useCallback((slotInfo) => {
        window.clearTimeout(clickRef.current);
        clickRef.current = window.setTimeout(() => {
            setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end });
        }, 250);
    }, [newEvent]);

    // Function to handle adding a new event after checking for clashes
    async function handleAddEvent() {
        if (!newEvent.start || !newEvent.end) {
            alert('Please ensure both start and end dates are selected.');
            return;
        }

        let clashDetected = false;
        const startNew = new Date(newEvent.start);
        const endNew = new Date(newEvent.end);

        for (let event of allEvents) {
            if ((new Date(event.start) <= startNew && startNew <= new Date(event.end)) ||
                (new Date(event.start) <= endNew && endNew <= new Date(event.end))) {
                clashDetected = true;
                break;
            }
        }

        if (clashDetected && !window.confirm("There is a clash with existing events. Do you still want to add this event?")) {
            return;
        }

        const eventData = { ...newEvent, allDay: true };
        setAllEvents(prev => [...prev, eventData]);

        const taskData = {
            text: `${eventData.title}`,
            completed: false,
            order: tasks.length,
            userId: user.uid,
            dueDate: new Date(eventData.end)
        };

        setTasks(prev => [...prev, taskData]); // Update tasks array
        await addDoc(collection(db, "tasks"), taskData); // Add to Firestore tasks
    }

    // Memoize the default date value to avoid recomputation
    const defaultDate = useMemo(() => new Date(), []);

    // Component rendering the calendar and its controls
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
            views={['month', 'week', 'day', 'agenda']}
            popup={true} // Show truncated events in an overlay
            popupOffset={{ x: 10, y: 10 }} // Position offset from the edges of the viewport
/>

            </div>
        </div>
    );
}

// Export the BigCalendar component for use in other parts of the application
export default BigCalendar;
