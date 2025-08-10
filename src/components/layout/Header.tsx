"use client"

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors">
            RelayStack
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Home
            </Link>
            <Link href="/news" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              News
            </Link>
            <Link href="/community" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Community
            </Link>
            <Link href="/events" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Events
            </Link>
            <Link href="/docs" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Docs
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              About
            </Link>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/news" 
                className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/community" 
                className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="/events" 
                className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/docs" 
                className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
