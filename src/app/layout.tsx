'use client';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';

const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

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
      <body className={`${notoSans.className} antialiased ${show ? '' : 'overflow-hidden'}`}>
        {children}
        <div id='global-modal' />
      </body>
    </html>
  );
}
