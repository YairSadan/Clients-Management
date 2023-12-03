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

const ClientsManager = () => {
  return (
    <main className="page-primary justify-center gap-16">
      <SearchClients />
      <Dialog>
        <DialogTrigger>הוספת לקוח</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              <AddClientForm />
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
