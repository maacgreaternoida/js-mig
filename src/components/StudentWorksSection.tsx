"use client"; // This component needs client-side JS for the drag-to-scroll feature.

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './StudentWorksSection.module.css';

const works = [
  'https://maacgreaternoida.b-cdn.net/student-works/sw-1.jpg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-2.jpg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-3.jpg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-4.jpg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-5.jpeg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-6.jpeg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-7.jpeg',
  'https://maacgreaternoida.b-cdn.net/student-works/sw-8.jpeg',
];

const StudentWorksSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Use refs to store drag state to prevent re-renders on move, improving performance.
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const element = scrollRef.current;
    // The drag feature is only for mobile/tablet view.
    if (!element || window.innerWidth > 768) return;

    isDown.current = true;
    setIsDragging(true);

    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    startX.current = pageX - element.offsetLeft;
    scrollLeft.current = element.scrollLeft;
  }, []);

  const handleMouseLeaveOrUp = useCallback(() => {
    // Only apply this logic on mobile/tablet.
    if (window.innerWidth > 768) return;

    isDown.current = false;
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const element = scrollRef.current;
    // Only scroll if dragging on a mobile/tablet viewport.
    if (!isDown.current || !element || window.innerWidth > 768) return;

    // This prevents the default text selection behavior while dragging.
    if (e.type === 'mousemove') {
        (e as React.MouseEvent).preventDefault();
    }

    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - element.offsetLeft;
    const walk = (x - startX.current) * 2; // The multiplier makes scrolling faster.
    element.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <section className={styles.studentWorksSection}>
      <div className={styles.studentWorksHeader}>
        <h2 className={styles.studentWorksTitle}>
          <span className={styles.titleLine1}>Our Students'</span>
          <span className={styles.titleLine2}>Creative Showcase</span>
        </h2>
        <p className={styles.studentWorksSubtitle}>
          Explore the incredible projects crafted by our talented students.
        </p>
      </div>
      
      <div
        ref={scrollRef}
        className={`${styles.worksContainer} ${isDragging ? styles.isDragging : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseLeaveOrUp}
        onTouchMove={handleMouseMove}
      >
        <div className={styles.marqueeWrapper}>
            {/* Track 1 */}
            <div className={styles.worksTrack}>
              {works.map((workUrl, index) => (
                <div className={styles.workItem} key={`track1-${index}`}>
                  <Image
                    src={workUrl}
                    alt={`Student work example ${index + 1}`}
                    width={400}
                    height={250}
                    className={styles.workImage}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            {/* Track 2 (for seamless loop on desktop) */}
            <div className={styles.worksTrack} aria-hidden="true">
              {works.map((workUrl, index) => (
                <div className={styles.workItem} key={`track2-${index}`}>
                  <Image
                    src={workUrl}
                    alt={`Student work example ${index + 1}`}
                    width={400}
                    height={250}
                    className={styles.workImage}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
        </div>
      </div>
       <div className={styles.mobileHint}>
        <span className={styles.hintIcon}>‹</span> Drag to explore <span className={styles.hintIcon}>›</span>
      </div>
    </section>
  );
};

export default StudentWorksSection;