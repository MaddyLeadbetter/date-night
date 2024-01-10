import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/700.css';
import '@fontsource/rampart-one/400.css';

import type { Metadata } from 'next';

import { pink } from '@/colours';

export const metadata: Metadata = {
  title: 'Date Nite',
  description: 'Generate your next cool date idea!',
  openGraph: {
    type: 'website',
    url: 'https://maddyleadbetter.github.io/date-night/',
    title: 'Date Nite',
    description: 'Generate your next cool date idea!',
    siteName: 'Date Nite'
  },
  twitter: {
    title: 'Date Nite',
    description: 'Generate your next cool date idea!'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: pink[50] }}>{children}</body>
    </html>
  );
}
