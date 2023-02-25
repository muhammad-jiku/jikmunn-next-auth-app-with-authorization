'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner';

const HomeSection = () => {
  const { data: session, status } = useSession();

  console.log('session', session);
  return (
    <div>
      {status === 'loading' ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <div className="hero min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-md">
                {session ? (
                  <>
                    <h1 className="text-2xl font-bold">
                      Hello, {session?.user?.name}! We welcome you here!
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold">
                      Please Sign in to see welcome message
                    </h1>
                    <br />
                    <button className="btn btn-primary text-white font-bold cursor-pointer">
                      <Link href={'/signin'}>Sign In</Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeSection;
