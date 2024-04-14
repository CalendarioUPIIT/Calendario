import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-04-12T10:00:00").toDate(),
      end: dayjs("2024-04-12T11:00:00").toDate(),
      title: "Some title",
    },
  ];

  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: 500, width: 500 }}
    />
  );
}
export default App;
