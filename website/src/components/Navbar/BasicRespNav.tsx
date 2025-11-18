'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function BasicRespNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/*    Home  */}
        <div className="text-2xl font-bold">
          <Link href="/">Home</Link>
        </div>

        {/*     Hamburger Menu for :sm and :md screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus-outline-none focus-text-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentcolor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Links visible on Lg Screens */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/">
            <div className="hover:text-gray-300">Sample</div>
          </Link>
          <Link href="/">
            <div className="hover:text-gray-300">Sample</div>
          </Link>
          <Link href="/">
            <div className="hover:text-gray-300">Sample</div>
          </Link>
          <Link href="/">
            <div className="hover:text-gray-300">Sample</div>
          </Link>
        </div>
      </div>

      {/*       Mobile Menu Visible when isOpen */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="space-y-4 px-4 pb-4">
            <li>
              <a href="/">Sample</a>
            </li>
            <li>
              <a href="/">Sample</a>
            </li>
            <li>
              <a href="/">Sample</a>
            </li>
            <li>
              <a href="/">Sample</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
