import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function HomePage() {
  return <main className={inter.className}></main>;
}
