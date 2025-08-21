import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import ClientVideoPlayer from './ClientVideoPlayer';
import ClientScrollButton from './ClientScrollButton';

const WELCOME = 'Welcome to';
const GREATER_NOIDA = 'Greater Noida';

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
            <Image 
              src="/maac-logo-hero.webp" 
              alt="MAAC Logo" 
              width={200}
              height={80}
              className={styles.heroLogo}
              style={{ 
                filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.3))',
                maxWidth: '100%'
              }}
            />
          </div>
          <h1 className={styles.heroGreaterNoida}>
            <span className={styles.greaterNoidaText}>{GREATER_NOIDA}</span>
          </h1>
        </div>
        
        <p className={styles.heroSubtitle}>
          <strong>MAAC Greater Noida</strong> is the leading institute for Animation, VFX, Gaming and Graphic Design in Delhi NCR. 
          Serving students from Greater Noida, Noida and Ghaziabad with 100% placement support and industry-expert faculty.
        </p>
        
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