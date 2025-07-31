"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const WELCOME = 'Welcome to';
const GREATER_NOIDA = 'Greater Noida';
const SUBTITLE = 'Top Institutes for Animation, VFX, Gaming and Graphic Design';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
  </svg>
);

const Hero: React.FC = () => {
  const [videoHasError, setVideoHasError] = useState(false);

  const handleScrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const videoSrc = "https://maacgreaternoida.b-cdn.net/hero-video.webm";
  const posterSrc = "https://maacgreaternoida.b-cdn.net/courses-img/hero-poster.webp";

  return (
    <section className={styles.modernHero}>
      <div className={styles.backgroundContainer}>
        {!videoHasError ? (
          <video
            className={styles.heroBgVideo}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setVideoHasError(true)}
          />
        ) : (
          <Image
            src={posterSrc}
            alt="Creative arts students working on computers"
            fill
            priority
            className={styles.heroBgPoster}
          />
        )}
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroWelcome}>
          <span className={styles.welcomeText}>{WELCOME}</span>
        </div>
        
        <div className={styles.heroTitleContainer}>
          <Image 
            src="/maac-logo-hero.webp" 
            alt="MAAC Logo" 
            className={styles.heroLogo}
            width={80}
            height={80}
            priority={true}
          />
          <h1 className={styles.heroGreaterNoida}>
            <span className={styles.greaterNoidaText}>{GREATER_NOIDA}</span>
          </h1>
        </div>
        
        <p className={styles.heroSubtitle}>{SUBTITLE}</p>
        
        <div className={styles.heroCtaButtons}>
          <button className={styles.ctaPrimary} onClick={handleScrollToContact}>
            <span>Start Your Journey</span>
            <ArrowIcon />
          </button>
          <Link href="/courses" className={styles.ctaSecondary}>
            <span>Explore Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
