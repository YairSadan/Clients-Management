import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Appointment, User } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { deleteAppointment } from '@/lib/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface DisplayAppointmentDialogProps {
  popupOpen: boolean;
  setPopupOpen: (popupOpen: boolean) => void;
  client: User | undefined;
  appointment: Appointment;
}

const DisplayAppointmentDialog = ({
  popupOpen,
  setPopupOpen,
  client,
  appointment,
}: DisplayAppointmentDialogProps) => {
  const handleCancel = () => {
    deleteAppointment(appointment.id);
    setPopupOpen(false);
  };
  return (
    <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
      <DialogContent className="flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-center">
            פגישה עם {appointment?.title}
          </DialogTitle>
        </DialogHeader>
        <Avatar className="">
          <AvatarImage src={client ? client.image! : 'sdf'} alt="@shadcn" />
          <AvatarFallback>{client ? client.name : 'אחר'}</AvatarFallback>
        </Avatar>
        <Button variant={'destructive'} onClick={handleCancel}>
          ביטול פגישה
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DisplayAppointmentDialog;
