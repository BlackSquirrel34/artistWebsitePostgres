'use client'
import { NavLink } from '@/payload-types'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface SubRespNavProps {
  ownerName: string
  navData: NavLink
}

export default function SubRespNav({ ownerName, navData }: SubRespNavProps) {
  const [baseUrl, setBaseUrl] = useState('') // replaces NEXT_PUBLIC_BASE_URL: we just grab the path we're currently on
  const [isOpen, setIsOpen] = useState(false) // mobile menu toggle
  const [activeMainIndex, setActiveMainIndex] = useState<number | null>(null) // submenu toggle

  // we check whether there's window and grab the BASE_URL: localhost:3000 or the production URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  interface MainClickHandler {
    (index: number): void
  }

  const handleMainClick: MainClickHandler = (index) => {
    setActiveMainIndex(index === activeMainIndex ? null : index)
  }

  // inserted
  //  Crucially, handle potential null/undefined values
  const displayedNavItems = navData?.navItems || []

  // Check for valid data structure
  if (!Array.isArray(displayedNavItems)) {
    console.error('navData.navItems is not an array:', navData)
    return <div>Invalid navigation data</div>
  }

  return (
    <nav className="bg-gray-900 text-white relative">
      {/* Desktop & Mobile Container */}
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo/Home */}
        <div className="text-xl font-bold">
          <Link href="/">{ownerName}</Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-wrap justify-center max-w-[60.3333%] mx-auto space-x-6">
          {displayedNavItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Main link/button */}
              <Link href={item.link ? `${baseUrl}/${item.link}` : '#'}>
                <button
                  onClick={() => handleMainClick(index)}
                  className="hover:text-gray-300 focus:outline-none"
                >
                  {item.label}
                </button>
              </Link>
              {/* Submenu on hover or click */}
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded shadow-lg py-2 min-w-max z-10">
                {item.subpageLinks?.map((subItem, subIdx) => (
                  <li key={subIdx} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <Link href={subItem.link ? `${baseUrl}/${subItem.link}` : '#'}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-gray-900 z-20">
          <ul className="space-y-4 px-4 pb-4">
            {displayedNavItems.map((item, index) => (
              <li key={index}>
                {/* Main item button. Expands only if tehre actually are subItems to show */}
                <Link href={item.link ? `${baseUrl}/${item.link}` : '#'}>
                  <button
                    onClick={() => {
                      if (item.subpageLinks && item.subpageLinks.length > 0) {
                        handleMainClick(index)
                      }
                    }}
                    className="w-full text-left px-2 py-1 hover:bg-gray-700 flex justify-between items-center"
                  >
                    {item.label}
                    {/* Show arrow only if there are subpageLinks */}
                    {item.subpageLinks && item.subpageLinks.length > 0 && (
                      <span>{activeMainIndex === index ? '▲' : '▼'}</span>
                    )}
                  </button>
                </Link>
                {/* Submenu, toggle open/close */}
                {activeMainIndex === index && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.subpageLinks?.map((subItem, subIdx) => (
                      <li key={subIdx} className="px-2 py-1 hover:bg-gray-700">
                        <Link href={subItem.link ? `${baseUrl}/${subItem.link}` : '#'}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
