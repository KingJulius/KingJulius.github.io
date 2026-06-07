'use client';

import { useEffect, useRef } from 'react';

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  hue: number;
}

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const stars: ShootingStar[] = [];
    let lastSpawn = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function spawnStar() {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      stars.push({
        x: Math.random() * canvas!.width * 0.5 - 100,
        y: Math.random() * canvas!.height * 0.5 - 100,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3,
        opacity: 1,
        angle,
        hue: Math.random() * 60 + 200,
      });
    }

    function animate(timestamp: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastSpawn > Math.random() * 1500 + 500) {
        spawnStar();
        lastSpawn = timestamp;
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        const dx = Math.cos(star.angle) * star.speed;
        const dy = Math.sin(star.angle) * star.speed;

        star.x += dx;
        star.y += dy;
        star.opacity -= 0.005;

        if (star.opacity <= 0 || star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          stars.splice(i, 1);
          continue;
        }

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, `hsla(${star.hue}, 80%, 80%, 0)`);
        gradient.addColorStop(1, `hsla(${star.hue}, 80%, 90%, ${star.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 80%, 95%, ${star.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
    />
  );
}
