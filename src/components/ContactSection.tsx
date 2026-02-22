import { useState } from 'react';
import FloatingDots from './FloatingDots';

const FORM_BG = '#2d6391';

const contactInfo = [
  { label: 'Phone number:', value: '+234 904 431 9888' },
  { label: 'Email:', value: 'info@ripplefox.co' },
  { label: 'Address:', value: 'Pinnock Beach Estate' },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = form;
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill in all fields before submitting.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Reset back to empty form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const inputBase: React.CSSProperties = {
    background: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '14px',
    color: '#1a3d6b',
    width: '100%',
    outline: 'none',
  };

  const interInput: React.CSSProperties = {
    ...inputBase,
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  return (
    <section
      id="contact-form"
      className="relative bg-white px-6 py-20 md:px-16 lg:px-24 overflow-hidden"
    >
      <FloatingDots color="blue" />
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">

          {/* ── Left: contact info ── */}
          <div className="lg:w-2/5" data-reveal="left" data-delay="100">
            <h2 className="text-3xl font-extrabold text-[#060d1f] mb-8 md:text-4xl">
              Contact Us
            </h2>
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ label, value }) => (
                <p key={label} className="text-sm" style={{ color: '#1F4E79' }}>
                  <span className="font-semibold">{label}</span>{' '}
                  {label === 'Phone number:' ? (
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{value}</span>
                  ) : value}
                </p>
              ))}
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div
            className="lg:w-3/5 rounded-2xl p-6 md:p-8"
            style={{ background: FORM_BG }}
            data-reveal="right"
            data-delay="200"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <span className="text-4xl">✓</span>
                <p className="text-white text-lg font-semibold text-center">
                  Thank you! We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    style={inputBase}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    style={inputBase}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={interInput}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={interInput}
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  style={{ ...inputBase, resize: 'vertical' }}
                />

                {error && (
                  <p className="text-red-200 text-xs font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  className="mt-2 w-full py-3 rounded-lg font-semibold text-sm text-[#1a3d6b] bg-white transition-all hover:bg-white/90 focus:outline-none"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
