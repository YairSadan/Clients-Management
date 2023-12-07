'use client';
import { Calendar, luxonLocalizer } from 'react-big-calendar';
import { DateTime } from 'luxon';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCallback, useMemo, useState } from 'react';
import { Appointment } from '@prisma/client';
import React from 'react';

const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 });

const ColoredDateCellWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  });
interface ScheduleCalendarProps {
  dbAppointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({
  dbAppointments,
  addAppointment,
}) => {
  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      const title = window.prompt('New Event name');
      if (title) {
        addAppointment({ id: '', start: start, end: end, userId: '1' });
      }
    },
    [addAppointment]
  );
  const { components, defaultDate, max } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2021, 4, 17, 0, 0, 0),
      max: new Date(2021, 4, 21, 0, 0, 0),
    }),
    []
  );

  return (
    <>
      <Calendar
        localizer={localizer}
        events={dbAppointments}
        startAccessor="start"
        endAccessor="end"
        view="week"
        views={['week']}
        defaultDate={defaultDate}
        culture="he"
        messages={{ next: 'הבא', previous: 'הקודם', today: 'היום' }}
        selectable
        onSelectSlot={(slotInfo) => {
          handleSelectSlot(slotInfo);
        }}
      />
    </>
  );
};

export default ScheduleCalendar;
