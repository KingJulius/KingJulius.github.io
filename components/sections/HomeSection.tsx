'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { profileTitles, profileInfo } from '@/lib/data';
import { Highlight } from '@/components/ui/hero-highlight';
import { FileText, Sparkles, Code, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* Animated counter */
/**
 * Avatar + role card. Shared by mobile (rendered inline under the tagline)
 * and desktop (rendered as the first item of the right column). Size and
 * text scale via the `compact` variant.
 */
function CurrentlyCard({
  compact = false,
  withHover = true,
}: {
  compact?: boolean;
  withHover?: boolean;
}) {
  const avatar = compact ? 'w-16 h-16' : 'w-24 h-24 sm:w-28 sm:h-28';
  const avatarPx = compact ? 64 : 112;
  const padding = compact ? 'p-4' : 'p-3 sm:p-5';
  const gap = compact ? 'gap-4' : 'gap-3 sm:gap-5';
  const text = compact ? 'text-base' : 'text-sm sm:text-lg';
  const hover = withHover
    ? 'group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/20 hover:border-gray-300/60 dark:hover:border-white/[0.1]'
    : '';
  return (
    <div
      className={`flex items-center ${gap} rounded-2xl ${padding} bg-gray-100/60 dark:bg-white/[0.04] border border-gray-200/40 dark:border-white/[0.06] ${hover}`}
    >
      <div className={`relative shrink-0 ${avatar}`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] blur-sm opacity-50" />
        <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
          <Image
            src="/me.png"
            alt="Julius Dsouza"
            width={avatarPx}
            height={avatarPx}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      <p className={`${text} font-bold text-gray-900 dark:text-white leading-tight flex-1`}>
        {profileInfo.currentRole}
      </p>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      motionVal.set(value);
      if (ref.current) ref.current.textContent = String(value);
      return;
    }
    const controls = animate(motionVal, value, { duration: 2, ease: 'easeOut' });
    return () => controls.stop();
  }, [motionVal, value, reduceMotion]);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref} aria-hidden="true">0</span>;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stats = [
  { value: 5, suffix: '+', label: 'Years Exp.' },
  { value: 7, suffix: '+', label: 'Companies' },
  { value: 10, suffix: '+', label: 'Technologies' },
];

export function HomeSection() {
  return (
    <section id="home" className="h-[100dvh] md:h-auto md:min-h-screen flex items-stretch md:items-center justify-center px-4 pt-4 pb-24 sm:pt-6 md:py-28 overflow-hidden md:overflow-visible">
      <GlassCard className="max-w-6xl w-full flex flex-col overflow-y-auto md:overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center flex-1">

        {/* ── Left column: content ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col justify-between h-full gap-y-2 sm:gap-y-6"
        >
          {/* Title pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-6">
            {profileTitles.map((title) => (
              <span
                key={title.label}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-1.5 text-sm font-semibold rounded-full border ${title.color}`}
              >
                {title.label}
              </span>
            ))}
          </motion.div>

          {/* Name + tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-[1.15] text-gray-900 dark:text-white"
          >
            {profileInfo.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6 leading-snug text-gray-700 dark:text-gray-200"
          >
            {profileInfo.taglineParts.lead}{' '}
            <Highlight className="text-gray-900 dark:text-white">
              {profileInfo.taglineParts.highlight}
            </Highlight>{' '}
            {profileInfo.taglineParts.trail}
          </motion.p>

          {/* Currently card — mobile only */}
          <motion.div variants={fadeUp} className="md:hidden mb-3">
            <CurrentlyCard compact withHover={false} />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mb-3 sm:mb-6 leading-relaxed max-w-xl"
          >
            {profileInfo.bio}
          </motion.p>

          {/* Stats row */}
          <motion.dl
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-3 mb-2 sm:mb-8"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div
                  className="text-center"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <dd className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    <AnimatedNumber value={stat.value} />
                    <span aria-hidden="true">{stat.suffix}</span>
                  </dd>
                  <dt className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {stat.label}
                  </dt>
                </div>
                {i < stats.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="h-8 w-px bg-gray-200 dark:bg-white/10"
                  />
                )}
              </div>
            ))}
          </motion.dl>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm bg-white dark:bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <FileText size={16} aria-hidden="true" />
              View Resume
            </a>
            <a
              href={`mailto:${profileInfo.social.email}`}
              className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Let&apos;s Collaborate
              <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">Find me</span>
            <div className="h-px flex-1 max-w-8 bg-gray-200 dark:bg-white/10" />
            <div className="flex items-center gap-2">
              <a
                href={profileInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 sm:p-2.5 rounded-xl bg-gray-200/50 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-900/90 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <GithubIcon />
              </a>
              <a
                href={profileInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 sm:p-2.5 rounded-xl bg-gray-200/50 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right column: info cards ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="hidden md:flex flex-col gap-3 sm:gap-4"
        >
          {/* Currently at */}
          <motion.div variants={fadeLeft}>
            <CurrentlyCard />
          </motion.div>

          {/* Focus + Stack row */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <motion.div variants={fadeLeft}>
              <div className="group h-full rounded-2xl p-5 bg-gray-100/60 dark:bg-white/[0.04] border border-gray-200/40 dark:border-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/20 hover:border-gray-300/60 dark:hover:border-white/[0.1]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-500/15 transition-transform duration-300 group-hover:scale-110">
                    <Sparkles size={12} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Focus
                  </p>
                </div>
                <p className="text-base font-bold text-gray-900 dark:text-white mb-1.5 leading-tight">
                  {profileInfo.focus.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {profileInfo.focus.description}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeLeft}>
              <div className="group h-full rounded-2xl p-5 bg-gray-100/60 dark:bg-white/[0.04] border border-gray-200/40 dark:border-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/20 hover:border-gray-300/60 dark:hover:border-white/[0.1]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 transition-transform duration-300 group-hover:scale-110">
                    <Code size={12} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Stack
                  </p>
                </div>
                <p className="text-base font-bold text-gray-900 dark:text-white mb-1.5 leading-tight">
                  {profileInfo.stack.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {profileInfo.stack.description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Open-to callout */}
          <motion.div variants={fadeLeft} className="hidden md:block">
            <div className="group rounded-2xl p-5 bg-indigo-50/50 dark:bg-indigo-500/[0.06] border border-indigo-200/40 dark:border-indigo-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/20 hover:border-indigo-300/60 dark:hover:border-indigo-400/20">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 shrink-0 mt-0.5">
                  <MessageCircle size={12} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {profileInfo.openTo}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </GlassCard>
    </section>
  );
}
