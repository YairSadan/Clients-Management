import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';
import { Role } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: AdapterUser & {} & DefaultSession;
  }

  interface User extends DefaultUser {
    role: Role.ADMIN | Role.CLIENT;
    phone: string;
    name: string;
    pricePerAppointment: number;
    notes: string?;
    fundingSource: string?;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: string;
  }
}
