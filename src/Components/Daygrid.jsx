import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "./event.js";


const Daygrid = () => {
  return (
    <div className="max-w-[100%] mx-auto p-4 mt-4 overflow-x-auto">
      <div className="">
        <FullCalendar 
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          height="auto" // Let it adapt dynamically
        />
      </div>
    </div>
  );
};

export default Daygrid;
