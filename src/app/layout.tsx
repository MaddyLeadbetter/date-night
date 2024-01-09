import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { pink } from '@/colours';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className} style={{ margin: 0, background: pink[50] }}>
        {children}
      </body>
    </html>
  );
}
