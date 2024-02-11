import { getUserById } from "@/data/user";

const ClientPage = async ({ params }: { params: { id: string } }) => {
  const client = await getUserById(params.id);
  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      {client?.name}
    </section>
  );
};
export default ClientPage;
