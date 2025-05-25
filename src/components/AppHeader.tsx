'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderButton from './HeaderButton'

const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Education', href: '#education' },
    { title: 'Testimonial', href: '#testimonial' },
  ]

  const handleScrollTo = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 z-10 transition-all duration-300 bg-white ${isScrolled ? 'h-[80px]' : 'h-[120px]'} w-full px-5 md:px-[50px] lg:px-[200px]`}>
      <div className="flex justify-between items-center h-full">
        {/* Left side */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo('#home')
          }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6">
          {navItems.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo(href)
              }}>
              <HeaderButton title={title} onClick={() => { }} size="standard" />
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(prev => !prev)} className="text-4xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col bg-white p-4 shadow-md rounded-md">
          {navItems.map(({ title, href }) => (
            <Link key={href} href={href} onClick={(e) => { e.preventDefault(); handleScrollTo(href) }}>
              <HeaderButton title={title} onClick={() => { }} size="standard" />
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default AppHeader