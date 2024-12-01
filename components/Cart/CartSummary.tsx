'use client';

import React from 'react';
import { useStore } from '@/store/useStore';

export default function CartSummary() {
  const { cart, removeFromCart, updateCartItemQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-800 dark:text-white">{item.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">€{item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))}
              className="w-16 p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="pt-4 border-t dark:border-gray-700">
        <p className="font-semibold text-gray-800 dark:text-white">Total: €{total.toFixed(2)}</p>
      </div>
    </div>
  );
}