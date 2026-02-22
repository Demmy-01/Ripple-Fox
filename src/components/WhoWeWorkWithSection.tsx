import { useRef, useEffect } from 'react';
import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';
import { Settings, RadioTower, Landmark, Link, TrendingUp, ArrowRight } from 'lucide-react';

const WHITE_DOTS = [
  { size: 7,  x: 6,  y: 18, floatClass: 'dot-float-a', delay: '0s',   opacity: 0.22 },
  { size: 11, x: 18, y: 70, floatClass: 'dot-float-b', delay: '1.0s', opacity: 0.14 },
  { size: 5,  x: 48, y: 8,  floatClass: 'dot-float-a', delay: '0.6s', opacity: 0.18 },
  { size: 13, x: 78, y: 82, floatClass: 'dot-float-b', delay: '1.9s', opacity: 0.11 },
  { size: 8,  x: 90, y: 35, floatClass: 'dot-float-a', delay: '0.3s', opacity: 0.20 },
  { size: 5,  x: 95, y: 60, floatClass: 'dot-float-b', delay: '2.4s', opacity: 0.16 },
  { size: 9,  x: 35, y: 90, floatClass: 'dot-float-a', delay: '1.3s', opacity: 0.14 },
];

const clients = [
  {
    label: 'Infrastructure operators',
    icon: <Settings size={18} />,
  },
  {
    label: 'Telecom and infrastructure-intensive ecosystems',
    icon: <RadioTower size={18} />,
  },
  {
    label: 'Enterprise-wide digital and operational transformation programs',
    icon: <Landmark size={18} />,
  },
  {
    label: 'Multi-vendor deployment environments',
    icon: <Link size={18} />,
  },
  {
    label: 'Growth-stage organizations scaling complexity',
    icon: <TrendingUp size={18} />,
  },
];

export default function WhoWeWorkWithSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
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
    <section
      id="clients"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2137 0%, #1F4E79 60%, #163d61 100%)' }}
    >
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Floating white dots ── */}
      {WHITE_DOTS.map((d, i) => (
        <span
          key={i}
          ref={el => { dotRefs.current[i] = el; }}
          aria-hidden="true"
          className={d.floatClass}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: d.opacity,
            pointerEvents: 'none',
            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
            boxShadow: `0 0 ${d.size * 3}px rgba(255,255,255,0.4)`,
            animationDelay: d.delay,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-stretch lg:gap-16">

          {/* ── Left: image mosaic ── */}
          <div
            className="hidden lg:flex lg:w-[45%] flex-shrink-0 gap-3"
            style={{ height: '480px' }}
            data-reveal="left"
            data-delay="100"
          >
            {/* Tall left image */}
            <div className="wwww-img flex-1 rounded-2xl overflow-hidden">
              <img src={work1} alt="Infrastructure worker" className="w-full h-full object-cover" />
            </div>

            {/* Right column: stacked two */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="wwww-img flex-1 rounded-2xl overflow-hidden">
                <img src={work2} alt="Smart city digital infrastructure" className="w-full h-full object-cover" />
              </div>
              <div className="wwww-img flex-1 rounded-2xl overflow-hidden">
                <img src={work3} alt="Growth trajectory" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div
            className="flex-1 flex flex-col justify-center"
            data-reveal="right"
            data-delay="200"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 mb-6 backdrop-blur-sm">
              Our Clients
            </span>

            <h2 className="mb-10 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Who We<br />
              <span style={{ color: '#7eb8f7' }}>Work With</span>
            </h2>

            {/* Client rows */}
            <ul className="flex flex-col gap-3">
              {clients.map((c, i) => (
                <li key={c.label} className="wwww-row group" style={{ animationDelay: `${i * 60}ms` }}>
                  {/* Glow dot */}
                  <span className="wwww-dot" aria-hidden="true" />

                  <span className="wwww-icon" aria-hidden="true">{c.icon}</span>

                  <span className="wwww-label">{c.label}</span>

                  {/* Arrow that slides in on hover */}
                  <span className="wwww-arrow flex items-center" aria-hidden="true"><ArrowRight size={18} /></span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
