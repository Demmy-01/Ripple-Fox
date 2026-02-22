import rect27 from '../assets/Rectangle-27.png';
import FloatingDots from './FloatingDots';

const topSteps = [
  {
    number: '01',
    title: 'Execution Mapping',
    description: 'Assessment of delivery architecture and digital dependencies',
  },
  {
    number: '02',
    title: 'Governance Gap Analysis',
    description: 'Identification of structural weaknesses.',
  },
  {
    number: '03',
    title: 'Risk Exposure Modeling',
    description: 'Evaluation of operational and digital interdependencies.',
  },
];

const bottomSteps = [
  {
    number: '04',
    title: 'Stabilization Architecture Design',
    description: 'Engineering governance frameworks.',
  },
  {
    number: '05',
    title: 'Continuity System Integration',
    description: 'Embedding scalable oversight systems.',
  },
];



export default function OurMethodSection() {
  return (
    <section
      id="method"
      className="relative bg-white px-6 py-20 md:px-16 lg:px-24 overflow-hidden"
    >
      <FloatingDots color="blue" />
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

          {/* ── Left: heading + description ── */}
          <div
            className="lg:w-[38%] flex-shrink-0"
            data-reveal="left"
            data-delay="100"
          >
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-[#060d1f] md:text-5xl">
              Our<br />Method
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
              Our method is a disciplined, systems-based progression designed
              to diagnose instability, expose structural gaps, and re-engineer
              governance architecture with precision. Each phase builds on the
              previous one, moving from assessment to stabilization to long-term
              continuity, ensuring complexity is not merely managed, but
              structurally controlled.
            </p>
          </div>

          {/* ── Right: diagram ── */}
          <div
            className="lg:w-[62%] flex-shrink-0"
            data-reveal="right"
            data-delay="200"
          >

            {/* ── Top block: image at far right, cards on left overlapping ~30% ── */}
            <div className="relative">

              {/*
                Image: absolute, right-0, width 62% of this panel.
                It starts at 38% from left.
                Cards are 55% wide → right edge at 55%.
                Overlap: 55% - 38% = 17% of panel = ~31% of card width.
              */}
              <img
                src={rect27}
                alt="Execution method visual"
                aria-hidden="true"
                className="absolute top-0 right-0 h-full object-cover rounded-3xl"
                style={{ width: '62%', zIndex: 0 }}
              />

              {/* Cards 01–03, stacked, 55% wide, float in front of image */}
              <div className="relative" style={{ width: '55%', zIndex: 10 }}>
                {topSteps.map((step, i) => (
                  <div key={step.number}>
                    <div className="method-card">
                      <span className="method-num" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: 1, display: 'block', marginBottom: '8px', letterSpacing: '0.04em', color: '#b0b8c8', transition: 'color 0.3s ease' }}>{step.number}</span>
                      <h3 className="text-sm font-bold text-[#060d1f] mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Vertical dashed connector centered in card column */}
                    {i < topSteps.length - 1 && (
                      <div
                        className="flex justify-center"
                        style={{ position: 'relative', zIndex: 10 }}
                        aria-hidden="true"
                      >
                        <div style={{ borderLeft: '2px dashed #b0bec5', height: '18px' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/*
              L-shaped connector:
              - Card column center = 55% / 2 = 27.5%
              - Bottom cards are 2-col full width → centers at 25% and 75%
              - Horizontal line spans 25% → 75%
            */}
            <div className="relative" style={{ height: '40px' }} aria-hidden="true">
              {/* Vertical drop from card-03 center */}
              <div
                className="absolute"
                style={{ left: '27.5%', top: 0, height: '50%', borderLeft: '2px dashed #b0bec5' }}
              />
              {/* Horizontal line across to both bottom card centers */}
              <div
                className="absolute"
                style={{ left: '25%', right: '25%', top: '50%', borderTop: '2px dashed #b0bec5' }}
              />
              {/* Stub down into card 04 */}
              <div
                className="absolute"
                style={{ left: '25%', top: '50%', bottom: 0, borderLeft: '2px dashed #b0bec5' }}
              />
              {/* Stub down into card 05 */}
              <div
                className="absolute"
                style={{ right: '25%', top: '50%', bottom: 0, borderLeft: '2px dashed #b0bec5' }}
              />
            </div>

            {/* Steps 04–05 — full width of right panel, 2-col */}
            <div className="grid grid-cols-2 gap-3">
              {bottomSteps.map((step) => (
                <div key={step.number} className="method-card">
                  <span className="method-num" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: 1, display: 'block', marginBottom: '8px', letterSpacing: '0.04em', color: '#b0b8c8', transition: 'color 0.3s ease' }}>{step.number}</span>
                  <h3 className="text-sm font-bold text-[#060d1f] mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}