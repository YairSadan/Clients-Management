'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { addUserToAuthrizedUsers } from '@/lib/actions';

const formSchema = z.object({
  name: z.string().min(2, { message: 'יש להכניס שם מלא (לפחות שני תווים)' }),
  phone: z
    .string()
    .min(9, { message: 'יש להכניס מספר טלפון תקין' })
    .max(13, { message: 'יש להכניס מספר טלפון תקין' }),
  email: z.string().email({ message: 'יש להכניס כתובת אימייל תקינה' }),
  pricePerAppointment: z.coerce
    .number({
      required_error: 'יש להכניס מחיר לפגישה',
      invalid_type_error: 'יש להכניס מספר',
    })
    .min(0, { message: 'המחיר אינו יכול להיות שלילי' })
    .max(1000, { message: 'המחיר אינו יכול להיות גבוה מ1000 ש"ח' }),
  fundingSource: z.string(),
  notes: z
    .string()
    .max(500, { message: 'ההערות אינן יכולות להיות יותר מ500 תווים' }),
});

const AddClientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      pricePerAppointment: 0, //TODO: fix it so it'll display the placeholder
      fundingSource: '',
      notes: '',
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    values.email = values.email.toLowerCase();
    addUserToAuthrizedUsers(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="שם מלא" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="טלפון" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="אימייל" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricePerAppointment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="מחיר לפגישה" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fundingSource"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="גורם מממן" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className="p-2" placeholder="הערות" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">הוסף</Button>
      </form>
    </Form>
  );
};

export default AddClientForm;
