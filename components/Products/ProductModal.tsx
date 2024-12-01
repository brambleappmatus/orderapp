import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useStore } from '@/store/useStore';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useStore();
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-800 rounded-lg max-w-lg w-full">
        <div className="relative h-64">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700 rounded-t-lg">
              <span className="text-gray-400 dark:text-zinc-500">Image not available</span>
            </div>
          ) : (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-zinc-100">{product.name}</h2>
          <p className="text-gray-600 dark:text-zinc-300 mb-4">€{product.price.toFixed(2)}</p>
          <p className="mb-6 text-gray-700 dark:text-zinc-200">{product.description}</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700"
            >
              Close
            </button>
            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="px-4 py-2 bg-zinc-800 dark:bg-zinc-700 text-white rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}