"use client";

import React from 'react';
import styles from './Hero.module.css';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
  </svg>
);

const ClientScrollButton: React.FC = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={styles.ctaPrimary} onClick={handleScrollToContact}>
      <span>Start Your Journey</span>
      <ArrowIcon />
    </button>
  );
};

export default ClientScrollButton; 