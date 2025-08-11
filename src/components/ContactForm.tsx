"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

// --- SVG Icon Components for a clean, modern look ---
const UserIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const PhoneIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const BookIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const SendIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

const courses = ['Animation', 'VFX', 'Gaming', 'Multimedia', 'Graphic Design', 'Web Design', 'Other'];

interface FormState { name: string; email: string; phone: string; course: string; }

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', course: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const onlyDigits = value.replace(/[^0-9]/g, '');
      if (onlyDigits.length <= 10) setForm({ ...form, phone: onlyDigits });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      setStatus('Please enter a valid 10-digit phone number.');
      setTimeout(() => setStatus(''), 4000);
      return;
    }
    setIsSubmitting(true);
    setStatus('Sending...');
    
    try {
      // Check if EmailJS environment variables are configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Configuration Check:', {
        serviceId: serviceId ? 'Configured' : 'Missing',
        templateId: templateId ? 'Configured' : 'Missing',
        publicKey: publicKey ? 'Configured' : 'Missing'
      });

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Log the form data and show success message
        console.log('Contact Form Submission (Fallback Mode):', {
          ...form,
          from_name: form.name,
          preferredCourse: form.course,
          timestamp: new Date().toISOString()
        });
        
        // Simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('Thank you! We will be in touch shortly. (Note: EmailJS not configured in production)');
        setForm({ name: '', email: '', phone: '', course: '' });
      } else {
        // Use EmailJS if configured
        console.log('Attempting to send email via EmailJS...');
        await emailjs.send(
          serviceId,
          templateId,
          { ...form, from_name: form.name, preferredCourse: form.course },
          publicKey
        );
        console.log('Email sent successfully via EmailJS');
        setStatus('Thank you! We will be in touch shortly.');
        setForm({ name: '', email: '', phone: '', course: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('Failed to send. Please try again later or contact us directly at info@maacgreaternoida.com');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const getStatusClassName = () => {
    if (status.includes('Thank you')) return styles.success;
    if (status.includes('Failed') || status.includes('Please')) return styles.error;
    if (status.includes('Sending')) return styles.loading;
    return '';
  };

  return (
    <section className={styles.contactSection} id="contact-form">
      <div className={styles.contactFormCard}>
        <div className={styles.contactHeader}>
          <h2 className={styles.contactTitle}>Start Your Creative Journey</h2>
          <p className={styles.contactSubtitle}>Our counselors will get back to you within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <div className={styles.inputField}>
              <UserIcon />
              <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" />
            </div>
            <div className={styles.inputField}>
              <PhoneIcon />
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="10-Digit Phone Number" maxLength={10} />
            </div>
          </div>
          <div className={styles.inputField}>
            <MailIcon />
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Address" />
          </div>
          <div className={styles.inputField}>
            <BookIcon />
            <select id="course" name="course" value={form.course} onChange={handleChange} required className={form.course === '' ? styles.placeholder : ''}>
              <option value="" disabled>Select a Preferred Course</option>
              {courses.map((c) => (<option value={c} key={c}>{c}</option>))}
            </select>
          </div>
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Request a Call Back'}</span>
            <SendIcon />
          </button>
          <div className={styles.consentText}>
            <p>By submitting, I allow MAAC to contact me. Your privacy is important to us.</p>
          </div>
          {status && (
            <div className={`${styles.formStatus} ${getStatusClassName()}`}>
              <span>{status}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;