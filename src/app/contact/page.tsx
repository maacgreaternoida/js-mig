import React from 'react';
import ContactForm from '@/components/ContactForm';
import styles from '@/components/ContactPage.module.css';

// Simple SVG icons for contact details
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroSubtitle}>We're here to help you start your creative journey. Reach out to us with any questions.</p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.mainContent}`}>
        {/* FIX: Swapped the order of the two columns */}
        <div className={styles.formSide}>
          {/* We are reusing the ContactForm component we already built! */}
          <ContactForm />
        </div>

        <div className={styles.infoSide}>
          <h2>Contact Information</h2>
          <p>Our team of expert counselors is available to guide you. Feel free to visit us, give us a call, or send an email.</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <MapPinIcon />
              <div>
                <strong>Visit Us</strong>
                <p>Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt, Greater Noida</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <PhoneIcon />
              <div>
                <strong>Call Us</strong>
                <a href="tel:08048052804">08048052804</a>
              </div>
            </div>
            <div className={styles.detailItem}>
              <MailIcon />
              <div>
                <strong>Email Us</strong>
                <a href="mailto:info@maacgreaternoida.com">info@maacgreaternoida.com</a>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.353382198088!2d77.5032224150802!3d28.5291489824598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce985aaaaaaab%3A0x861a84cf2969b82!2sMAAC%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1678886004567!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MAAC Greater Noida Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}