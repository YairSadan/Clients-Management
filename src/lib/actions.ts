'use server';
import { Appointment, Prisma } from '@prisma/client';
import prisma from './prisma';
export async function createAppointment(
  data: Prisma.AppointmentCreateInput
): Promise<Appointment> {
  const appointment = await prisma.appointment.create({
    data,
  });
  return appointment;
}
