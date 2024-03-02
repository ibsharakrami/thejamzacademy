"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation'


export function Nav2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState("");

  const pathname = usePathname()


  // useEffect(() => {

  //   setActiveLink(router.pathname)
  // }, [router.pathname])


  return (
    <>
      <div className="w-full fixed left-0 right-0 top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="h-16  items-center flex justify-between ">

            {/* Burger Menu Button */}
            <img
              src={'/image/jaa.png'}
              className='h-30 w-40'

            />
            <div className="md:hidden flex items-center justify-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <img
                  src={'/image/m.png'}
                  className='h-10 w-10'

                />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} hidden gap-x-6 text-white`}>
              <li>
                <Link href="/" className={pathname == "/" ? "activeLink" : "none"}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about" className={pathname == "/about" ? "activeLink" : "none"}>
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/about" className={pathname == "/about" ? "activeLink" : "none"}>
                  <p>Courses</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts" className={pathname == "/contacts" ? "activeLink" : "none"}>
                  <p>Contact</p>
                </Link>
              </li>
            </ul>

          </div>
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:hidden gap-x-6 text-white   flex flex-col justify-center items-center`}>
            <li className='w-full h-16 flex items-center justify-center border-t-white border-b'>
              <Link href="/" onClick={toggleMenu}>
                <p className='text-white font-bold text-2xl '>Home</p>
              </Link>
            </li>
            <li className='w-full h-16 flex items-center justify-center border-t-white border-b'>
              <Link href="/about" onClick={toggleMenu}>
                <p className='text-white font-bold text-2xl '>About Us</p>
              </Link>
            </li>
            <li className='w-full h-16 flex items-center justify-center border-t-white border-b'>
              <Link href="/" onClick={toggleMenu}>
                <p className='text-white font-bold text-2xl'>Cousres</p>
              </Link>
            </li>
            <li className='w-full h-16 flex items-center justify-center border-t-white border-b'>
              <Link href="/contacts" onClick={toggleMenu}>
                <p className='text-white font-bold text-2xl'>Contact</p>
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


