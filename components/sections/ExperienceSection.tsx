'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { TracingBeam } from '@/components/ui/TracingBeam';
import { experiences, education, type Experience, type Education } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

/* Discriminated union so a single sorted timeline can render either card type. */
type TimelineItem =
  | { kind: 'experience'; data: Experience }
  | { kind: 'education'; data: Education };

/* "Jul 2024 – Present" → 202407 (sortable integer keyed off start month/year). */
function periodStartKey(period: string): number {
  const match = period.match(/([A-Za-z]+)\s+(\d{4})/);
  if (!match) return 0;
  const months: Record<string, number> = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
  };
  const mm = months[match[1].slice(0, 3)] ?? 0;
  return parseInt(match[2], 10) * 100 + mm;
}

const eduAvatarColors = [
  'from-amber-500 to-rose-600',
  'from-teal-500 to-cyan-600',
  'from-fuchsia-500 to-purple-600',
];

/* Parse "Jul 2024 – Present" → "2024-07" for the <time dateTime> attr (start month only). */
function periodToDateTime(period: string): string | undefined {
  const match = period.match(/([A-Za-z]+)\s+(\d{4})/);
  if (!match) return undefined;
  const months: Record<string, string> = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
  };
  const mm = months[match[1].slice(0, 3)];
  return mm ? `${match[2]}-${mm}` : undefined;
}

/* Deterministic color for company avatar based on name */
const avatarColors = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-blue-600',
  'from-fuchsia-500 to-purple-600',
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/* Merge experiences + education into one chronologically sorted list
   (most recent start date first). Memo-safe: derived at module load,
   since both source arrays are static. */
const timeline: TimelineItem[] = [
  ...experiences.map<TimelineItem>((data) => ({ kind: 'experience', data })),
  ...education.map<TimelineItem>((data) => ({ kind: 'education', data })),
].sort((a, b) => periodStartKey(b.data.period) - periodStartKey(a.data.period));

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-28 pb-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
      >
        <Briefcase className="inline-block mr-3 mb-1" size={28} />
        Experience
      </motion.h2>

      <TracingBeam className="px-6">
        <ol className="max-w-2xl mx-auto relative list-none">
          {timeline.map((item, index) => {
            if (item.kind === 'education') {
              const edu = item.data;
              const eduIndex = education.indexOf(edu);
              const eduDateTime = periodToDateTime(edu.period);
              return (
                <motion.li
                  key={`edu-${edu.school}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="mb-8 last:mb-0"
                >
                  <GlassCard className="bg-amber-50/40 dark:bg-amber-500/[0.04] border-amber-200/40 dark:border-amber-500/[0.12]">
                    <div className="flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className={cn(
                          'shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white text-sm font-bold shadow-md',
                          eduAvatarColors[eduIndex % eduAvatarColors.length]
                        )}
                      >
                        {getInitials(edu.school)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                              {edu.school}
                            </h3>
                            <p className="text-sm text-amber-700 dark:text-amber-300 font-medium mt-0.5">
                              {edu.degree}
                            </p>
                          </div>
                          <time
                            dateTime={eduDateTime}
                            className="inline-flex items-center justify-center self-start text-xs leading-none text-gray-500 dark:text-gray-400 whitespace-nowrap font-medium bg-gray-100/80 dark:bg-white/[0.07] px-2.5 py-1.5 rounded-full border border-gray-200/50 dark:border-white/[0.06]"
                          >
                            {edu.period}
                          </time>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.li>
              );
            }

            const exp = item.data;
            const expIndex = experiences.indexOf(exp);
            const isCurrent = exp.period.includes('Present');
            const dateTime = periodToDateTime(exp.period);

            return (
              <motion.li
                key={`exp-${exp.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="mb-8 last:mb-0"
              >
                <GlassCard
                  className={cn(
                    isCurrent &&
                      'ring-1 ring-indigo-500/30 dark:ring-indigo-400/20'
                  )}
                >
                  {/* Header row */}
                  <div className="flex gap-4 mb-4">
                    {/* Company avatar */}
                    <div
                      className={cn(
                        'shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white text-sm font-bold shadow-md',
                        avatarColors[expIndex % avatarColors.length]
                      )}
                    >
                      {getInitials(exp.company)}
                    </div>

                    {/* Role + company info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                              {exp.role}
                            </h3>
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                            {exp.company} &middot; {exp.location}
                          </p>
                        </div>
                        <time
                          dateTime={dateTime}
                          className="inline-flex items-center justify-center self-start text-xs leading-none text-gray-500 dark:text-gray-400 whitespace-nowrap font-medium bg-gray-100/80 dark:bg-white/[0.07] px-2.5 py-1.5 rounded-full border border-gray-200/50 dark:border-white/[0.06]"
                        >
                          {exp.period}
                        </time>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4 text-gray-600 dark:text-gray-300 ml-[60px]">
                    {exp.description.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[15px]">
                        <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <ul
                    aria-label={`Tech stack at ${exp.company}`}
                    className="flex flex-wrap gap-2 ml-[60px] list-none"
                  >
                    {exp.tech.map((t) => (
                      <li
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-50/80 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:border-indigo-300/80 dark:hover:border-indigo-400/30 transition-colors duration-200"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.li>
            );
          })}
        </ol>
      </TracingBeam>
    </section>
  );
}
