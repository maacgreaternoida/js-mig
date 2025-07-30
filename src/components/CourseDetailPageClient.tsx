"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CourseDetailPage.module.css';
import type { Course, CourseCategory } from '@/data/course-data';

interface CourseDetailProps {
  category: CourseCategory;
  course: Course;
}

const CourseDetailPageClient: React.FC<CourseDetailProps> = ({ category, course }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      sectionRefs.current[section.id] = section as HTMLElement;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'software', label: 'Software' },
    { id: 'careers', label: 'Careers' },
  ];
  if (course.specializations && course.specializations.length > 0) {
    navLinks.push({ id: 'specializations', label: 'Specializations' });
  }

  return (
    <div className={styles.courseDetailPage}>
      {/* Hero Section */}
      <header className={styles.courseHero}>
        <div className={styles.container}>
          <Link href={`/courses/${category.slug}`} className={styles.breadcrumbLink}>
            ← Back to {category.name}
          </Link>
          <h1 className={styles.courseHeroTitle}>{course.fullName || course.name}</h1>
          <p className={styles.courseHeroDescription}>{course.description}</p>
          <div className={styles.courseMeta}>
            <span className={styles.metaBadge}>{course.level}</span>
            <span className={styles.metaBadge}>{course.duration}</span>
          </div>
        </div>
      </header>

      {/* Main Content with Sticky Nav */}
      <div className={styles.mainContentWrapper}>
        <div className={styles.container}>
          <div className={styles.layoutGrid}>
            <aside className={styles.stickyNav}>
              <nav>
                {navLinks.map(link => (
                  <a 
                    key={link.id} 
                    href={`#${link.id}`} 
                    className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </aside>

            <main className={styles.courseContent}>
              <section id="overview" className={styles.contentSection}>
                <h2>Course Highlights</h2>
                <ul className={styles.highlightsList}>
                  {course.highlights.map(hl => <li key={hl}>{hl}</li>)}
                </ul>
              </section>

              <section id="curriculum" className={styles.contentSection}>
                <h2>Course Curriculum</h2>
                <div className={styles.curriculumGrid}>
                  {course.courseContents.map(content => (
                    <div key={content.category} className={styles.curriculumCard}>
                      <h3>{content.category}</h3>
                      <ul>{content.items.map(item => <li key={item}>{item}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="software" className={styles.contentSection}>
                <h2>Software Covered</h2>
                <div className={styles.softwareGrid}>
                  {course.softwareCovered.map(sw => (
                    <div key={sw.name} className={styles.softwareCard}>
                      {sw.icon && <Image src={sw.icon} alt={`${sw.name} logo`} width={40} height={40} />}
                      <span>{sw.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="careers" className={styles.contentSection}>
                <h2>Career Options</h2>
                <div className={styles.careerTags}>
                  {course.careerOptions.map(career => <span key={career} className={styles.careerTag}>{career}</span>)}
                </div>
              </section>

              {course.specializations && course.specializations.length > 0 && (
                <section id="specializations" className={styles.contentSection}>
                  <h2>Specializations</h2>
                  <div className={styles.specializationsGrid}>
                    {course.specializations.map(spec => (
                      <div key={spec.name} className={styles.specializationCard}>
                        <h3>{spec.name}</h3>
                        <p>{spec.description}</p>
                        <h4>Skills Covered:</h4>
                        <ul>{spec.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
                        <h4>Software:</h4>
                        <div className={styles.specSoftwareTags}>
                          {spec.software.map(s => <span key={s}>{s}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPageClient;