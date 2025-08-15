import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Enhanced star color palette for sparkles
const STAR_COLORS = [
  '#FF6B00', // vivid orange
  '#FF4500', // orange red
  '#FF8000', // bright orange
  '#FF7518', // pumpkin
  '#FF5F1F', // bright red-orange
  '#FF7F50', // coral
  '#FF8C42'  // deep orange
];

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function SparklingStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const stars = useRef<Array<any>>([]);
  const STAR_COUNT = 180; // slightly fewer but more visible stars
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState<Array<any>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    function resize() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      const w = Math.max(1, Math.floor(window.innerWidth));
      const h = Math.max(1, Math.floor(window.innerHeight));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Generate stars with sparkle property
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      r: randomBetween(2.0, 5.0),
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      twinkle: randomBetween(1.0, 2.5),
      phase: Math.random() * Math.PI * 2,
      sparkle: Math.random() < 0.4, // 40% chance to be a sparkly star
    }));

    setDots(stars.current);

    function draw() {
      if (!canvas || !ctx) return;
      const vw = canvas.width / (dpr || 1);
      const vh = canvas.height / (dpr || 1);
      ctx.clearRect(0, 0, vw, vh);

      // Draw stars with enhanced sparkle effect
      ctx.globalCompositeOperation = 'lighter';
      for (const star of stars.current) {
        const time = Date.now() * 0.001;
        const twinkle = 0.8 + 0.6 * Math.sin(time * star.twinkle + star.phase);
        const sparkle = star.sparkle ? 
          0.4 * Math.sin(time * 8 + star.phase) * Math.sin(time * 5 + star.phase) : 0;
        const alpha = Math.min(1, (twinkle + sparkle) * 0.95);
        
        ctx.beginPath();
        const r = Math.max(1.8, star.r * (star.sparkle ? 2.8 : 2.4));
        ctx.arc(star.x, star.y, r, 0, 2 * Math.PI);
        ctx.fillStyle = hexToRgba(star.color, alpha);
        ctx.shadowColor = hexToRgba(star.color, alpha);
        ctx.shadowBlur = star.sparkle ? 18 : 14;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enhanced sparkle animations for dots
  useEffect(() => {
    (async () => {
      try {
        const motion = await import('motion');
        const { createTimeline, stagger } = motion as any;
        
        const options = {
          grid: [13, 13],
          from: 'center',
        };

        const tl = createTimeline();
        tl.add('.dot', {
          scale: stagger([1.1, 0.75], options),
          ease: 'inOutQuad',
        }, stagger(0.2, options));
      } catch (e) {
        console.warn('motion animation failed', e);
      }
    })();
  }, [dots]);

  const canvasElement = (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -2,
        background: 'transparent',
      }}
    />
  );

  const dotsElement = (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1 }}
    >
      <style>{`
        .dot { 
          transition: transform 0.3s ease, opacity 0.3s ease;
          mix-blend-mode: screen;
        }
        .dot-sparkle {
          animation: dotSparkle 3s infinite ease-in-out;
        }
        .dot-fallback {
          animation: dotTwinkle 2.4s infinite ease-in-out;
        }
        @keyframes dotSparkle {
          0% { transform: scale(1) rotate(0deg); opacity: 1; filter: brightness(1.2); }
          25% { transform: scale(1.3) rotate(90deg); opacity: 1; filter: brightness(1.5); }
          50% { transform: scale(0.9) rotate(180deg); opacity: 0.8; filter: brightness(1.1); }
          75% { transform: scale(1.2) rotate(270deg); opacity: 1; filter: brightness(1.6); }
          100% { transform: scale(1) rotate(360deg); opacity: 1; filter: brightness(1.2); }
        }
        @keyframes dotTwinkle {
          0% { transform: scale(1) rotate(0deg); opacity: 1; filter: brightness(1.1); }
          50% { transform: scale(0.8) rotate(180deg); opacity: 0.8; filter: brightness(1.3); }
          100% { transform: scale(1) rotate(360deg); opacity: 1; filter: brightness(1.1); }
        }
      `}</style>
      {dots.map((d, i) => (
        <div
          key={i}
          className={`dot ${d.sparkle ? 'dot-sparkle' : 'dot-fallback'}`}
          style={{
            position: 'absolute',
            left: d.x,
            top: d.y,
            width: Math.max(16, d.r * (d.sparkle ? 12 : 10)),
            height: Math.max(16, d.r * (d.sparkle ? 12 : 10)),
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, 
              ${d.color} 0%, 
              ${hexToRgba(d.color, 1)} 25%, 
              ${hexToRgba(d.color, 0.8)} 50%, 
              ${hexToRgba(d.color, 0.4)} 75%,
              rgba(0,0,0,0) 100%
            )`,
            border: `2px solid ${hexToRgba(d.color, 1)}`,
            boxShadow: `
              0 0 ${Math.max(20, d.r * 15)}px ${hexToRgba(d.color, 0.9)},
              0 0 ${Math.max(10, d.r * 8)}px ${hexToRgba(d.color, 1)} inset,
              0 0 30px ${hexToRgba(d.color, 0.8)}
            `,
            opacity: 1,
            transform: 'translate(-50%, -50%)',
            transformOrigin: 'center',
            willChange: 'transform, opacity',
            animationDelay: `${(i % 24) * 0.08}s`,
          }}
        />
      ))}
    </div>
  );

  if (!mounted) return null;
  return createPortal(
    <>
      {canvasElement}
      {dotsElement}
    </>,
    document.body
  );
}
