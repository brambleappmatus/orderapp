'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useStore } from '@/store/useStore';

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors z-50"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-zinc-600" />
      )}
    </button>
  );
}