'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShow(true), 5000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${show ? '' : 'overflow-hidden'}`}>
        {children}
      </body>
    </html>
  );
}
