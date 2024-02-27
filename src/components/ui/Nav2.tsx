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
        <div className="h-16  items-center flex justify-between ">

          {/* Burger Menu Button */}
          <img
      src={'/image/jaa.png' }
      className='h-30 w-40'

      />
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <img
      src={'/image/m.png' }
      className='h-10 w-10'

      />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} hidden gap-x-6 text-white`}>
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
        <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:hidden gap-x-6 text-white`}>
            <li>
              <Link href="/about"  onClick={toggleMenu}>
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/"  onClick={toggleMenu}>
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts"  onClick={toggleMenu}>
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
      </div>
    </div>
    </>

  );
}

function NavItem({ href, children, currentPath }) {
  const isActive = href === currentPath;

  return (
    <li>
      <Link href={href}>
        <a className={`cursor-pointer ${isActive ? 'text-blue-500 underline' : 'text-white hover:underline'}`}>{children}</a>
      </Link>
    </li>
  );
}


