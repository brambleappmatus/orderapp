'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-md cursor-pointer border border-gray-200 dark:border-zinc-700 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] transform-gpu"
    >
      <div className="product-image-container">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700">
            <span className="text-gray-400 dark:text-zinc-500">Image not available</span>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-zinc-100">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-zinc-300">
          €{product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}