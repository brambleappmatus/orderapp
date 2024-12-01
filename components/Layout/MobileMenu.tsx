'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon, Bars3Icon, ShoppingCartIcon, Cog6ToothIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import CartSummary from '../Cart/CartSummary';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname === '/admin';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors z-30"
        aria-label="Open menu"
      >
        <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-zinc-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 border-r border-gray-200 dark:border-zinc-700 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 flex flex-col h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
          </button>

          <div className="mt-12 flex-grow">
            <div className="flex items-center mb-8">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
              <span className="ml-2 font-semibold text-gray-800 dark:text-zinc-100">
                Shopping Cart
              </span>
            </div>
            <CartSummary />
          </div>
          
          <div className="mt-4">
            {isAdmin ? (
              <Link 
                href="/"
                className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-zinc-700/50 text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBagIcon className="h-5 w-5" />
                <span>Back to Shop</span>
              </Link>
            ) : (
              <Link 
                href="/admin"
                className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-zinc-700/50 text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Cog6ToothIcon className="h-5 w-5" />
                <span>Admin Panel</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}