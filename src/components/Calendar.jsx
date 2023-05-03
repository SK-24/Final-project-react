import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class DemoApp extends React.Component {
  calendarRef = React.createRef();
  render() {
    return (
      <section>
        <button>Add Event</button>

        <FullCalendar
          ref={this.calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          eventContent={renderEventContent}
          dateClick={this.handleDateClick}
          initialView="dayGridMonth"
          weekends={!false}
          events={[
            { title: "Meeting 1", date: "2023-05-01", timeText: "9:00" },
            { title: "event 2", date: "2023-05-02", timeText: "9:00" },
          ]}
        />
      </section>
    );
    function renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      );
    }
  }

  someMethod() {
    let calendarApi = this.calendarRef.current.getApi();
    calendarApi.next();
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr, arg.timeText);
  };
}

// import React from "react";
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import AddEventModal from "./AddEventModal";

// export default function () {

//     // const [modalOpen, setModalOpen] = useState(false);
//     // const calendarRef = useRef(null);
//     // const onEventAdded = (event) => {
//     //   let calendarApi = calendarRef.current.getApi();
//     //   calendarApi.addEvent(event);

//     return (
//       <section>
//         {/* <button onClick={() => setModalOpen}>Add event</button> */}
//         <div style={{position:"relative", zIndex:0}}>
//           <FullCalendar
//             // ref={calendarRef}
//             plugins={[dayGridPlugin, interactionPlugin]}
//             eventContent={renderEventContent}
//             dateClick={this.handleDateClick}
//             initialView="dayGridMonth"
//             weekends={!false}
//             events={[
//               { title: "Meeting 1", date: "2023-05-01", timeText: "9:00" },
//               { title: "event 2", date: "2023-05-02" },
//             ]}
//           />
//         </div>
//         {/* <AddEventModal
//           isOpen={modalOpen}
//           onClose={() => setModalOpen(false)}
//           onEventAdded={(event) => onEventAdded(event)}
//         /> */}
//       </section>
//     );
//     function renderEventContent(eventInfo) {
//       return (
//         <>
//           <b>{eventInfo.timeText}</b>
//           <i>{eventInfo.event.title}</i>
//         </>
//       );
//     }
//   }

//   handleDateClick = (arg) => {
//     // bind with an arrow function
//     alert(arg.dateStr, arg.timeText);
//   };
