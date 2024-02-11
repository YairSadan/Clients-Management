"use server";

import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export const getAllClients = async () => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) throw new Error("Unauthorized");
  return db.user.findMany({
    where: {
      role: UserRole.USER,
    },
  });
};
