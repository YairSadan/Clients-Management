import React from 'react';
import ScheduleCalendar from './components/ScheduleCalendar';
import { fetchAppointments } from '@/lib/data';
const adminSchedulePage = async () => {
  const getAppointments = async () => {
    const appointments = await fetchAppointments();
    return appointments;
  };
  const appointments = await fetchAppointments();
  return <ScheduleCalendar dbAppointments={appointments} />;
};

export default adminSchedulePage;
