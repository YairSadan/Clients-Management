'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User } from '@prisma/client';
import Image from 'next/image';
import React, { useState } from 'react';
import SaveDialog from './SaveDialog';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  user: User | null;
};

const UserDetails = ({ user }: Props) => {
  const router = useRouter();
  const pathName: string = usePathname();
  const pathNameSegments: string[] = pathName.split('/');

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name ?? null,
    email: user?.email || '',
    phone: user?.phone || '',
    image: user?.image ?? null,
  });

  const saveChanges = async () => {
    if (user?.id) {
      // updateUser(user?.id, editedUser); // update in the DB
    }
    router.replace(`/${pathNameSegments[1]}/${pathNameSegments[2]}`);

    // setEditMode(false); // No need cuz routing away from page
  };
  return (
    user && (
      <article className="flex flex-col gap-10">
        <section className="flex flex-col items-center gap-5">
          <Input
            disabled={!editMode}
            type="text"
            placeholder="Name"
            value={(editMode ? editedUser.name : user.name) || ''}
            onChange={(e) =>
              setEditedUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {/* <Input disabled type="email" placeholder="Email" value={user.email} />
          <Input
            disabled={!editMode}
            type="text"
            placeholder="Mobile"
            value={editMode ? editedUser.phone : user.phone}
            onChange={(e) =>
              setEditedUser((prev) => ({ ...prev, phone: e.target.value }))
            }
          /> */}
          <Image
            src={user.image || ''}
            width={100}
            height={100}
            alt={`${user.name}`}
          />
          {editMode ? (
            <Input
              type="text"
              placeholder="Image URL"
              value={editedUser.image || ''}
              onChange={(e) =>
                setEditedUser((prev) => ({ ...prev, image: e.target.value }))
              }
            />
          ) : (
            ''
          )}
        </section>
        {editMode ? (
          <SaveDialog
            btnContent={'לשמור את השינוים?'}
            saveClick={saveChanges}
            cancelClick={() => setEditMode(false)}>
            <h4>U Sure? theses r the change</h4>
            <p>Name: {editedUser.name}</p>
            <p>Phone: {editedUser.phone}</p>
            <p>Picture: {editedUser.image}</p>
          </SaveDialog>
        ) : (
          <Button onClick={() => setEditMode(true)}>שינוי</Button>
        )}
      </article>
    )
  );
};

export default UserDetails;
