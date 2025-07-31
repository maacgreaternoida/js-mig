import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import ClientVideoPlayer from './ClientVideoPlayer';
import ClientScrollButton from './ClientScrollButton';

const WELCOME = 'Welcome to';
const GREATER_NOIDA = 'Greater Noida';
const SUBTITLE = 'Top Institutes for Animation, VFX, Gaming and Graphic Design';

const Hero: React.FC = () => {
  return (
    <section className={styles.modernHero}>
      <div className={styles.backgroundContainer}>
        <ClientVideoPlayer />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroWelcome}>
          <span className={styles.welcomeText}>{WELCOME}</span>
        </div>
        
        <div className={styles.heroTitleContainer}>
          <div className={styles.heroLogoWrapper}>
            <img 
              src="/maac-logo-hero.webp" 
              alt="MAAC Logo" 
              className={styles.heroLogo}
              style={{ 
                width: 'auto', 
                height: '80px',
                display: 'block',
                filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.3))',
                maxWidth: '100%'
              }}
            />
          </div>
          <h1 className={styles.heroGreaterNoida}>
            <span className={styles.greaterNoidaText}>{GREATER_NOIDA}</span>
          </h1>
        </div>
        
        <p className={styles.heroSubtitle}>{SUBTITLE}</p>
        
        <div className={styles.heroCtaButtons}>
          <ClientScrollButton />
          <Link href="/courses" className={styles.ctaSecondary}>
            <span>Explore Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;