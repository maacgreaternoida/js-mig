"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './CourseCategoryPage.module.css';
import type { CourseCategory } from '@/data/course-data';

// --- Main Client Component ---
const CourseCategoryPageClient: React.FC<{ category: CourseCategory }> = ({ category }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'all') {
      return category.courses;
    }
    return category.courses.filter(course => course.level.toLowerCase() === activeFilter);
  }, [activeFilter, category.courses]);

  // The JavaScript animation hook has been removed for SEO.

  return (
    <div className={styles.modernCategoryPage}>
      {/* Hero Section */}
      <section className={styles.categoryHero}>
        <div className={styles.categoryHeroBg}></div>
        <div className={`${styles.container} ${styles.categoryHeroContent}`}>
          <Link href="/courses" className={styles.breadcrumbLink}>← All Courses</Link>
          <h1 className={styles.categoryHeroTitle}>
            <span className={styles.titleMain}>{category.name}</span>
            <span className={styles.titleSubtitle}>Courses</span>
          </h1>
          <p className={styles.categoryHeroDescription}>{category.description}</p>
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
    </div>
  );
};

export default CourseCategoryPageClient;