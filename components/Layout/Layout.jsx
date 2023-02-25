'use client';

import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
