import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';
import Provider from './provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Provider>
          <Navbar />
          <Suspense
            fallback={
              <>
                <Loading />
              </>
            }
          >
            {children}
          </Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
