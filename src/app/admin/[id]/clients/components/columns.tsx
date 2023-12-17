import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'שם',
  },
  {
    accessorKey: 'email',
    header: 'מייל',
  },
  {
    accessorKey: 'phone',
    header: 'טלפון',
  },
  {
    accessorKey: 'appointmentsCount',
    header: 'מספר טיפולים',
  },
  {
    accessorKey: 'debt',
    header: 'חוב',
  },
];
