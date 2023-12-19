import type { Metadata } from 'next';
import './globals.css';
import { rubik } from './ui/fonts';
import { NextAuthProvider } from './providers';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Clients & Payments',
  description: 'Created by Yair Sadan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" suppressHydrationWarning className='h-full'>
      <body className={`${rubik.className} antialiased h-full`} dir="rtl">
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
