import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mannaezz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="group">
        <div className="flex items-center bg-white rounded-lg p-2 focus-within:ring-2 focus-within:ring-black/20 transition-shadow">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" 
            className="flex-grow bg-transparent px-3 py-3 text-black placeholder:text-gray-500 focus:outline-none"
            required
            disabled={status === 'loading'}
          />
          <button 
            type="submit" 
            className="bg-black text-white p-3 rounded-md hover:bg-black/90 transition-colors disabled:opacity-50"
            disabled={status === 'loading'}
            aria-label="Submit newsletter signup"
          >
            {status === 'loading' ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <ArrowRight className="h-6 w-6" />
            )}
          </button>
        </div>
      </form>
      
      {message && (
        <div 
          className={`mt-2 text-sm ${
            status === 'success' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}