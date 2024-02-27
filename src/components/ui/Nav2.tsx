"use client";
import React, { useState } from 'react';
import Link from 'next/link';


export function Nav2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full bg-transparent sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Burger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block gap-x-6 text-white`}>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
    </>
    // <nav className="bg-red-300 fixed top-0 left-0 right-0 border-gray-200 dark:bg-gray-900">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <h1 className='text-white font-bold'>JAMZ ACADEMY</h1>

    //     <div className="flex space-x-4">
    //       <NavLink href="/">Home</NavLink>
    //       <NavLink href="/about">About</NavLink>
    //       <NavLink href="/courses">Courses</NavLink>
    //       <NavLink href="/contact">Contact Us</NavLink>
    //     </div>
    //   </div>
    // </nav>
  );
}

function NavItem({ href, children, currentPath }) {
  const isActive = href === currentPath;

  return (
    <li>
      <Link href={href}>
        <p className={`cursor-pointer ${isActive ? 'text-blue-500' : ''}`}>{children}</p>
      </Link>
    </li>
  );
}


