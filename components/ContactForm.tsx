'use client';

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    await new Promise(resolve => setTimeout(resolve, 1500)); 

    setStatus('Message sent successfully!');

    setTimeout(() => {
      setStatus('');
      setForm({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-700 transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-700 transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-700 transition-all"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-olive-600 hover:bg-olive-700 inline-block bg-[#5A682C] font-medium py-3 px-6 rounded-md
         transition-transform transform hover:-translate-y-1 shadow-md"
        disabled={status === 'Sending...'}
      >
        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
      </button>
      {status && <p className="text-sm text-center mt-3">{status}</p>}
    </form>
  );
};

export default ContactForm;
