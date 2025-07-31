"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { courseCategories } from '@/data/course-data';

// A clean SVG icon component to replace the emoji
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;
  const isDropdownActive = () => pathname.startsWith('/courses');

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${mobileMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/maac-logo.png" alt="MAAC Greater Noida" width={140} height={45} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
          <div 
            className={styles.navDropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/courses" className={`${styles.navLink} ${isDropdownActive() ? styles.active : ''}`}>
              Courses
            </Link>
            <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.open : ''}`}>
              {courseCategories.map((category) => (
                // FIX: Removed the icon section for a cleaner look
                <Link 
                  key={category.slug} 
                  href={`/courses/${category.slug}`} 
                  className={styles.dropdownLink}
                  onClick={() => setDropdownOpen(false)}
                >
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/degree-bvoc" className={`${styles.navLink} ${isActive('/degree-bvoc') ? styles.active : ''}`}>Degree B.Voc</Link>
          <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
        </nav>

        <div className={styles.headerActions}>
          <a href="tel:08048052804" className={styles.callButton}>
            <PhoneIcon />
            <span className={styles.callButtonText}>Call Now</span>
          </a>
          <button 
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.mobileNavLink}>Home</Link>
        <Link href="/courses" className={styles.mobileNavLink}>Courses</Link>
        <Link href="/degree-bvoc" className={styles.mobileNavLink}>Degree B.Voc</Link>
        <Link href="/contact" className={styles.mobileNavLink}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;