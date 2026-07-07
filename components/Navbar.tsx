'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Skills', href: '/skills', icon: Sparkles },
];

export function Navbar() {
  const rawPathname = usePathname();
  // With `trailingSlash: true` (static export), prod paths arrive as
  // "/experience/" — strip the slash so they match the nav hrefs.
  const pathname =
    rawPathname !== '/' && rawPathname?.endsWith('/')
      ? rawPathname.slice(0, -1)
      : rawPathname;

  return (
    <>
      {/* ── Desktop navbar: top-center floating pill ── */}
      <nav className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3">
          {/* Centered nav pill */}
          <div
            className={cn(
              'flex items-center gap-1 px-2 py-2 rounded-full',
              'bg-white/60 dark:bg-white/[0.07]',
              'backdrop-blur-xl',
              'border border-gray-200/60 dark:border-white/[0.08]',
              'shadow-lg shadow-black/5 dark:shadow-black/30'
            )}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                  pathname === href
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                {pathname === href && (
                  <motion.span
                    layoutId="desktop-active-pill"
                    className="absolute inset-0 rounded-full bg-white dark:bg-white/15 shadow-sm dark:shadow-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            ))}
          </div>

          {/* Theme toggle – separate pill to the right */}
          <div
            className={cn(
              'flex items-center px-2 py-2 rounded-full',
              'bg-white/60 dark:bg-white/[0.07]',
              'backdrop-blur-xl',
              'border border-gray-200/60 dark:border-white/[0.08]',
              'shadow-lg shadow-black/5 dark:shadow-black/30'
            )}
          >
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── Mobile navbar: bottom floating pill ── */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'flex items-center gap-1 px-2 py-2 rounded-full',
              'bg-white/70 dark:bg-white/[0.07]',
              'backdrop-blur-xl',
              'border border-gray-200/60 dark:border-white/[0.08]',
              'shadow-lg shadow-black/10 dark:shadow-black/40'
            )}
          >
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'relative flex items-center gap-1.5 rounded-full text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'px-4 py-2 text-gray-900 dark:text-white'
                      : 'px-4 py-2 text-gray-500 dark:text-gray-400'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active-pill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-white/15 shadow-sm dark:shadow-none"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon size={16} />
                    {isActive && <span>{label}</span>}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Theme toggle pill */}
          <div
            className={cn(
              'flex items-center px-2 py-2 rounded-full',
              'bg-white/70 dark:bg-white/[0.07]',
              'backdrop-blur-xl',
              'border border-gray-200/60 dark:border-white/[0.08]',
              'shadow-lg shadow-black/10 dark:shadow-black/40'
            )}
          >
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
