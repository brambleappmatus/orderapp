import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon: React.ReactNode;
  label: string;
}

export default function IconButton({ variant = 'primary', icon, label, className = '', ...props }: IconButtonProps) {
  const baseStyles = 'p-2 rounded-lg transition-colors';
  
  const variants = {
    primary: 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-zinc-700',
    secondary: 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-zinc-700',
    danger: 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-zinc-700',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}