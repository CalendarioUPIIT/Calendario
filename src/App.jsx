import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

import { useEffect, useState } from "react";

import fetchEvents from "./componentes/fetchEvents";
import supabase from "./config/supabaseClient";

function App() {
  // const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
    };
    getEvents();
  }, []);

  return (
    <pre>{JSON.stringify(events, null, 2)}</pre>
    // <Calendar
    //   localizer={localizer}
    //   events={events}
    //   style={{ height: 500, width: 500 }}
    // />
  );
}
export default App;
