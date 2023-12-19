'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import React, { useState } from 'react';
import AddClientForm from './components/AddClientForm';
import SearchClients from './components/SearchClients';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import ClientsTable from './components/ClientsTable';

const ClientsManager: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="page-primary justify-center gap-16">
      <HomeSvg />
      <SearchClients />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={'clientsButton'}>הוספת לקוח</Button>
        </DialogTrigger>
        <DialogContent className="w-4/5">
          <DialogHeader>
            <DialogTitle className="text-center">
              הכנס את פרטי הלקוח
            </DialogTitle>
          </DialogHeader>
          <AddClientForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
      <ClientsTable />
    </main>
  );
};

export default ClientsManager;
