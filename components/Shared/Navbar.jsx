'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { data: session } = useSession();

  const signingOut = async () => {
    signOut();
  };

  const menuItems = (
    <>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      {session ? (
        <>
          <li>
            <Link href={`/admin/dashboard`}>Admin</Link>
          </li>
          <li>
            <Link href={`/user/dashboard`}>User</Link>
          </li>
          <li>
            <button className="btn btn-primary" onClick={signingOut}>
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href={`/signin`}>Sign In</Link>
          </li>
          <li>
            <Link href={`/signup`}>Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-300 font-bold">
      <div className="navbar-start">
        <button className="btn btn-ghost normal-case text-xs sm:text-sm md:text-xl text-primary">
          <Link href={`/`}>
            <span className="text-primary">
              Authorization & Authentication App
            </span>
          </Link>
        </button>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 glass"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
