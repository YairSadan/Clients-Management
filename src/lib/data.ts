'use server';
import { Appointment, Role, User } from '@prisma/client';
import prisma from './prisma';
export async function fetchClients(): Promise<User[]> {
  const clients = await prisma.user.findMany({
    where: {
      role: Role.CLIENT,
    },
  });
  return clients;
}
export async function fetchAppointments(): Promise<Appointment[]> {
  const appointments = await prisma.appointment.findMany();
  return appointments;
}
