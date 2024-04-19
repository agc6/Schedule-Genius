import React, { createContext, useContext, useState } from 'react';

const EventsContext = createContext();

export const useEvents = () => useContext(EventsContext);

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        setEvents(prevEvents => [...prevEvents, event]);
    };

    return (
        <EventsContext.Provider value={{ events, addEvent }}>
            {children}
        </EventsContext.Provider>
    );
};