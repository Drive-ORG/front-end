/* eslint-disable @next/next/no-page-custom-font */

import '@/styles/overrides.scss';

import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Layout } from '@/components/Head';

export const metadata: Metadata = {
  authors: [{ name: 'Alireza Shahmoradi' }],
  creator: 'Alireza Shahmoradi',
  description: `This is a final project for university software testing class.`,
  title: `DriveOrg`
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        {/* Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Croissant+One&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
