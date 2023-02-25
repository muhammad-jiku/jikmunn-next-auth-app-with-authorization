'use client';

import Link from 'next/link';
import React from 'react';

const HomeSection = () => {
  return (
    <div>
      <>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <>
                <h1 className="text-2xl font-bold">
                  Hello, there! We welcome you here!
                </h1>
              </>

              <>
                <h1 className="text-2xl font-bold">
                  Please Sign in to see welcome message
                </h1>
                <br />
                <button className="btn btn-primary text-white font-bold cursor-pointer">
                  <Link href={'/sign-in'}>Sign In</Link>
                </button>
              </>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomeSection;
