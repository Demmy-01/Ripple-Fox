import { useRef, useEffect } from 'react';

interface DotConfig {
  size: number;
  x: number;
  y: number;
  floatClass: 'dot-float-a' | 'dot-float-b';
  delay: string;
  opacity: number;
}

interface FloatingDotsProps {
  color: 'white' | 'blue';
  dots?: DotConfig[];
}

const WHITE_DOTS: DotConfig[] = [
  { size: 7,  x: 5,  y: 18, floatClass: 'dot-float-a', delay: '0s',   opacity: 0.22 },
  { size: 11, x: 17, y: 72, floatClass: 'dot-float-b', delay: '1.1s', opacity: 0.15 },
  { size: 5,  x: 50, y: 8,  floatClass: 'dot-float-a', delay: '0.6s', opacity: 0.18 },
  { size: 13, x: 76, y: 82, floatClass: 'dot-float-b', delay: '1.9s', opacity: 0.12 },
  { size: 8,  x: 90, y: 32, floatClass: 'dot-float-a', delay: '0.3s', opacity: 0.20 },
  { size: 5,  x: 94, y: 62, floatClass: 'dot-float-b', delay: '2.2s', opacity: 0.16 },
  { size: 9,  x: 34, y: 88, floatClass: 'dot-float-a', delay: '1.4s', opacity: 0.14 },
];

const BLUE_DOTS: DotConfig[] = [
  { size: 8,  x: 4,  y: 20, floatClass: 'dot-float-a', delay: '0s',   opacity: 0.20 },
  { size: 12, x: 16, y: 68, floatClass: 'dot-float-b', delay: '0.9s', opacity: 0.12 },
  { size: 6,  x: 52, y: 10, floatClass: 'dot-float-a', delay: '0.5s', opacity: 0.16 },
  { size: 14, x: 80, y: 78, floatClass: 'dot-float-b', delay: '1.8s', opacity: 0.10 },
  { size: 7,  x: 88, y: 28, floatClass: 'dot-float-a', delay: '1.0s', opacity: 0.18 },
  { size: 5,  x: 92, y: 58, floatClass: 'dot-float-b', delay: '2.3s', opacity: 0.14 },
  { size: 10, x: 38, y: 85, floatClass: 'dot-float-a', delay: '1.5s', opacity: 0.13 },
];

/** Drop-in floating dots with cursor parallax. Wrap your section in `position: relative; overflow: hidden`. */
export default function FloatingDots({ color, dots }: FloatingDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const resolved = dots ?? (color === 'white' ? WHITE_DOTS : BLUE_DOTS);
  const fill = color === 'white' ? '#ffffff' : '#1F4E79';

  useEffect(() => {
    const section = containerRef.current?.parentElement;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const cx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      const cy = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const speed = 0.01 + i * 0.003;
        dot.style.transform = `translate(${cx * speed * 80}px, ${cy * speed * 80}px)`;
      });
    };
    const handleMouseLeave = () => {
      dotRefs.current.forEach(dot => { if (dot) dot.style.transform = 'translate(0,0)'; });
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {resolved.map((d, i) => (
        <span
          key={i}
          ref={el => { dotRefs.current[i] = el; }}
          className={d.floatClass}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            borderRadius: '50%',
            background: fill,
            opacity: d.opacity,
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            boxShadow: `0 0 ${d.size * 3}px ${fill}66`,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
