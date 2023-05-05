import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import eventsData from "./events"; // import events from module

function RandomCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Map events to FullCalendar format
    const mappedEvents = eventsData.map((event) => ({
      title: event.title,
      start: new Date(event.start),
      end: event.end ? new Date(event.end) : null,
      allDay: event.allDay || false,
      color: event.color || null,
    }));
    setEvents(mappedEvents);
  }, []);

  function generateRandomEvents() {
    const today = new Date();
    const events = [...eventsData];
    const maxEvents = 7; // Maximum number of events (including random events)

    // Modify events with duration of one day to a random date within the same week
    events.forEach((event) => {
      const startDate = new Date(event.start);
      const endDate = new Date(event.end);
      const durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
      if (durationInDays === 1) {
        const numDays = Math.floor(Math.random() * 7);
        startDate.setDate(today.getDate() + numDays);
        endDate.setDate(startDate.getDate() + 1);
        event.start = startDate.toISOString();
        event.end = endDate.toISOString();
      }
    });

    // Generate random events if there are less than maxEvents events in total
    while (events.length < maxEvents) {
      let date = new Date(today);
      let startDate;

      // Generate a random start date within the same week as today
      do {
        date.setDate(today.getDate() + Math.floor(Math.random() * 7));
        startDate = date.toISOString();
      } while (events.find((event) => event.start === startDate));

      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);

      events.push({
        title: `Random Event ${events.length + 1}`,
        start: startDate,
        end: endDate.toISOString(),
      });
    }

    // Shuffle all events
    const shuffledEvents = events.sort(() => Math.random() - 0.5);

    setEvents(shuffledEvents);
  }

  return (
    <div>
      <button onClick={generateRandomEvents}>Generate</button>
      {events && (
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      )}
    </div>
  );
}

export default RandomCalendar;
