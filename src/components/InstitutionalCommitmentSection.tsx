import group12 from '../assets/Group-12.png';
import conglomerate from '../assets/Conglomerate.jpeg';

export default function InstitutionalCommitmentSection() {
  return (
    <section
      id="commitment"
      style={{
        backgroundImage: `url(${conglomerate})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark navy overlay */}
      <div
        className="w-full px-6 py-16 md:px-16 lg:px-24"
        style={{ background: 'rgba(10, 25, 60, 0.82)' }}
      >
        <div className="mx-auto max-w-screen-xl">

          {/* Heading — centered top */}
          <h2
            className="text-center text-xl font-extrabold uppercase tracking-[0.18em] text-white mb-14"
            data-reveal="up"
            data-delay="100"
          >
            Institutional Commitment
          </h2>

          {/* Two columns */}
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

            {/* Left: text */}
            <div
              className="lg:w-1/2"
              data-reveal="left"
              data-delay="200"
            >
              <p className="text-lg font-bold leading-relaxed text-white md:text-2xl mb-6">
                Ripple Fox is developing proprietary{' '}
                <span style={{ color: '#4da6ff' }}>
                  execution intelligence systems
                </span>{' '}
                designed to enhance governance transparency, digital
                transformation performance, and infrastructure scalability.
              </p>

              <p className="text-base text-white/70 leading-relaxed">
                We integrate operational and digital architectures into
                scalable institutional systems.
              </p>
            </div>

            {/* Right: Group-12 image */}
            <div
              className="lg:w-1/2 flex justify-center items-center"
              data-reveal="right"
              data-delay="300"
            >
              <img
                src={group12}
                alt="Ripple Fox institutional commitment"
                className="w-full max-w-xl object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
