import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

// Simple SVG components for social icons for performance and scalability
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 2a9.904 9.904 0 00-4.088.06c-1.007.048-1.62.21-2.126.41a2.89 2.89 0 00-1.026.713 2.89 2.89 0 00-.713 1.026c-.2.506-.362 1.119-.41 2.126C4.01 8.944 4 9.283 4 12s.01 3.056.06 4.088c.048 1.007.21 1.62.41 2.126a2.89 2.89 0 00.713 1.026 2.89 2.89 0 001.026.713c.506.2 1.119.362 2.126.41C8.944 19.99 9.283 20 12 20s3.056-.01 4.088-.06c1.007-.048 1.62-.21 2.126-.41a2.89 2.89 0 001.026-.713 2.89 2.89 0 00.713-1.026c.2-.506.362-1.119.41-2.126.05-1.032.06-1.37.06-4.088s-.01-3.056-.06-4.088c-.048-1.007-.21-1.62-.41-2.126a2.89 2.89 0 00-.713-1.026 2.89 2.89 0 00-1.026-.713c-.506-.2-1.119-.362-2.126-.41C15.056 4.01 14.717 4 12 4zm0 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M21.582 7.693a2.49 2.49 0 00-1.755-1.755C18.25 5.5 12 5.5 12 5.5s-6.25 0-7.827.438a2.49 2.49 0 00-1.755 1.755C2 9.27 2 12 2 12s0 2.73.438 4.307a2.49 2.49 0 001.755 1.755C5.75 18.5 12 18.5 12 18.5s6.25 0 7.827-.438a2.49 2.49 0 001.755-1.755C22 14.73 22 12 22 12s0-2.73-.418-4.307zM10 14.5V9.5l4 2.5-4 2.5z"></path></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM8 18H5V8h3v10zM6.5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 18h-3v-5.5c0-1.33-.03-3.04-1.85-3.04C11.35 9.46 11 11.05 11 12.5V18H8V8h3v1.39h.04c.42-.8 1.45-1.64 2.96-1.64 3.17 0 3.76 2.08 3.76 4.79V18z"></path></svg>;

const Footer: React.FC = () => {
  return (
    <footer className={styles.modernFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
          <div className={styles.footerAbout}>
            <Image src="/maac-logo.png" alt="MAAC Greater Noida Logo" width={120} height={40} className={styles.footerLogo} />
            <p className={styles.footerDescription}>
              India's leading institute for high-end training in animation, VFX, gaming, and multimedia.
            </p>
          </div>
          <div className={styles.footerLinksGroup}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/degree-bvoc">Degree B.Voc</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <p><strong>MAAC Greater Noida</strong></p>
            <p>Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt, Greater Noida</p>
            <p><a href="tel:08048052804"><strong>Call:</strong> 08048052804</a></p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} MAAC Greater Noida. All Rights Reserved.</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/maacnoidaanimation/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.instagram.com/maacnoidaofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://www.youtube.com/@maacnoida" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="https://www.linkedin.com/in/maac-greater-noida-85739823b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;