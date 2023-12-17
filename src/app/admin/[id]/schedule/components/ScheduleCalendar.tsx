'use client';
import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Appointment, Prisma, User } from '@prisma/client';
import { fetchAppointments, fetchClients } from '@/lib/data';
import AppointmentDialog from './AppointmentDialog';
import DisplayAppointmentDialog from './DisplayAppointmentDialog';
import * as moment from 'moment';
moment.locale('he-IL', {
  months: [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ],
  monthsShort: [
    'ינו',
    'פבר',
    'מרץ',
    'אפר',
    'מאי',
    'יונ',
    'יול',
    'אוג',
    'ספט',
    'אוק',
    'נוב',
    'דצמ',
  ],
  weekdays: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
  weekdaysShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
});
const localizer = momentLocalizer(moment);

const ScheduleCalendar: React.FC = ({}) => {
  const [date, setDate] = useState<Date>();
  const [view, setView] = useState<View>(Views.WEEK);
  const [open, setOpen] = useState<boolean>(false);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [client, setClient] = useState<User | undefined>();
  const [chosenAppointment, setChosenAppointment] = useState<Appointment>();
  const [clients, setClients] = useState<User[]>([]);
  const [appointment, setAppointment] = useState<Prisma.AppointmentCreateInput>(
    {
      start: new Date(),
      end: new Date(),
      title: '',
      user: {},
    }
  );
  const [dbAppointments, setDbAppointments] = useState<Appointment[]>([]);
  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate]
  );
  const onView = useCallback((newView: View) => setView(newView), [setView]);

  useEffect(() => {
    fetchAppointments().then((res) => setDbAppointments(res));
  }, [popupOpen]); // can be reduced to only when the popup turns false

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      setAppointment((prev) => ({ ...prev, start, end }));
      if (clients.length === 0) fetchClients().then((res) => setClients(res));
      setOpen(true);
    },
    [setAppointment, setOpen, clients]
  );

  const handleSelectEvent = useCallback(
    (event: Appointment) => {
      setChosenAppointment(event);
      if (clients.length === 0)
        fetchClients().then((res) => {
          setClients(res);
          setClient(res.find((client) => client.id === event.userId));
          setPopupOpen(true);
        });
      else {
        setClient(clients.find((client) => client.id === event.userId));
        setPopupOpen(true);
      }
    },
    [clients]
  );

  const handleSelectClient = useCallback((id: string, name: string | null) => {
    setAppointment((prev) => ({
      ...prev,
      user: id ? { connect: { id } } : undefined,
      title: name ? name : 'אחר',
    }));
  }, []);

  return (
    <>
      <DisplayAppointmentDialog
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        client={client}
        appointment={chosenAppointment!}
      />
      <AppointmentDialog
        open={open}
        setOpen={setOpen}
        clients={clients}
        handleSelectClient={handleSelectClient}
        setDbAppointments={setDbAppointments}
        appointment={appointment}
      />
      <Calendar
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'white',
          color: 'black',
          direction: 'rtl',
        }}
        date={date}
        rtl={true}
        localizer={localizer}
        events={dbAppointments}
        view={view}
        onView={onView}
        onNavigate={onNavigate}
        min={new Date(0, 0, 0, 6, 0, 0)}
        max={new Date(0, 0, 0, 22, 0, 0)}
        eventPropGetter={(event) => {
          if (event.userId)
            return {
              style: {
                backgroundColor: 'red',
                fontSize: '0.8rem',
                textAlign: 'center',
              },
            };
          return {
            style: {
              backgroundColor: 'gray',
              textAlign: 'center',
              fontWeight: 'bold',
            },
          };
        }}
        messages={{
          next: 'הבא',
          previous: 'הקודם',
          today: 'היום',
          week: 'שבוע',
          day: 'יום',
        }}
        selectable
        views={['week', 'day']}
        onSelectSlot={(slotInfo) => {
          handleSelectSlot(slotInfo);
        }}
        onSelectEvent={handleSelectEvent}
      />
    </>
  );
};

export default ScheduleCalendar;
