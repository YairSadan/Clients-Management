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
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import ClientsTable from './components/ClientsTable';
import { columns } from './components/columns';
import { fetchClients } from '@/lib/data';
import { User } from '@prisma/client';

const ClientsManager: React.FC = async () => {
  const clients: User[] = await fetchClients();

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
              <AddClientForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <ClientsTable columns={columns} data={clients} />
    </main>
  );
};

export default ClientsManager;
