import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '../../../contexts/AuthContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (router.pathname !== '/') {
      router.push('/', undefined, { shallow: true }).then(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/assets/arena-logo.png" alt="Arena" width={32} height={32} />
            <span className="ml-2 text-xl font-bold">ARENA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('explore-venues')}
              className="text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              EXPLORE VENUES
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              HOW IT WORKS
            </button>
            <Link 
              href="/venue-owners" 
              className="text-sm font-semibold hover:text-gray-600 transition-colors"
            >
              FOR VENUE OWNERS
            </Link>
            {!user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/register" 
                  className="text-sm font-semibold hover:text-gray-600 transition-colors"
                >
                  SIGN UP
                </Link>
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-sm font-semibold text-black bg-arena-orange rounded-lg hover:bg-arena-orange/90 transition-colors"
                >
                  LOGIN
                </Link>
              </div>
            ) : (
              <button
                onClick={logout}
                className="text-sm font-semibold hover:text-gray-600 transition-colors"
              >
                LOGOUT
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 px-2">
              <button 
                onClick={() => scrollToSection('explore-venues')}
                className="text-sm font-semibold hover:text-gray-600 transition-colors py-2"
              >
                EXPLORE VENUES
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-sm font-semibold hover:text-gray-600 transition-colors py-2"
              >
                HOW IT WORKS
              </button>
              <Link 
                href="/venue-owners" 
                className="text-sm font-semibold hover:text-gray-600 transition-colors py-2"
              >
                FOR VENUE OWNERS
              </Link>
              {!user ? (
                <>
                  <Link 
                    href="/register" 
                    className="text-sm font-semibold hover:text-gray-600 transition-colors py-2"
                  >
                    SIGN UP
                  </Link>
                  <Link 
                    href="/login" 
                    className="text-sm font-semibold bg-arena-orange text-black px-4 py-2 rounded-lg hover:bg-arena-orange/90 transition-colors"
                  >
                    LOGIN
                  </Link>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="text-sm font-semibold hover:text-gray-600 transition-colors py-2"
                >
                  LOGOUT
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;