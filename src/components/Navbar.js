import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-primary-200 dark:border-primary-800' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">Bitga</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Fonctionnalités</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Comment ça marche</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Témoignages</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Tarifs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Se connecter</Button>
            <Button variant='vibrant' size="sm">Essai gratuit</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link href="#features" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Fonctionnalités</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Comment ça marche</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Témoignages</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 font-medium relative group">
              <span>Tarifs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">Se connecter</Button>
                <Button variant='outline' size="sm" className="w-full">Essai gratuit</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;