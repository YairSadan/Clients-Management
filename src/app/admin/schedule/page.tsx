import React from 'react';
import ScheduleCalendar from './components/ScheduleCalendar';
import { Appointment } from '@prisma/client';
import prisma from '@/lib/prisma';
const adminSchedulePage = async () => {
  'use server';
  const appointments: Appointment[] = await prisma.appointment.findMany();
  const addAppointment = async (appointment: Appointment) => {
    'use server';
    await prisma.appointment.create({
      data: {
        start: appointment.start,
        end: appointment.end,
        userId: 'clps6ex3l000nmx8rfala70as',
      },
    });
  };
  return (
    <ScheduleCalendar
      dbAppointments={appointments}
      addAppointment={addAppointment}
    />
  );
};

export default adminSchedulePage;
