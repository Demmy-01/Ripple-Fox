import ellipse21 from '../assets/Ellipse-21.png';
import ellipse22 from '../assets/Ellipse-22.png';

const CARD_BG = '#0d3354';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 overflow-hidden"
    >
      {/* Heading — padded, aligned to content grid */}
      <div className="px-6 md:px-16 lg:px-24 mb-16" data-reveal="up" data-delay="100">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl font-extrabold leading-snug text-[#0d3354] md:text-3xl">
            Trusted by Leadership Teams<br />Navigating Complex Delivery
          </h2>
        </div>
      </div>

      {/* Cards — bleed to the page edges */}
      <div className="flex flex-col gap-8">

        {/* Card 1 — right-aligned, right edge flush with page */}
        <div
          className="ml-auto"
          style={{ width: '72%' }}
          data-reveal="right"
          data-delay="200"
        >
          <div
            className="flex flex-col md:flex-row items-center rounded-l-2xl overflow-hidden"
            style={{ background: CARD_BG }}
          >
            {/* Circle logo — padded inside */}
            <div className="flex-shrink-0 p-8">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-white shadow-xl flex items-center justify-center">
                <img
                  src={ellipse21}
                  alt="Siatech Africa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 px-6 pb-8 pt-2 md:px-8 md:py-8">
              <h3 className="text-base font-bold text-white mb-3 leading-snug">
                Executive Leadership — Siatech Africa
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                "Ripple Fox strengthened our governance structure, restored execution
                discipline, and improved program visibility at a critical stage of
                delivery. Their structured approach to stabilization and performance
                management delivered measurable operational impact."
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 — left-aligned, left edge flush with page */}
        <div
          className="mr-auto"
          style={{ width: '72%' }}
          data-reveal="left"
          data-delay="300"
        >
          <div
            className="flex flex-col md:flex-row items-center rounded-r-2xl overflow-hidden"
            style={{ background: CARD_BG }}
          >
            {/* Text */}
            <div className="flex-1 px-6 pb-6 pt-8 md:px-8 md:py-8">
              <h3 className="text-base font-bold text-white mb-3 leading-snug">
                Executive Management — Lasho Gaming
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                "As a fast-scaling digital gaming platform, operational clarity is
                critical. Ripple Fox introduced structured performance oversight and
                execution alignment across product, technology, and leadership —
                enabling us to scale with greater confidence and control."
              </p>
            </div>

            {/* Circle logo — padded inside */}
            <div className="flex-shrink-0 p-8">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-white shadow-xl flex items-center justify-center">
                <img
                  src={ellipse22}
                  alt="Lasho Gaming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
