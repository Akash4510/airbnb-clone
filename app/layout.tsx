import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nuinto = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nuinto.className}>{children}</body>
    </html>
  );
}
