import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/blog' },
    { name: 'Awards', path: '/awards' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-medium tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            {siteConfig.name.replace('[REPLACE: Your Name]', 'Diya')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors relative ${
                  isActive(item.path)
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-neutral-900" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
              asChild
            >
              <a href={`mailto:${siteConfig.email.replace('[REPLACE: your.email@example.com]', 'hello@example.com')}`}>
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 text-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-neutral-900 font-medium'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-neutral-200 text-neutral-700"
                  asChild
                >
                  <a href={`mailto:${siteConfig.email.replace('[REPLACE: your.email@example.com]', 'hello@example.com')}`}>
                    Contact
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
