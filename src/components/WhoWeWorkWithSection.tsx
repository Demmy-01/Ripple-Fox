import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';

const clients = [
  'Infrastructure operators',
  'Telecom and infrastructure-intensive ecosystems',
  'Enterprise-wide digital and operational transformation programs',
  'Multi-vendor deployment environments',
  'Growth-stage organizations scaling complexity',
];

export default function WhoWeWorkWithSection() {
  return (
    <section
      id="clients"
      className="px-6 py-20 md:px-16 lg:px-24"
      style={{ background: '#1F4E79' }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          {/* ── Left: 3-image panel ── */}
          <div
            className="lg:w-1/2 flex gap-3 flex-shrink-0"
            style={{ height: '420px' }}
            data-reveal="left"
            data-delay="100"
          >
            {/* work-1 — tall, left column, full height */}
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src={work1}
                alt="Infrastructure worker"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right column: work-2 (top) + work-3 (bottom) */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src={work2}
                  alt="Smart city digital infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src={work3}
                  alt="Growth trajectory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Right: white card ── */}
          <div
            className="lg:w-1/2 flex-shrink-0"
            data-reveal="right"
            data-delay="200"
          >
            <div
              className="rounded-3xl bg-white px-8 py-10 md:px-10 md:py-12"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}
            >
              <h2
                className="mb-8 text-2xl font-extrabold uppercase tracking-wide md:text-3xl"
                style={{ color: '#1F4E79' }}
              >
                Who We Work With
              </h2>

              <ul className="flex flex-col gap-5">
                {clients.map((client) => (
                  <li key={client} className="flex items-start gap-4">
                    {/* Navy filled circle bullet */}
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: '#1F4E79',
                        display: 'inline-block',
                        marginTop: '3px',
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: '#1F4E79' }}
                    >
                      {client}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
