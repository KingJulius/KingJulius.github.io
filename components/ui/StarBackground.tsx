'use client';

import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: string;
  animationDuration: string;
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white dark:bg-white animate-twinkle opacity-0 dark:opacity-100 transition-opacity duration-500"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
