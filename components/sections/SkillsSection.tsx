'use client';

import { skillCategories } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Code,
  LayoutDashboard,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
  Compass,
  type LucideIcon,
} from 'lucide-react';

/* ── Icon map ── */
const iconMap: Record<string, LucideIcon> = {
  code: Code,
  layout: LayoutDashboard,
  server: Server,
  database: Database,
  brain: BrainCircuit,
  cloud: Cloud,
  wrench: Wrench,
  compass: Compass,
};

/* ── Per-accent color tokens ── */
const accentStyles: Record<
  string,
  {
    gradient: string;
    iconBg: string;
    iconText: string;
    pillBg: string;
    pillText: string;
    pillBorder: string;
    pillHover: string;
    glow: string;
  }
> = {
  blue: {
    gradient: 'from-blue-500 to-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-500/15',
    iconText: 'text-blue-600 dark:text-blue-400',
    pillBg: 'bg-blue-50/80 dark:bg-blue-500/10',
    pillText: 'text-blue-700 dark:text-blue-300',
    pillBorder: 'border-blue-200/60 dark:border-blue-500/20',
    pillHover: 'hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:border-blue-300/80 dark:hover:border-blue-400/30',
    glow: 'group-hover:shadow-blue-500/5 dark:group-hover:shadow-blue-500/10',
  },
  violet: {
    gradient: 'from-violet-500 to-purple-400',
    iconBg: 'bg-violet-100 dark:bg-violet-500/15',
    iconText: 'text-violet-600 dark:text-violet-400',
    pillBg: 'bg-violet-50/80 dark:bg-violet-500/10',
    pillText: 'text-violet-700 dark:text-violet-300',
    pillBorder: 'border-violet-200/60 dark:border-violet-500/20',
    pillHover: 'hover:bg-violet-100 dark:hover:bg-violet-500/20 hover:border-violet-300/80 dark:hover:border-violet-400/30',
    glow: 'group-hover:shadow-violet-500/5 dark:group-hover:shadow-violet-500/10',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-400',
    iconBg: 'bg-emerald-100 dark:bg-emerald-500/15',
    iconText: 'text-emerald-600 dark:text-emerald-400',
    pillBg: 'bg-emerald-50/80 dark:bg-emerald-500/10',
    pillText: 'text-emerald-700 dark:text-emerald-300',
    pillBorder: 'border-emerald-200/60 dark:border-emerald-500/20',
    pillHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:border-emerald-300/80 dark:hover:border-emerald-400/30',
    glow: 'group-hover:shadow-emerald-500/5 dark:group-hover:shadow-emerald-500/10',
  },
  amber: {
    gradient: 'from-amber-500 to-orange-400',
    iconBg: 'bg-amber-100 dark:bg-amber-500/15',
    iconText: 'text-amber-600 dark:text-amber-400',
    pillBg: 'bg-amber-50/80 dark:bg-amber-500/10',
    pillText: 'text-amber-700 dark:text-amber-300',
    pillBorder: 'border-amber-200/60 dark:border-amber-500/20',
    pillHover: 'hover:bg-amber-100 dark:hover:bg-amber-500/20 hover:border-amber-300/80 dark:hover:border-amber-400/30',
    glow: 'group-hover:shadow-amber-500/5 dark:group-hover:shadow-amber-500/10',
  },
  rose: {
    gradient: 'from-rose-500 to-pink-400',
    iconBg: 'bg-rose-100 dark:bg-rose-500/15',
    iconText: 'text-rose-600 dark:text-rose-400',
    pillBg: 'bg-rose-50/80 dark:bg-rose-500/10',
    pillText: 'text-rose-700 dark:text-rose-300',
    pillBorder: 'border-rose-200/60 dark:border-rose-500/20',
    pillHover: 'hover:bg-rose-100 dark:hover:bg-rose-500/20 hover:border-rose-300/80 dark:hover:border-rose-400/30',
    glow: 'group-hover:shadow-rose-500/5 dark:group-hover:shadow-rose-500/10',
  },
  cyan: {
    gradient: 'from-cyan-500 to-teal-400',
    iconBg: 'bg-cyan-100 dark:bg-cyan-500/15',
    iconText: 'text-cyan-600 dark:text-cyan-400',
    pillBg: 'bg-cyan-50/80 dark:bg-cyan-500/10',
    pillText: 'text-cyan-700 dark:text-cyan-300',
    pillBorder: 'border-cyan-200/60 dark:border-cyan-500/20',
    pillHover: 'hover:bg-cyan-100 dark:hover:bg-cyan-500/20 hover:border-cyan-300/80 dark:hover:border-cyan-400/30',
    glow: 'group-hover:shadow-cyan-500/5 dark:group-hover:shadow-cyan-500/10',
  },
  slate: {
    gradient: 'from-slate-500 to-slate-400',
    iconBg: 'bg-slate-100 dark:bg-slate-500/15',
    iconText: 'text-slate-600 dark:text-slate-400',
    pillBg: 'bg-slate-50/80 dark:bg-slate-500/10',
    pillText: 'text-slate-700 dark:text-slate-300',
    pillBorder: 'border-slate-200/60 dark:border-slate-500/20',
    pillHover: 'hover:bg-slate-200/80 dark:hover:bg-slate-500/20 hover:border-slate-300/80 dark:hover:border-slate-400/30',
    glow: 'group-hover:shadow-slate-500/5 dark:group-hover:shadow-slate-500/10',
  },
  indigo: {
    gradient: 'from-indigo-500 to-purple-500',
    iconBg: 'bg-indigo-100 dark:bg-indigo-500/15',
    iconText: 'text-indigo-600 dark:text-indigo-400',
    pillBg: 'bg-indigo-50/80 dark:bg-indigo-500/10',
    pillText: 'text-indigo-700 dark:text-indigo-300',
    pillBorder: 'border-indigo-200/60 dark:border-indigo-500/20',
    pillHover: 'hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:border-indigo-300/80 dark:hover:border-indigo-400/30',
    glow: 'group-hover:shadow-indigo-500/5 dark:group-hover:shadow-indigo-500/10',
  },
};

/* ── Bento span map: larger categories get more visual weight ── */
const spanMap: Record<string, string> = {
  Languages: 'sm:col-span-2 lg:col-span-2',
  Frontend: 'sm:col-span-2 lg:col-span-2',
  Backend: 'sm:col-span-1 lg:col-span-1',
  Databases: 'sm:col-span-1 lg:col-span-1',
  'ML & AI': 'sm:col-span-1 lg:col-span-1',
  'DevOps & Cloud': 'sm:col-span-2 lg:col-span-4',
  Tools: 'sm:col-span-1 lg:col-span-1',
  'Engineering Craft': 'sm:col-span-2 lg:col-span-4',
};

export function SkillsSection() {
  return (
    <section id="skills" className="pt-28 pb-24 px-4 max-w-6xl mx-auto min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white"
      >
        <Sparkles className="inline-block mr-3 mb-1" size={28} />
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-5">
        {skillCategories.map((cat, index) => {
          const style = accentStyles[cat.accent] ?? accentStyles.blue;
          const Icon = iconMap[cat.icon] ?? Code;
          const span = spanMap[cat.category] ?? '';

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn('group', span)}
            >
              <div
                className={cn(
                  'relative h-full rounded-2xl overflow-hidden',
                  'bg-white/40 dark:bg-[rgba(15,15,25,0.85)]',
                  'backdrop-blur-xl',
                  'border border-white/60 dark:border-white/[0.08]',
                  'shadow-lg dark:shadow-2xl dark:shadow-black/40',
                  'transition-all duration-300',
                  'hover:bg-white/50 dark:hover:bg-[rgba(15,15,25,0.9)]',
                  'hover:border-white/70 dark:hover:border-white/[0.12]',
                  'hover:-translate-y-1 hover:shadow-xl',
                  style.glow
                )}
              >
                {/* Accent top bar */}
                <div
                  className={cn(
                    'h-1 w-full bg-gradient-to-r',
                    style.gradient
                  )}
                />

                <div className="p-6">
                  {/* Header: icon + category name + count */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={cn(
                        'flex items-center justify-center w-10 h-10 rounded-xl',
                        style.iconBg,
                        'transition-transform duration-300 group-hover:scale-110'
                      )}
                    >
                      <Icon size={20} className={style.iconText} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                      </p>
                    </div>
                  </div>

                  {/* Skill pills */}
                  <ul
                    aria-label={`${cat.category} skills`}
                    className="flex flex-wrap gap-2 list-none"
                  >
                    {cat.skills.map((skill, i) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08 + i * 0.04,
                        }}
                        className={cn(
                          'px-3 py-1.5 text-sm font-medium rounded-lg border',
                          'transition-all duration-200 cursor-default',
                          'hover:scale-105',
                          style.pillBg,
                          style.pillText,
                          style.pillBorder,
                          style.pillHover
                        )}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
