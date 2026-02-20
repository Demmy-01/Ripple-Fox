import rect8 from '../assets/Rectangle-8.png';
import rect9 from '../assets/Rectangle-9.png';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white px-6 py-24 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="mx-auto max-w-screen-xl">

        {/* ── Pill label ── */}
        <div className="mb-10" data-reveal="fade">
          <span className="inline-flex items-center rounded-full bg-[#0d3354] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            About Ripple Fox
          </span>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-12">

          {/* Left — text */}
          <div className="lg:w-1/2" data-reveal="left" data-delay="100">
            <h2 className="mb-8 text-3xl font-extrabold leading-snug text-[#060d1f] md:text-4xl">
              Ripple Fox is an execution intelligence firm specializing in the
              stabilization and architectural redesign of complex,
              multi&#8209;stakeholder infrastructure and transformation
              environments
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              We design governance architecture and structured performance
              systems that restore clarity, strengthen accountability, and
              stabilize delivery where operational and digital complexity
              threaten performance.
            </p>

            <p className="text-sm leading-relaxed text-gray-500">
              Ripple Fox operates at the intersection of infrastructure
              deployment, enterprise digital transformation, and governance
              system design.
            </p>
          </div>

          {/* Right — images side by side, staggered vertically */}
          <div
            className="flex justify-center items-start gap-4 lg:w-1/2"
            data-reveal="right"
            data-delay="300"
          >
            {/* Rectangle-9 (dark grid) — left, shifted down */}
            <img
              src={rect9}
              alt="Infrastructure grid visualization"
              className="w-36 rounded-3xl shadow-2xl md:w-44 mt-16"
            />
            {/* Rectangle-8 (blue gradient) — right, at top */}
            <img
              src={rect8}
              alt="Blue gradient panel"
              className="w-36 rounded-3xl shadow-xl md:w-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
