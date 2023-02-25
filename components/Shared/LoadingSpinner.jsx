'use client';

import React from 'react';
import loadingImg from '../../assets/gifs/loading.gif';

const LoadingSpinner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={loadingImg.src} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
