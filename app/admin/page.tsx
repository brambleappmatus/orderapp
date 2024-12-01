'use client';

import React, { useState } from 'react';
import ProductForm from '@/components/Admin/ProductForm';
import LoginForm from '@/components/Admin/LoginForm';
import { useStore } from '@/store/useStore';
import { Product } from '@/types/product';
import Image from 'next/image';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { handleImageError } from '@/utils/imageLoader';

export default function AdminPage() {
  const { products, deleteProduct, isAdminAuthenticated, setAdminAuthenticated } = useStore();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageLoadError = (productId: string) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  if (!isAdminAuthenticated) {
    return <LoginForm onLogin={() => setAdminAuthenticated(true)} />;
  }

  return (
    <div className="p-8 bg-white dark:bg-zinc-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-zinc-100">Admin Panel</h1>
        <button
          onClick={() => setAdminAuthenticated(false)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-zinc-100">
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <ProductForm 
          editingProduct={editingProduct} 
          onComplete={() => setEditingProduct(null)}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-zinc-100">Current Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                {imageErrors[product.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700">
                    <span className="text-gray-400 dark:text-zinc-500">Image not available</span>
                  </div>
                ) : (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    onError={() => handleImageLoadError(product.id)}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-zinc-100">{product.name}</h3>
                <p className="text-gray-600 dark:text-zinc-300">€{product.price.toFixed(2)}</p>
                <p className="text-gray-500 dark:text-zinc-400 text-sm mt-2">{product.description}</p>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}