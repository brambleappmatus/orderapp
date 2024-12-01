'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { ShoppingCartIcon, Cog6ToothIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import CartSummary from '../Cart/CartSummary';

export default function SideMenu() {
  const pathname = usePathname();
  const isAdmin = pathname === '/admin';

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-zinc-800 shadow-lg transition-all duration-300 border-r border-gray-200 dark:border-zinc-700">
      <div className="p-4 flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex items-center mb-8">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-zinc-300" />
            <span className="ml-2 font-semibold text-gray-800 dark:text-zinc-100">
              Shopping Cart
            </span>
          </div>
          <CartSummary />
        </div>
        
        <div className="space-y-2">
          {isAdmin ? (
            <Link 
              href="/"
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-zinc-700/50 text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              <span>Back to Shop</span>
            </Link>
          ) : (
            <Link 
              href="/admin"
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-zinc-700/50 text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Cog6ToothIcon className="h-5 w-5" />
              <span>Admin Panel</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}