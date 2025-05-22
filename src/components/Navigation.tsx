'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-ai sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-primary-dark hover:to-accent-dark transition-all">
            Axtray
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/') ? 'text-primary font-medium' : ''
              }`}
            >
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Solutions
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div 
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-ai-lg py-2 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="/solutions/customer-service-ai"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Customer Service AI
                </Link>
                <Link
                  href="/solutions/process-automation"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Process Automation
                </Link>
                <Link
                  href="/solutions/data-analysis"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Data Analysis
                </Link>
                <Link
                  href="/solutions/custom-ai"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Custom AI Development
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/contact') ? 'text-primary font-medium' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-ai-lg mt-2">
            <Link
              href="/"
              className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <div className="py-2">
              <button 
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-between"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Solutions
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`pl-4 mt-2 space-y-1 transition-all duration-200 ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}>
                <Link
                  href="/solutions/customer-service-ai"
                  className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Customer Service AI
                </Link>
                <Link
                  href="/solutions/process-automation"
                  className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Process Automation
                </Link>
                <Link
                  href="/solutions/data-analysis"
                  className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Data Analysis
                </Link>
                <Link
                  href="/solutions/custom-ai"
                  className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Custom AI Development
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 