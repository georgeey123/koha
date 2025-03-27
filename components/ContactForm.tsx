'use client'; // Needs state for input handling

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To show submission status

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    // --- FORM SUBMISSION LOGIC WOULD GO HERE ---
    // For now, simulate success/failure
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    // Replace with actual API call (e.g., using fetch or a library like Axios)
    // to send data to a backend endpoint or a service like Formspree/Netlify Forms.
    console.log('Form Data:', { name, email, message });
    // Example success:
    setStatus('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
    // Example failure:
    // setStatus('Failed to send message. Please try again.');
     setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-beige-200 rounded-md focus:ring-1 focus:ring-amber-700 focus:border-amber-700 outline-none transition duration-150 ease-in-out bg-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-beige-200 rounded-md focus:ring-1 focus:ring-amber-700 focus:border-amber-700 outline-none transition duration-150 ease-in-out bg-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-beige-200 rounded-md focus:ring-1 focus:ring-amber-700 focus:border-amber-700 outline-none transition duration-150 ease-in-out bg-white"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'Sending...'}
          className="w-full sm:w-auto inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-olive-600 hover:bg-olive-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
       {status && !status.includes('Sending') && (
        <p className={`mt-4 text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;