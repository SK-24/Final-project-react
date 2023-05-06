import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "./events";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const RandomCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventDate, setNewEventDate] = useState(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    // Retrieve events from localStorage
    const storedEvents = localStorage.getItem("randomCalendarEvents");
    if (storedEvents) {
      calendarRef.current.getApi().addEventSource(JSON.parse(storedEvents));
    }
  }, []);

  const handleEventClick = (eventClickInfo) => {
    setSelectedEvent(eventClickInfo.event);
    setNewEventDate(eventClickInfo.event.start);
    setModalOpen(true);
  };

  const handlePrintCalendar = () => {
    window.print();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
    setNewEventDate(null);
  };

  const handleDeleteEvent = () => {
    const api = calendarRef.current.getApi();
    selectedEvent.remove();
    const updatedEvents = api.getEvents().map((event) => event.toPlainObject());
    localStorage.setItem("randomCalendarEvents", JSON.stringify(updatedEvents));
    handleCloseModal();
  };

  const handleEditEvent = () => {
    const newEvent = {
      ...selectedEvent.toPlainObject(),
      start: newEventDate,
    };
    selectedEvent.remove();
    calendarRef.current.getApi().addEvent(newEvent);
    handleCloseModal();
  };

  const handleCompleteEvent = () => {
    selectedEvent.setProp("backgroundColor", "green");

    const updatedEvent = {
      ...selectedEvent.extendedProps,
      completed: true,
    };

    const updatedEvents = calendarRef.current
      .getApi()
      .getEvents()
      .map((event) => {
        if (event.id === selectedEvent.id) {
          return {
            ...event.toPlainObject(),
            extendedProps: updatedEvent,
          };
        }
        return event.toPlainObject();
      });

    localStorage.setItem("randomCalendarEvents", JSON.stringify(updatedEvents));
    calendarRef.current.getApi().removeAllEvents();
    calendarRef.current.getApi().addEventSource(updatedEvents);

    handleCloseModal();
  };

  const getRandomDate = (start, end) => {
    const startMs = start.getTime();
    const endMs = end.getTime();
    const randomMs = Math.floor(Math.random() * (endMs - startMs) + startMs);
    const randomDate = new Date(randomMs);
    randomDate.setHours(0, 0, 0, 0);
    return randomDate;
  };

  const handleGenerateEvents = () => {
    const eventsToGenerate = [];

    const startDate = new Date();
    const endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0
    );
    events.forEach((event) => {
      const randomDate = getRandomDate(startDate, endDate);
      const newEvent = {
        title: event.title,
        start: randomDate,
        allDay: true,
        extendedProps: {
          description: event.description,
        },
      };
      eventsToGenerate.push(newEvent);
    });

    // Save events to localStorage
    localStorage.setItem(
      "randomCalendarEvents",
      JSON.stringify(eventsToGenerate)
    );

    // Add events to calendar
    calendarRef.current.getApi().removeAllEvents();
    calendarRef.current.getApi().addEventSource(eventsToGenerate);
  };

  const calendar = (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[]}
      eventClick={handleEventClick}
      ref={calendarRef}
    />
  );

  const handleSaveCalendar = () => {
    // Get the calendar element
    const calendarElement = document.querySelector(".fc");

    // Take a screenshot of the calendar
    html2canvas(calendarElement).then(function (canvas) {
      // Convert the canvas to a Blob
      canvas.toBlob(function (blob) {
        // Save the Blob to a file
        saveAs(blob, "calendar.png");
      });
    });
  };

  return (
    <div className="test">
      <div className="testing__buttons">
        <button className=" test__btn btn" onClick={handleGenerateEvents}>
          Generate New Calendar
        </button>
        <button className=" test__btn btn" onClick={handlePrintCalendar}>
          Print Calendar
        </button>
        <button className=" test__btn btn" onClick={handleSaveCalendar}>
          Save Calendar as Image
        </button>
      </div>

      {calendar}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal__title">{selectedEvent.title}</h3>
            <p className="modal__description">
              {selectedEvent.extendedProps.description}
            </p>
            <label>
              Select a new date for this event:
              <input
                type="date"
                value={
                  newEventDate
                    ? newEventDate.toISOString().substring(0, 10)
                    : ""
                }
                onChange={(e) => setNewEventDate(new Date(e.target.value))}
              />
            </label>
            <button className="test__btn btn" onClick={handleEditEvent}>
              Edit Event
            </button>
            <button className="test__btn btn" onClick={handleCompleteEvent}>
              Complete Event
            </button>
            <button className="test__btn btn" onClick={handleDeleteEvent}>
              Delete Event
            </button>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomCalendar;
