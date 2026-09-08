import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter, FaDiscord } from 'react-icons/fa6';
import { submitContact } from '../api';

const SOCIALS = [
  { icon: FiMail, href: 'mailto:you@example.com', label: 'Email' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/yourusername', label: 'X' },
  { icon: FaDiscord, href: 'https://discord.com/users/yourusername', label: 'Discord' }
];

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    try {
      await submitContact(form);
      setStatus({ state: 'success', message: "Sent — thanks, I'll get back to you." });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong. Try again.' });
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="rule full" style={{ margin: '0 0 20px' }} />

        <div className="footer-top">
          <div>
            <div className="footer-tag">MERN developer — production, not tutorials.</div>
          </div>
          <div className="social-row">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
                <Icon size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-label">// send a message</div>
          <form onSubmit={handleSubmit}>
            <div className="footer-contact-row">
              <input
                type="text" name="name" placeholder="name" required maxLength={100}
                value={form.name} onChange={handleChange}
              />
              <input
                type="email" name="email" placeholder="email" required maxLength={200}
                value={form.email} onChange={handleChange}
              />
            </div>
            <textarea
              name="message" placeholder="message" rows={3} required maxLength={2000}
              value={form.message} onChange={handleChange}
            />
            <button type="submit" className="btn" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'sending...' : 'send'}
            </button>
            <div
              className={`footer-status ${status.state === 'success' ? 'success' : ''} ${status.state === 'error' ? 'error' : ''}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
