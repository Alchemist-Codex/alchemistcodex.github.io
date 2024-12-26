import { useState } from 'react';
import { submitContact } from '../services/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await submitContact(formData);
      setStatus(result.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your existing form fields */}
    </form>
  );
} 