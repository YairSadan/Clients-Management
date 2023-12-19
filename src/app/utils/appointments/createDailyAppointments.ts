import { createAvailableAppointment } from '@/lib/actions'

const createDailyAppointments = () => {
  const currentDate = new Date();
  const appointments = [];

  // Loop through each hour until 9 pm
  for (let hour = currentDate.getHours() + 1; hour <= 21; hour++) {
    const start = new Date(currentDate);
    start.setHours(hour);
    start.setMinutes(0);
    start.setSeconds(0);

    const end = new Date(start);
    end.setHours(hour + 1);

    appointments.push({
      start: start.toISOString(),
      end: end.toISOString(),
    });
  }

  appointments.forEach((appointment) => {
    createAvailableAppointment(appointment.start, appointment.end);
  });
};

export default createDailyAppointments;