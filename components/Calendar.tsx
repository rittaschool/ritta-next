import { FC } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface CalendarProps {}

const Calendar: FC<CalendarProps> = ({}) => {
  return <FullCalendar plugins={[dayGridPlugin]}></FullCalendar>;
};

export default Calendar;
