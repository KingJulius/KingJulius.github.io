import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 sm:p-6',
        'bg-white/40 dark:bg-[rgba(15,15,25,0.85)]',
        'backdrop-blur-xl',
        'border border-white/60 dark:border-white/[0.08]',
        'shadow-lg dark:shadow-2xl dark:shadow-black/40',
        'transition-all duration-300',
        'hover:bg-white/50 dark:hover:bg-[rgba(15,15,25,0.9)]',
        'hover:border-white/70 dark:hover:border-white/[0.12]',
        className
      )}
    >
      {children}
    </div>
  );
}
