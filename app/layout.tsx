import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html
        lang='en'
        suppressHydrationWarning
      >
        <body className={`${montserrat.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
