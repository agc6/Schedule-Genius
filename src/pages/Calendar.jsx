import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { db, auth } from "../firebase/firebase-config";
import { collection, addDoc, query, where, onSnapshot, doc, updateDoc } from "firebase/firestore";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import enUS from "date-fns/locale/en-US";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

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

// Wrap Calendar with Drag and Drop HOC
const DraggableCalendar = withDragAndDrop(Calendar);

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
                        id: doc.id, // Add id to identify the document
                        title: task.text,
                        start: task.startDate.toDate(),  // Assuming startDate is a Timestamp
                        end: task.dueDate.toDate(),  // Assuming dueDate is a Timestamp
                        allDay: false
                    };
                });
                setAllEvents(tasksAsEvents);
            });

            // Clean up subscription on unmount
            return () => unsubscribe();
        }
    }, [user]);

    // Handle the addition of new events from the calendar interface
    const handleAddEvent = async () => {
        if (!newEvent.title) {
            alert('Please add a title to the event.');
            return;
        }

        const eventData = { ...newEvent };
        setAllEvents([...allEvents, eventData]);

        await addDoc(collection(db, "tasks"), {
            text: eventData.title,
            startDate: eventData.start,
            dueDate: eventData.end,
            userId: user.uid,
            completed: false
        });
    };
    const handleSelectSlot = (slotInfo) => {
        const { start } = slotInfo;
        setNewEvent({ title: "", start, end: start }); // Set start and end dates to the selected date
    };

    // Event handlers for drag-and-drop and resizing
    const onEventDrop = async ({ event, start, end }) => {
        // Update event in state
        const updatedEvent = { ...event, start, end };
        setAllEvents(prevEvents => prevEvents.map(prevEvent => prevEvent === event ? updatedEvent : prevEvent));
        // Update event in database
        await updateEventInDatabase(event.id, start, end);
    };

    const updateEventInDatabase = async (eventId, start, end) => {
        const eventRef = doc(db, "tasks", eventId);
        await updateDoc(eventRef, {
            startDate: start,
            dueDate: end
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
                onChange={(start) => setNewEvent({ ...newEvent, start })}
                placeholderText="Start Date and Time"
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <DatePicker
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
                placeholderText="End Date and Time"
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button onClick={handleAddEvent}>Add Event</button>
            <DraggableCalendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                selectable
                popup
                popupOffset={{ x: 30, y: 20 }}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={event => alert(event.title)}
                onEventDrop={onEventDrop}
            />
        </div>
    );
}

export default BigCalendar;
