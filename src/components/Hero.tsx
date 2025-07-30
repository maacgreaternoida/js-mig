"use client"; // This is a client component because it uses browser-only features (onClick, useState)

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const WELCOME = 'Welcome to';
const GREATER_NOIDA = 'Greater Noida';
const SUBTITLE = 'Top Institutes for Animation, VFX, Gaming and Graphic Design';

const Hero: React.FC = () => {
  // State to handle video loading errors, a cleaner approach than DOM manipulation
  const [videoHasError, setVideoHasError] = useState(false);

  const handleScrollToContact = () => {
    // This function assumes an element with id="contact-form" exists on the page.
    // We will create that section later in the migration.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const videoSrc = "https://maacgreaternoida.b-cdn.net/hero-video.webm";
  const posterSrc = "https://maacgreaternoida.b-cdn.net/courses-img/hero-poster.webp";

  return (
    <section className={styles.modernHero}>
      {/* Background: Conditionally render video or fallback image */}
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
          onError={() => setVideoHasError(true)} // Set state on error
        />
      ) : (
        <Image
          src={posterSrc}
          alt="Creative arts students working on computers"
          layout="fill"
          objectFit="cover"
          priority
          className={styles.heroBgPoster}
        />
      )}
      
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <div className={styles.heroAnimatedText}>
            <div className={styles.textRevealContainer}>
              <h1 className={styles.heroWelcome}>
                <span className={styles.welcomeText}>{WELCOME}</span>
                <div className={styles.welcomeUnderline}></div>
              </h1>
              
              <div className={styles.heroTitleContainer}>
                {/* Use Next.js Image component for optimization and mark as priority */}
                <Image 
                  src="/maac-logo-hero.webp" 
                  alt="MAAC - Leading Animation & VFX Institute" 
                  className={styles.heroLogo}
                  width={80}
                  height={80}
                  priority={true} // Tells Next.js to load this image first
                />
                <h1 className={styles.heroGreaterNoida}>
                  <span className={styles.greaterNoidaText}>{GREATER_NOIDA}</span>
                </h1>
              </div>
              
              <p className={styles.heroSubtitle}>
                {SUBTITLE}
              </p>
            </div>
          </div>
          
          <div className={styles.heroCtaButtons}>
            <button className={styles.ctaPrimary} onClick={handleScrollToContact}>
              <span>START YOUR JOURNEY</span>
              <div className={styles.ctaArrow}>→</div>
            </button>
            {/* Use Next.js Link component for faster, client-side navigation */}
            <Link href="/courses" className={styles.ctaSecondary}>
              <span>EXPLORE COURSES</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
