import { useState } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleClick = () => {
    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:adityachabba02@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setForm({ name: '', email: '', message: '' }); // clear form
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="contact-subheading">Get in Touch</p>
        <h2 className="contact-heading">Contact Me</h2>

        <div className="contact-links">
          <a
            href="mailto:adityachabba02@gmail.com"
            className="contact-item"
            aria-label="Email Aditya"
          >
            <FaEnvelope size={30} />
            <span style={{ marginLeft: '0.5rem' }}>
              adityachabba02@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/adityachabba"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
            <span style={{ marginLeft: '0.5rem' }}>LinkedIn</span>
          </a>
        </div>

        <div className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
          />
          <button type="button" className="btn solid" onClick={handleClick}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
