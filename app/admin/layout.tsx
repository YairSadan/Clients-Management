import { UserRole } from "@prisma/client";
import { Navbar } from "./_components/navbar";
import { currentRole } from "@/lib/auth";
import { FormError } from "@/components/form-error";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};
const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN)
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  return (
    <div className="relative h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="absolute top-0 w-4/5">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default ProtectedLayout;
