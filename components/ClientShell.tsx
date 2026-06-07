'use client';

import { useEffect, useState } from 'react';
import { StarBackground } from '@/components/ui/StarBackground';
import { ShootingStars } from '@/components/ui/ShootingStars';
import { Navbar } from '@/components/Navbar';

export function ClientShell({ children }: { children: React.ReactNode }) {
  // Compute on the client only — server TZ may give a different year on
  // New Year's Eve, which would cause a hydration mismatch in the footer.
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200 dark:from-[#0f0f1a] dark:via-[#0a0a12] dark:to-[#0d0d1f] overflow-hidden">
      {/* Light-mode animated gradient mesh orbs */}
      <div className="pointer-events-none absolute inset-0 dark:hidden overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-300/40 blur-3xl animate-[drift_18s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] -right-[5%] h-[500px] w-[500px] rounded-full bg-sky-300/40 blur-3xl animate-[drift_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-[10%] left-[20%] h-[550px] w-[550px] rounded-full bg-indigo-300/40 blur-3xl animate-[drift_20s_ease-in-out_infinite_2s]" />
        <div className="absolute top-[10%] left-[50%] h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-3xl animate-[drift_25s_ease-in-out_infinite_4s_reverse]" />
      </div>
      <StarBackground />
      <ShootingStars />
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>
            &copy; <span suppressHydrationWarning>{year ?? ''}</span> Julius Dsouza. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
