'use client';

import React, { Suspense } from 'react';
import Footer from '../Shared/Footer';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Navbar from '../Shared/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <>
            <LoadingSpinner />
          </>
        }
      >
        {children}
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
