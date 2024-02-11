"use client";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue("name")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/admin/clients/${row.original.id}`}>
          <Avatar>
            <AvatarImage src={row.getValue("image")} alt="sf" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Link>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="truncate font-medium">{row.getValue("phone")}</span>
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "pricePerAppointment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PPA" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <span className="truncate font-medium">
          {row.getValue("pricePerAppointment")}
        </span>
      </div>
    ),
  },
];
