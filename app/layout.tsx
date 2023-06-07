import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css';
import Navbar from './components/Navbar';
export const metadata: Metadata = {
  title: 'Cocktail | Rocket',
  description: 'create your fucking drink with us!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
