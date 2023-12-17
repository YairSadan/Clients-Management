import React, { useState } from 'react';
import { createAppointment } from '@/lib/actions';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { fetchAppointments } from '@/lib/data';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Appointment, Prisma, User } from '@prisma/client';

interface AppointmentDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  clients: User[];
  handleSelectClient: (id: string, name: string | null) => void;
  setDbAppointments: (appointments: Appointment[]) => void;
  appointment: Prisma.AppointmentCreateInput;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({
  open,
  setOpen,
  clients,
  handleSelectClient,
  setDbAppointments,
  appointment,
}) => {
  const [value, setValue] = useState<string>();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">הוסף פגישה</DialogTitle>
        </DialogHeader>
        <Command>
          <CommandInput placeholder="בחר לקוח" />
          <CommandEmpty>לא נמצא לקוח</CommandEmpty>
          <CommandGroup>
            {clients.map((client) => (
              <CommandItem
                key={client.id}
                value={client.name as string}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  handleSelectClient(client.id, client.name);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === client.name ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {client.name}
              </CommandItem>
            ))}
            <CommandItem
              value="אחר"
              onSelect={(currentValue) => {
                setValue(currentValue === value ? 'אחר' : currentValue);
                handleSelectClient('', null);
              }}
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  value === 'אחר' ? 'opacity-100' : 'opacity-0'
                )}
              />
              {'אחר'}
            </CommandItem>
          </CommandGroup>
        </Command>
        <Button
          onClick={() => {
            setOpen(false);
            createAppointment(appointment).then((res) => {
              fetchAppointments().then((res) => setDbAppointments(res));
            });
          }}
        >
          הוסף
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
