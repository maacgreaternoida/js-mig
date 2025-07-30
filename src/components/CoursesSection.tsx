"use client"; // This component uses hooks for interaction, so it's a client component.

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CoursesSection.module.css';

// Define the shape of our course category data with TypeScript.
interface CourseCategory {
  name: string;
  slug: string;
  iconImage: string;
  description: string;
}

// Data for the course categories.
const courseCategories: CourseCategory[] = [
  { name: '3D Animation', slug: '3d-animation', iconImage: '/courses-img/3d-animation-gif.webp', description: 'Master the art of 3D animation and filmmaking.' },
  { name: 'VFX Courses', slug: 'vfx-courses', iconImage: '/courses-img/vfx-icon.webp',  description: 'Create stunning visual effects for films and games.' },
  { name: 'Gaming Courses', slug: 'gaming-courses', iconImage: '/courses-img/gaming-icon.webp', description: 'Design and develop immersive gaming experiences.' },
  { name: 'Multimedia & Design', slug: 'multimedia-design-courses', iconImage: '/courses-img/ui-ux-icon.webp', description: 'Build beautiful digital designs and user interfaces.' },
  { name: 'Short Term Courses', slug: 'short-term-courses', iconImage: '/courses-img/short-term.webp', description: 'Quickly learn new skills with our specialized programs.' },
];

const CoursesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // This effect uses the IntersectionObserver API to detect when the component is visible on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.modernCoursesSection} ref={sectionRef}>
      {/* OPTIMIZATION: Removed JS-driven particles for a lightweight CSS-only background. */}
      <div className={styles.coursesBgEffects}>
        <div className={styles.coursesGradientMesh}></div>
      </div>

      <div className={styles.coursesContainer}>
        {/* Section Header */}
        <div className={`${styles.coursesHeader} ${isVisible ? styles.animate : ''}`}>
          <div className={styles.headerBadge}>Our Programs</div>
          <h2 className={styles.coursesMainTitle}>
            <span className={styles.titleLine1}>Kickstart Your Career</span>
            <span className={styles.titleLine2}>With MAAC Courses</span>
          </h2>
          <p className={styles.coursesMainSubtitle}>
            Discover world-class programs designed to transform your passion into a successful career.
          </p>
          <div className={styles.titleDecorations}>
            <div className={styles.decorationLine}></div>
            <div className={styles.decorationDot}></div>
            <div className={styles.decorationLine}></div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className={styles.modernCoursesGrid}>
          {courseCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/courses/${category.slug}`}
              className={`${styles.modernCourseCard} ${isVisible ? styles.animate : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={category.iconImage} 
                  alt={`${category.name} course`} 
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className={styles.cardBackgroundImage} 
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{category.name}</h3>
                <p className={styles.cardDescription}>{category.description}</p>
                <span className={styles.cardCta}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className={`${styles.coursesCta} ${isVisible ? styles.animate : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaSubtitle}>
              Join thousands of successful students and transform your passion into a thriving career.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>Get Started Now</Link>
              <Link href="/courses" className={styles.ctaSecondary}>View All Courses</Link>
            </div>
          </div>
          <div className={styles.statsCards}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Course Options</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Students Trained</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Placement Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;