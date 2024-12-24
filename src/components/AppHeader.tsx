'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderButton from './HeaderButton';

const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-10 transition-all duration-300 bg-white ${isScrolled ? 'h-[80px]' : 'h-[120px]'} w-[calc(100%-400px)] ml-[200px] mr-[200px]`}>
      <div className={`flex justify-between items-center h-full transition-all duration-300`}>
        {/* Left side */}
        <Link href="#top">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Right side */}
        <nav className="space-x-6">
          <Link href="#home">
            <HeaderButton title='Home' onClick={() => { }} size='standard' />
          </Link>
          <Link href="#about">
            <HeaderButton title='About' onClick={() => { }} size='standard' />
          </Link>
          <Link href="#services">
            <HeaderButton title='Services' onClick={() => { }} size='standard' />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
