'use server';
import { Appointment, Prisma, Role, User } from '@prisma/client';
import prisma from './prisma';
import { getServerSession } from 'next-auth';
import { UserWithAppoinments } from './types';

export async function createAppointment(
  data: Prisma.AppointmentCreateInput
): Promise<Appointment> {
  const appointment = await prisma.appointment.create({
    data,
  });
  return appointment;
}

export async function createAvailableAppointment( start: string, end: string ): Promise<void> {
  await prisma.appointment.create({
    data: {
      start: start,
      end: end,
      title: '',
      completed: false,
    }
  });
}

export async function getAvailableAppointments(): Promise<Appointment[] | null> {
  const appoinments: Appointment[] | null = await prisma.appointment.findMany({
    where: {
      start: {
        gt: new Date(),
      },
      title: '',
      completed: false,
    },
  });
  return appoinments;
}

export async function deleteAppointment(id: string): Promise<void> {
  await prisma.appointment.delete({
    where: {
      id,
    },
  });
}

export async function findUserByEmail(email: string): Promise<User> {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error('No user found');
  }
  return user;
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

export async function findUserById(id: string): Promise<User> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) throw new Error('User was not found');
  return user;
}

export async function getUserAppointments(id: string): Promise<Appointment[] | null> {
  const appointments = await prisma.appointment.findMany({
    where: {
      userId: id,
      start: {
        gt: new Date(),
      },
      completed: false
    },
  });
  return appointments;
}

export async function bookAppoinment(user: User, appointment: Appointment): Promise<void> {
  await prisma.appointment.update({
    where: {
      id: appointment.id,
    },
    data: {
      userId: user.id,
      title: user.name ?? '',
    }
  });
}

export async function cancelAppointment(appointment: Appointment): Promise<void> {
  await prisma.appointment.update({
    where: {
      id: appointment.id,
    },
    data: {
      userId: null,
      title: '',
    }
  });
}

export async function completeCompletedAppointments(): Promise<void> {
  await prisma.appointment.updateMany({
    where: {
      completed: false,
      end: {
        lte: new Date(),
      }
    },
    data: {
      completed: true
    }
  });
}

export async function getUsersOwedForAppointments(id: string): Promise<number> {
  await completeCompletedAppointments();
  try {
    const userWithAppointmentCount: {
      pricePerAppointment: number;
      _count: {
          Appointment: number;
      };
  } = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        pricePerAppointment: true, 
        _count: {
          select: {
            Appointment: {
              where: {
                completed: true,
                payed: false
              },
            },
          },
        },
      },
    });
    return userWithAppointmentCount.pricePerAppointment * userWithAppointmentCount._count.Appointment;
  } catch (error: any) {
    console.log(error.message)
  }
  return 0;
}

export async function addUserToAuthrizedUsers(
  data: Prisma.AuthrizedPoolCreateInput
): Promise<string> {
  const session = await getServerSession();
  if (!session?.user) {
    throw new Error('No session found');
  }
  const user = await findUserByEmail(session.user.email);
  if (!user) {
    throw new Error('No user found');
  }
  if (user.role !== Role.ADMIN) {
    throw new Error('You are not authorized to do this');
  }
  try {
    await prisma.authrizedPool.create({
      data,
    });
    
  } catch (error: any) {
    return error.message;
  }
  return 'success';
}
