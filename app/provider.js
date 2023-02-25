'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = ({ children }) => {
  return (
    <SessionProvider
    // basePath="/user/api/auth"
    >
      {children}
    </SessionProvider>
  );
};

export default Provider;
