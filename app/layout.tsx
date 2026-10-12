import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
