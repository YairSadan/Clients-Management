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
    <div className="h-full w-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
