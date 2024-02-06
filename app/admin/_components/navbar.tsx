'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/auth/user-button';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-full shadow-sm">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === '/admin/clients' ? 'default' : 'outline'}>
          <Link href="/admin/clients">Clients</Link>
        </Button>
        <Button asChild variant={pathname === '/admin/schedule' ? 'default' : 'outline'}>
          <Link href="/admin/schedule">Schedule</Link>
        </Button>
        <Button asChild variant={pathname === '/admin/settings' ? 'default' : 'outline'}>
          <Link href="/admin/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
