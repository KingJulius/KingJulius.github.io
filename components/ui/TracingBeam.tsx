'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    // Initial measurement
    setSvgHeight(node.offsetHeight);
    // Track size changes: font loads, animations expanding content, viewport resize.
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const next = entry.contentRect.height;
        setSvgHeight((prev) => (Math.abs(prev - next) > 0.5 ? next : prev));
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reactive style values for the dot so it reflects scroll position.
  // (Using `animate={{...}}` with scrollYProgress.get() captures only the
  //  render-time snapshot — the dot would stay frozen on initial state.)
  const dotBackground = useTransform(scrollYProgress, (p) =>
    p > 0 ? '#ffffff' : '#10b981'
  );
  const dotBorder = useTransform(scrollYProgress, (p) =>
    p > 0 ? '#ffffff' : '#059669'
  );
  const ringShadow = useMotionTemplate`rgba(0, 0, 0, ${useTransform(
    scrollYProgress,
    (p) => (p > 0 ? 0 : 0.24)
  )}) 0px 3px 8px`;

  // y1 = leading edge (bottom of gradient band)
  // y2 = trailing edge (top of gradient band)
  // ~350px gap creates a gradient band matching the Aceternity reference
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, svgHeight - 350]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  // The original Aceternity zigzag path:
  // Starts at x=1, goes up, zigzags to x=19, straight down for 80%,
  // zigzags back to x=1, then down to bottom
  const beamPath = `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`;

  return (
    <motion.div
      ref={ref}
      className={cn('relative mx-auto h-full w-full max-w-4xl', className)}
    >
      {/* Beam column */}
      <div className="absolute top-3 left-[1px]">
        {/* Dot — aligned with the beam path start (x=1 in the SVG → ml aligns center) */}
        <motion.div
          style={{ boxShadow: ringShadow }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700"
        >
          <motion.div
            style={{ backgroundColor: dotBackground, borderColor: dotBorder }}
            className="h-2 w-2 rounded-full border"
          />
        </motion.div>
        {/* SVG beam with zigzag path matching Aceternity reference */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Base track — faint gray */}
          <motion.path
            d={beamPath}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          />
          {/* Gradient overlay — animated colored beam */}
          <motion.path
            d={beamPath}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      {/* Content — offset to make room for beam */}
      <div ref={contentRef} className="pl-14">
        {children}
      </div>
    </motion.div>
  );
};
