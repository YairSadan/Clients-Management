import type { Metadata } from 'next'
import './globals.css'
import { rubik } from './ui/fonts'

export const metadata: Metadata = {
  title: 'Clients & Payments',
  description: 'Created by Yair Sadan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he">
      <body className={`${rubik.className} antialiased bg-primary`} dir='rtl'>{children}</body>
    </html>
  )
}
