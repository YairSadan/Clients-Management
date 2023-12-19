import { Appointment, User } from "@prisma/client";

export type UserWithAppoinments = User & { Appointment:  Appointment[]}