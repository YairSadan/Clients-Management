import type { Metadata } from 'next';
import './globals.css';
import { rubik } from './ui/fonts';
import { NextAuthProvider } from './providers';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang="he" suppressHydrationWarning>
      <body className={`${rubik.className} antialiased absolute inset-0`} dir="rtl">
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
