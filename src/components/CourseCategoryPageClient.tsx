"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './CourseCategoryPage.module.css';
import type { CourseCategory } from '@/data/course-data';
import FAQSection from './FAQSection';
import { getFAQsByCategory } from '@/data/faq-data';

// --- Main Client Component ---
const CourseCategoryPageClient: React.FC<{ category: CourseCategory }> = ({ category }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'all') {
      return category.courses;
    }
    return category.courses.filter(course => course.level.toLowerCase() === activeFilter);
  }, [activeFilter, category.courses]);

  // All animation-related JavaScript and classes have been removed.

  const getCategoryTagline = (slug: string, name: string) => {
    switch (slug) {
      case 'vfx-courses':
        return 'Visual Effects Training in Delhi NCR';
      case 'gaming-courses':
        return 'Game Design & Development in Delhi NCR';
      case 'short-term-courses':
        return 'Short-Term Job-Oriented Programs';
      case '3d-animation':
        return '3D Animation Training in Delhi NCR';
      case 'multimedia-design-courses':
        return 'Graphic, Web & UI/UX Design in Delhi NCR';
      default:
        return `${name} Programs`;
    }
  };

  return (
    <div className={styles.modernCategoryPage}>
      {/* Hero Section */}
      <section className={styles.categoryHero}>
        <div className={styles.categoryHeroBg}></div>
        <div className={`${styles.container} ${styles.categoryHeroContent}`}>
          <Link href="/courses" className={styles.breadcrumbLink}>← All Courses</Link>
          <h1 className={styles.categoryHeroTitle}>
            <span className={styles.titleMain}>{category.name}</span>
            <span className={styles.titleSubtitle}>{getCategoryTagline(category.slug, category.name)}</span>
          </h1>
          <p className={styles.categoryHeroDescription}>
            {category.description} These are job-oriented {category.name.toLowerCase()} programs designed for students from Greater Noida, Noida, Ghaziabad and across Delhi NCR.
          </p>
          {category.slug === '3d-animation' && (
            <p className={styles.categoryHeroDescription}>Looking for the best animation courses in Delhi NCR? Our 3D Animation programs cover Maya, ZBrush and production-ready workflows with placement support.</p>
          )}
          {category.slug === 'vfx-courses' && (
            <p className={styles.categoryHeroDescription}>Train on industry tools like Nuke, Fusion and Houdini. Ideal for students searching for VFX course in Noida and Delhi NCR with studio-focused training.</p>
          )}
          {category.slug === 'gaming-courses' && (
            <p className={styles.categoryHeroDescription}>Master Unity and Unreal Engine with modules for mobile and PC/console development. A strong fit for “game design course in Greater Noida/Noida”.</p>
          )}
          {category.slug === 'multimedia-design-courses' && (
            <p className={styles.categoryHeroDescription}>Graphic design, web design and UI/UX courses for Delhi NCR aspirants—covering Photoshop, Illustrator, Figma and responsive web.</p>
          )}
          {category.slug === 'short-term-courses' && (
            <p className={styles.categoryHeroDescription}>Explore short-term job-oriented courses in animation, VFX, and design to upskill fast in Delhi NCR.</p>
          )}
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{category.courses.length}</div>
              <div className={styles.statLabel}>Courses Available</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Students Placed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.courseFilters}>
        <div className={styles.container}>
          <div className={styles.filterTabs}>
            {['all', 'foundation', 'intermediate', 'advanced'].map(filter => (
              <button
                key={filter}
                className={`${styles.filterTab} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className={styles.coursesShowcase}>
        <div className={styles.container}>
          <div className={styles.coursesGrid}>
            {filteredCourses.map((course) => (
              <div key={course.slug} className={styles.modernCourseCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.courseTitle}>{course.name}</h3>
                    <div className={styles.courseMeta}>
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <p className={styles.courseDescription}>{course.description}</p>
                  <ul className={styles.courseHighlights}>
                    {course.highlights.map(hl => <li key={hl}>{hl}</li>)}
                  </ul>
                </div>
                <Link href={`/courses/${category.slug}/${course.slug}`} className={styles.courseCtaBtn}>
                  Explore Course →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.categoryCtaSection}>
        <div className={styles.container}>
          <h2>Ready to Start Your {category.name} Journey?</h2>
          <p>Join thousands of successful students who have transformed their passion into a thriving career.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Apply Now</Link>
            <a href="/brochure.pdf" download className={styles.ctaSecondary}>Download Brochure</a>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section for Category - reuse global FAQSection styles */}
      <section className={styles.categoryFaqSection}>
        <div className={styles.container}>
          <FAQSection 
            faqs={getFAQsByCategory(category.slug).slice(0, 3)} 
            title={`FAQs: ${category.name} Courses in Delhi NCR`} 
            subtitle={`Get answers to common questions about ${category.name.toLowerCase()} training at MAAC Greater Noida`}
          />
        </div>
      </section>
    </div>
  );
};

export default CourseCategoryPageClient;