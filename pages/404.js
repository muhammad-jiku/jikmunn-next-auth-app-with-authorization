import React from 'react';

import Head from 'next/head';
import NotFound from '@/components/Shared/NotFound';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Jikmunn Next Auth - 404</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
