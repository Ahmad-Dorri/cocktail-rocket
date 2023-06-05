import { Metadata } from 'next';
import { ReactNode } from 'react';
export const metadata: Metadata = {
  title: 'Nextjs | Project',
  description: 'simple project using nextjs',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
