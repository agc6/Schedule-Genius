import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { db, auth } from "../firebase/firebase-config";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import enUS from "date-fns/locale/en-US";

// Configure localizer for the calendar using date-fns functions
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: {
        'en-US': enUS,
    },
});

function BigCalendar() {
    const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date() });
    const [allEvents, setAllEvents] = useState([]);
    const user = auth.currentUser;

    // Real-time fetching tasks from Firestore and converting them into calendar events
    useEffect(() => {
        if (user) {
            const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
            const unsubscribe = onSnapshot(q, querySnapshot => {
                const tasksAsEvents = querySnapshot.docs.map(doc => {
                    const task = doc.data();
                    return {
                        title: task.text,
                        start: task.dueDate.toDate(),  // Assuming dueDate is a Timestamp
                        end: new Date(task.dueDate.toDate().getTime() + 3600 * 1000),  // Adds one hour to start time
                        allDay: false
                    };
                });
                setAllEvents(tasksAsEvents);
            });

            // Clean up subscription on unmount
            return () => unsubscribe();
        }
    }, [user]);

    // Function to handle the addition of new events from the calendar interface
    const handleAddEvent = async () => {
        if (!newEvent.title) {
            alert('Please add a title to the event.');
            return;
        }

        const eventData = { ...newEvent, allDay: false };
        setAllEvents([...allEvents, eventData]);

        await addDoc(collection(db, "tasks"), {
            text: eventData.title,
            completed: false,
            dueDate: eventData.end,
            startDate: eventData.start,
            //save the duration of the event in the database
            duration: eventData.end - eventData.start,
            userId: user.uid,
            completed: false
        });
    };

    return (
        <div className="calendar">
            <input
                type="text"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                style={{ width: "20%", marginRight: "10px" }}
            />
            <DatePicker
                selected={newEvent.start}
                onChange={date => setNewEvent({ ...newEvent, start: date, end: date })}
                placeholderText="Select date"
            />
            <button onClick={handleAddEvent}>Add Event</button>
            <Calendar
                localizer={localizer
                }
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                selectable
                onSelectSlot={(slotInfo) => setNewEvent({ ...newEvent, start: slotInfo.start, end: slotInfo.end })}
                onSelectEvent={event => alert(event.title)}
            />
        </div>
    );
}

export default BigCalendar;
