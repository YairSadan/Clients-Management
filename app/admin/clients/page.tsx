import { DataTable } from "@/components/data-table/data-table";
import { columns } from "./_components/columns";
import { getAllClients } from "@/actions/clients";

export default async function AdminClientsPage() {
  const clients = await getAllClients();
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all your clients!
          </p>
        </div>
      </div>
      <DataTable data={clients} columns={columns} />
    </div>
  );
}
