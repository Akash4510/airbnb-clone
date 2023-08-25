import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

const nuinto = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone built with Next.js',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nuinto.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
