'use client';

import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto pt-6 footer footer-center p-4 bg-base-300 text-base-content font-bold">
      <div>
        <p>
          Copyright &copy; {year} - All right reserved to{' '}
          <span
            className="text-xs sm:text-sm md:text-xl text-primary"
            style={{ fontFamily: 'Comfortaa' }}
          >
            {' '}
            Muhammad Azizul Hoque Jiku{' '}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
