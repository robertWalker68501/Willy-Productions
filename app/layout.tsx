import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Willy Productions',
  description:
    'The next generation of hard-rock and heavy-metal music production.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
