import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Variants type removed (not used)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Articles', href: '/articles' },
  { name: 'Counselors', href: '/counselors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-rose-50 to-teal-50 shadow-lg backdrop-blur-sm bg-opacity-80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img
                className="h-10 w-auto transform transition-transform group-hover:scale-110"
                src="/logo.png"
                alt="MindYou"
              />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">MindYou</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-3 pt-1 text-sm font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === item.href
                    ? 'text-violet-600 border-b-2 border-violet-500 scale-105'
                    : 'text-gray-600 hover:text-teal-600 hover:border-teal-300 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/book-session"
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-violet-600 to-teal-500 hover:from-violet-700 hover:to-teal-600 transform transition-all hover:scale-105 hover:shadow-lg"
            >
              Book Session
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-violet-500 hover:text-teal-600 hover:bg-violet-50 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 transform transition-transform hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 transform transition-transform hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block pl-3 pr-4 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-indigo-700 bg-indigo-50 border-l-4 border-indigo-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book-session"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 mx-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Book Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
