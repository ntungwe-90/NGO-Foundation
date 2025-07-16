import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Victorine's Seed of Care Foundation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button */}
          <Link
            to="/donate"
            className="hidden md:inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors font-medium"
          >
            Donate Now
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="block px-3 py-2 mt-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;