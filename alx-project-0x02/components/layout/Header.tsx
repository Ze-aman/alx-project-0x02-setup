import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo/Home Link */}
        <Link href="/" className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors">
            ALX Next Router
        </Link>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/posts" className="text-gray-300 hover:text-white transition-colors">
                Posts (GSSP)
              </Link>
            </li>
            <li>
              {/* NEW USER LINK ADDED HERE */}
              <Link href="/users" className="text-gray-300 hover:text-white transition-colors font-bold text-teal-400">
                Users (GSSP)
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;