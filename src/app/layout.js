'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/components/buttons/styles.scss';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useContext } from 'react';
import {
  LoadingProvider,
  LoadingContext,
} from '@/common/contexts/LoadingContext';
import LoadingCtx from '@/components/Loading/LoadingCtx';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const { isLoading } = useContext(LoadingContext);
  return (
    <LoadingProvider>
      <html lang="en">
        <head>
          <title>nxt-app</title>
          <meta name="description" content="Description" />
        </head>
        <body className={inter.className}>
          {' '}
          <AntdRegistry>{children}</AntdRegistry>
          <LoadingCtx className="absolute left-0 top-0" />
        </body>
      </html>
    </LoadingProvider>
  );
}
