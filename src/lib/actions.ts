'use server';
import { Appointment, Prisma, User } from '@prisma/client';
import prisma from './prisma';

export async function createAppointment(
  data: Prisma.AppointmentCreateInput
): Promise<Appointment> {
  const appointment = await prisma.appointment.create({
    data,
  });
  return appointment;
}

export async function deleteAppointment(id: string): Promise<void> {
  await prisma.appointment.delete({
    where: {
      id,
    },
  });
}

export async function updateUser(
  id: string,
  data: Prisma.UserUpdateInput
): Promise<void> {
  await prisma.user.update({
    where: {
      id,
    },
    data,
  });
}

export async function findUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}
