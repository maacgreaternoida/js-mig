"use client";

import React, { useEffect, useState, FormEvent, ChangeEvent, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import styles from './LeadPopup.module.css';

const UserIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const PhoneIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const BookIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const CloseIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const SendIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

interface LeadPopupProps {
  delayMs?: number;
  minScrollPx?: number;
  suppressionKey?: string;
}

interface FormState { name: string; phone: string; topic: string; }

const topics = ['Animation', 'VFX', 'Gaming', 'Multimedia', 'Graphic Design', 'Web Design', 'Other'];

export default function LeadPopup({ delayMs = 4000, minScrollPx = 120, suppressionKey = 'leadPopupDismissed' }: LeadPopupProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', phone: '', topic: '' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const suppressed = window.localStorage.getItem(suppressionKey);
    if (suppressed === 'true') return;

    const timer = window.setTimeout(() => setOpen(true), delayMs);
    const onScroll = () => {
      if (window.scrollY > minScrollPx) {
        setOpen(true);
        window.removeEventListener('scroll', onScroll);
        window.clearTimeout(timer);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, [delayMs, minScrollPx, suppressionKey]);

  const close = useCallback(() => {
    setOpen(false);
    try { window.localStorage.setItem(suppressionKey, 'true'); } catch {}
  }, [suppressionKey]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'phone') {
      const onlyDigits = value.replace(/[^0-9]/g, '');
      if (onlyDigits.length <= 10) setForm({ ...form, phone: onlyDigits });
      return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      setStatus('Please enter a valid 10-digit phone number.');
      return;
    }
    setSubmitting(true);
    setStatus('Sending...');
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            phone: form.phone,
            preferredCourse: form.topic,
            message: `Popup lead: ${form.name} (${form.phone}) interested in ${form.topic}`,
          },
          publicKey
        );
      }

      // Persist to DB via API regardless
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, course: form.topic }),
      });

      setStatus('Thank you! We will contact you shortly.');
      setForm({ name: '', phone: '', topic: '' });
      setTimeout(() => close(), 1200);
    } catch {
      setStatus('Failed to send. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Quick enquiry">
      <div className={styles.popupCard}>
        <div className={styles.header}>
          <h3 className={styles.title}>Get a Free Callback</h3>
          <button className={styles.closeBtn} onClick={close} aria-label="Close popup"><CloseIcon /></button>
        </div>
        <p className={styles.subtitle}>Tell us how we can help you start your creative journey.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <UserIcon />
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" />
            </div>
            <div className={styles.field}>
              <PhoneIcon />
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="10-Digit Phone Number" maxLength={10} inputMode="numeric" />
            </div>
          </div>
          <div className={styles.field}>
            <BookIcon />
            <select name="topic" value={form.topic} onChange={handleChange} required>
              <option value="" disabled>What do you want to learn more about?</option>
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button className={styles.submitBtn} type="submit" disabled={submitting}>
            <span>{submitting ? 'Sending...' : 'Request Call Back'}</span>
            <SendIcon />
          </button>
          {status && <div className={styles.status + ' ' + (status.startsWith('Thank') ? styles.success : status.startsWith('Failed') || status.startsWith('Please') ? styles.error : '')}>{status}</div>}
        </form>
      </div>
    </div>
  );
}


