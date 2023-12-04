import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import React from 'react';
import AddClientForm from './components/AddClientForm';
import SearchClients from './components/SearchClients';
import prisma from '@/lib/prisma';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import { Role } from '@prisma/client';
import ClientsTable from './components/ClientsTable';
import { columns } from './components/columns';
const addClient = async (values: any) => {
  'use server';
  await prisma?.authrizedPool.create({
    data: {
      name: values.username,
      phone: values.phone,
      email: values.email,
      pricePerAppointment: values.pricePerAppointment,
      fundingSource: values.fundingSource,
      notes: values.notes,
    },
  });
};

const ClientsManager: React.FC = async (props) => {
  const clients = await prisma.user.findMany({
    where: {
      NOT: {
        role: Role.ADMIN,
      },
    },
  });

  return (
    <main className="page-primary justify-center gap-16">
      <HomeSvg />
      <SearchClients clients={clients} />
      <Dialog>
        <DialogTrigger asChild>
          <Button size={'clientsButton'}>הוספת לקוח</Button>
        </DialogTrigger>
        <DialogContent className="w-4/5">
          <DialogHeader>
            <DialogTitle className="text-center">
              הכנס את פרטי הלקוח
            </DialogTitle>
            <DialogDescription>
              <AddClientForm addClient={addClient} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <ClientsTable columns={columns} data={clients} />
    </main>
  );
};

export default ClientsManager;
