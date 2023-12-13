'use client';
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { User } from '@prisma/client';
import { fetchClients } from '@/lib/data';
const ComboboxDemo: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [clients, setClients] = React.useState<User[]>([]);
  React.useEffect(() => {
    const updateClients = async () => {
      const clients = await fetchClients();
      setClients(clients);
    };
    updateClients();
  }, []);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? clients.find((client) => client.name === value)?.name
            : 'חפש לקוח'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="הכנס שם לקוח" />
          <CommandEmpty>לא נמצא לקוח</CommandEmpty>
          <CommandGroup>
            {clients.map((client) => (
              <CommandItem
                key={client.name}
                value={client.name!}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
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
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default ComboboxDemo;
