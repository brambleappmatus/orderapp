import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-200">
        {label}
      </label>
      <textarea
        className={`w-full p-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-100 ${className}`}
        {...props}
      />
    </div>
  );
}