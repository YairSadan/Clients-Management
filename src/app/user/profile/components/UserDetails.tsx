'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User } from '@prisma/client';
import Image from 'next/image';
import React, { useState } from 'react';
import SaveDialog from './SaveDialog';
import { updateUser } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import ClientDialog from '../../components/ClientDialog';

type Props = {
  user: User | null;
};

const UserDetails = ({ user }: Props) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name ?? null,
    email: user?.email || '',
    phone: user?.phone || '',
    image: user?.image ?? null,
  });

  const saveChanges = async () => {
    if (user?.id) {
      updateUser(user?.id, editedUser); // update in the DB
    }
    router.push('/user');

    setEditMode(false);
  };
  return user ? (
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
        <Input disabled type="email" placeholder="Email" value={user.email} />
        <Input
          disabled={!editMode}
          type="text"
          placeholder="Mobile"
          value={editMode ? editedUser.phone : user.phone}
          onChange={(e) =>
            setEditedUser((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
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
        <ClientDialog
          btnContent={'Save changes?'}
          saveClick={saveChanges}
          cancelClick={() => setEditMode(false)}>
          <h4>U Sure? theses r the change</h4>
          <p>Name: {editedUser.name}</p>
          <p>Phone: {editedUser.phone}</p>
          <p>Picture: {editedUser.image}</p>
        </ClientDialog>
      ) : (
        // <SaveDialog
        //   btnContent={'Save changes?'}
        //   okClick={() => {
        //     saveChanges();
        //   }}
        //   cancelClick={() => setEditMode(false)}>
        //   <h4>U Sure? theses r the change</h4>
        //   <p>Name: {editedUser.name}</p>
        //   <p>Phone: {editedUser.phone}</p>
        //   <p>Picture: {editedUser.image}</p>
        // </SaveDialog>
        <Button onClick={() => setEditMode(true)}>Edit</Button>
      )}
    </article>
  ) : (
    <div>No session detected</div>
  );
};

export default UserDetails;
