const nodes = [
  { label: 'Complex Environment' },
  { label: 'High Stakes' },
  { label: 'Limited Clarity.' },
];

export default function CTASection() {
  return (
    <section
      id="contact"
      className="px-6 py-20 md:px-16 lg:px-24"
      style={{ background: '#1a3d6b' }}
    >
      <div className="mx-auto max-w-screen-xl">

        {/* Chain — vertical stack on mobile, horizontal on md+ */}
        <div className="mb-16 w-full" data-reveal="up" data-delay="100">

          {/* ── MOBILE: vertical stack ── */}
          <div className="flex flex-col items-center gap-0 md:hidden">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex flex-col items-center">
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '2.5px solid rgba(255,255,255,0.55)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.88)' }}
                  />
                </div>
                {/* Label */}
                <span className="mt-2 text-xs text-white/75 text-center">
                  {node.label}
                </span>
                {/* Vertical dotted connector */}
                {i < nodes.length - 1 && (
                  <div
                    className="my-1"
                    style={{
                      borderLeft: '4px dotted rgba(255,255,255,0.75)',
                      height: '32px',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── DESKTOP: horizontal chain ── */}
          <div className="hidden md:block">
            {/* Row 1: circles + connectors centered */}
            <div className="flex items-center w-full">
              <Circle size="lg" />
              <Connector />
              <Circle size="lg" />
              <Connector />
              <Circle size="lg" />
            </div>
            {/* Row 2: labels — mirrors row 1 slots */}
            <div className="flex items-start w-full mt-3">
              <div className="w-16 flex-shrink-0 flex justify-center">
                <span className="text-xs text-white/75 text-center whitespace-nowrap">
                  Complex Environment
                </span>
              </div>
              <div className="flex-1 mx-2" />
              <div className="w-16 flex-shrink-0 flex justify-center">
                <span className="text-xs text-white/75 text-center whitespace-nowrap">
                  High Stakes
                </span>
              </div>
              <div className="flex-1 mx-2" />
              <div className="w-16 flex-shrink-0 flex justify-center">
                <span className="text-xs text-white/75 text-center whitespace-nowrap">
                  Limited Clarity.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Tagline */}
        <p
          className="text-center text-lg font-semibold text-white mb-10 md:text-2xl"
          data-reveal="up"
          data-delay="200"
        >
          Let's restore structured control.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center" data-reveal="up" data-delay="300">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-5 py-3 text-sm font-semibold tracking-wide text-[#0a1128] bg-white rounded-sm border border-white transition-all hover:bg-white/90 focus:outline-none"
          >
            Request Strategic Engagement
            <span aria-hidden="true" className="text-base leading-none">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

function Circle({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  const dim = size === 'lg' ? { outer: 'w-16 h-16', inner: 'w-10 h-10' } : { outer: 'w-12 h-12', inner: 'w-7 h-7' };
  return (
    <div
      className={`${dim.outer} flex-shrink-0 rounded-full flex items-center justify-center`}
      style={{
        background: 'rgba(255,255,255,0.12)',
        border: '2.5px solid rgba(255,255,255,0.55)',
      }}
    >
      <div
        className={`${dim.inner} rounded-full`}
        style={{ background: 'rgba(255,255,255,0.88)' }}
      />
    </div>
  );
}

function Connector() {
  return (
    <div
      className="flex-1 mx-2"
      style={{ borderTop: '4px dotted rgba(255,255,255,0.75)' }}
    />
  );
}
