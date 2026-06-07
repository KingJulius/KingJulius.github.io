'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative flex items-center w-14 h-7 rounded-full px-1 transition-colors duration-300
        ${isDark ? 'bg-indigo-600' : 'bg-amber-400'}
      `}
      aria-label="Toggle theme"
    >
      <span
        className={`
          absolute w-5 h-5 rounded-full bg-white flex items-center justify-center
          shadow-md transition-transform duration-300
          ${isDark ? 'translate-x-7' : 'translate-x-0'}
        `}
      >
        {isDark ? (
          <Moon size={11} className="text-indigo-600" />
        ) : (
          <Sun size={11} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
