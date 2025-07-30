"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CoursesPage.module.css';

// --- TypeScript Interfaces ---
interface Course {
  name: string;
  slug: string;
}

interface CourseCategory {
  name: string;
  slug: string;
  description: string;
  iconImage: string;
  color: string;
  gradient: string;
  totalCourses: number;
  courses: Course[];
}

interface CoursesPageClientProps {
  courseCategories: CourseCategory[];
  totalCourses: number;
}

// --- Animation Hook ---
// A simple hook for fade-in animations on scroll
const useAnimateOnScroll = () => {
    const observer = useRef<IntersectionObserver | null>(null);
  
    useEffect(() => {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
              observer.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const elements = document.querySelectorAll(`.${styles.animatable}`);
      elements.forEach(el => observer.current?.observe(el));
  
      return () => observer.current?.disconnect();
    }, []);
};

// --- Main Component ---
const CoursesPageClient: React.FC<CoursesPageClientProps> = ({ courseCategories, totalCourses }) => {
    useAnimateOnScroll(); // Activate the animation hook

  return (
    <div className={styles.modernCoursesPage}>
      {/* Hero Section */}
      <section className={styles.coursesHero}>
        <div className={styles.coursesHeroBg}></div>
        <div className={`${styles.coursesHeroContent} ${styles.animatable}`}>
          <h1 className={styles.coursesHeroTitle}>
            <span className={styles.titleLine1}>COURSES AT</span>
            <span className={styles.titleLine2}>MAAC</span>
          </h1>
          <p className={styles.coursesHeroDescription}>
            Discover world-class programs designed to transform your passion into a successful career. Learn from industry experts and master the tools used by professionals worldwide.
          </p>
          <div className={styles.heroStatsGrid}>
            <div className={styles.heroStatItem}><div className={styles.statNumber}>{totalCourses}+</div><div className={styles.statLabel}>Courses</div></div>
            <div className={styles.heroStatItem}><div className={styles.statNumber}>5000+</div><div className={styles.statLabel}>Students Placed</div></div>
            <div className={styles.heroStatItem}><div className={styles.statNumber}>20+</div><div className={styles.statLabel}>Industry Tools</div></div>
            <div className={styles.heroStatItem}><div className={styles.statNumber}>100%</div><div className={styles.statLabel}>Placement Aid</div></div>
          </div>
        </div>
      </section>

      {/* Course Categories Grid */}
      <section className={styles.coursesCategoriesSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animatable}`}>
            <h2 className={styles.sectionTitle}>Choose Your Path</h2>
            <p className={styles.sectionSubtitle}>Select from our comprehensive range of industry-focused programs</p>
          </div>
          <div className={styles.categoriesGrid}>
            {courseCategories.map((category, index) => (
              <div key={category.slug} className={`${styles.categoryCard} ${styles.animatable}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.cardContent}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIcon}>
                      <Image src={category.iconImage} alt={`${category.name} icon`} width={40} height={40} />
                    </div>
                    <div className={styles.categoryBadge}>{category.totalCourses} Courses</div>
                  </div>
                  <h3 className={styles.categoryTitle}>{category.name}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <div className={styles.courseList}>
                    {category.courses.slice(0, 3).map((course) => (
                      <Link key={course.slug} href={`/courses/${category.slug}/${course.slug}`} className={styles.courseQuickLink}>
                        {course.name}
                      </Link>
                    ))}
                    {category.courses.length > 3 && (
                        <div className={styles.moreCoursesIndicator}>
                            +{category.courses.length - 3} more
                        </div>
                    )}
                  </div>
                </div>
                <Link href={`/courses/${category.slug}`} className={styles.categoryFooter}>
                  <span>View All {category.name} Courses</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MAAC Section */}
      <section className={styles.whyChooseMaacSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animatable}`}>
            <h2 className={styles.sectionTitle}>Why Choose MAAC?</h2>
            <p className={styles.sectionSubtitle}>India&apos;s leading animation and multimedia institute</p>
          </div>
          <div className={styles.featuresShowcase}>
            <div className={`${styles.featureItem} ${styles.animatable}`} style={{animationDelay: '0s'}}><div className={styles.featureIcon}>🏆</div><h3 className={styles.featureTitle}>Award-Winning Institute</h3><p className={styles.featureDesc}>Recognized as India&apos;s premier animation and multimedia training institute.</p></div>
            <div className={`${styles.featureItem} ${styles.animatable}`} style={{animationDelay: '0.1s'}}><div className={styles.featureIcon}>👨‍🏫</div><h3 className={styles.featureTitle}>Expert Faculty</h3><p className={styles.featureDesc}>Learn from industry professionals with years of experience in top studios.</p></div>
            <div className={`${styles.featureItem} ${styles.animatable}`} style={{animationDelay: '0.2s'}}><div className={styles.featureIcon}>💼</div><h3 className={styles.featureTitle}>100% Placement Support</h3><p className={styles.featureDesc}>Dedicated placement cell with strong industry connections for your career.</p></div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.coursesCtaSection}>
        <div className={`${styles.container} ${styles.animatable}`}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Creative Journey?</h2>
            <p>Join thousands of successful students and transform your passion into a thriving career.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>Apply Now</Link>
              <a href="/brochure.pdf" download className={styles.ctaSecondary}>Download Brochure</a>
              <Link href="/contact#contact-form" className={styles.ctaTertiary}>Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPageClient;