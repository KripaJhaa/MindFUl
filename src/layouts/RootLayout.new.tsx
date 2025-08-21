import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import SparklingStarfield from '../components/SparklingStarfield';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Counselors', href: '/counselors' },
  { name: 'Features', href: '/features' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-transparent">
      <SparklingStarfield />
      <Disclosure as="nav" className="bg-white shadow z-10 relative">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/" className="text-xl font-bold text-indigo-600">
                      MindYou
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Link
                          to={item.href}
                          className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-indigo-600 relative group"
                        >
                          {item.name}
                          <motion.div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full"
                            transition={{ duration: 0.2 }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <Link
                    to="/login"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Login
                  </Link>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="mt-4 px-4">
                  <Link
                    to="/login"
                    className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="relative z-10">
        <Outlet />
      </main>

      <footer className="bg-white mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mt-8 border-t border-gray-100 pt-8">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} MindYou. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
