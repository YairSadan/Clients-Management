import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Link from 'next/link';
import React from 'react';
import AddClientForm from './components/AddClientForm';
import SearchClients from './components/SearchClients';
import prisma from '@/lib/prisma';
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
const ClientsManager = () => {
  return (
    <main className="page-primary justify-center gap-16">
      <SearchClients />
      <Dialog>
        <DialogTrigger asChild><Button>הוספת לקוח</Button></DialogTrigger>
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

      <Button asChild>
        <Link href={'admin/clients/'}>לקוחות</Link>
      </Button>
    </main>
  );
};

export default ClientsManager;
