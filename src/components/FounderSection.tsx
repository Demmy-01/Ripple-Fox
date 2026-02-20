import iconWhite from '../assets/Icon_white.png';

const experiences = [
  { text: 'Governance design', highlight: true },
  { text: 'Infrastructure deployment oversight', highlight: false },
  { text: 'Digital transformation alignment', highlight: false },
  { text: 'Structured execution stabilization', highlight: false },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="bg-white px-6 py-20 md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-screen-xl">

        {/* Top row: icon circle + heading */}
        <div
          className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 mb-16"
          data-reveal="up"
          data-delay="100"
        >
          {/* Icon in navy circle with decorative dot */}
          <div className="relative flex-shrink-0 self-start md:self-center">
            {/* Small decorative dot — top-left of circle */}
            <span
              className="absolute -top-3 -left-3 w-4 h-4 rounded-full"
              style={{ background: '#1F4E79' }}
              aria-hidden="true"
            />
            {/* Navy circle */}
            <div
              className="w-60 h-60 rounded-full flex items-center justify-center"
              style={{ background: '#0d3354' }}
            >
              <img
                src={iconWhite}
                alt="Ripple Fox Limited"
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          {/* Heading + subtext */}
          <div>
            <h2 className="text-2xl font-extrabold leading-snug text-[#060d1f] md:text-3xl mb-4">
              <span className="text-[#1F4E79]">Ripple Fox</span>{' '}
              is founded by a senior infrastructure and transformation executive
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              with extensive experience in complex, multi-stakeholder program leadership.
            </p>
          </div>
        </div>

        {/* Experience list */}
        <div data-reveal="up" data-delay="200">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
            Experience includes:
          </p>

          <ul className="flex flex-col gap-0">
            {experiences.map(({ text, highlight }) => (
              <li key={text} className="pt-5 pb-3">
                <span
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: highlight ? '#1F4E79' : '#060d1f' }}
                >
                  {text}
                </span>
                {/* Short thick underline */}
                <div
                  style={{
                    marginTop: '10px',
                    height: '2px',
                    width: '260px',
                    maxWidth: '100%',
                    background: highlight ? '#1F4E79' : '#060d1f',
                    borderRadius: '2px',
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
