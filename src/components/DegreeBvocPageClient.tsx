"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DegreeBvocPage.module.css';

const DegreeBvocPageClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 150; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'audience', label: 'Who Can Apply' },
    { id: 'university', label: 'University' },
    { id: 'admission', label: 'Admission' },
  ];

  return (
    <div className={styles.bvocDegreePage}>
      <section className={styles.bvocHero}>
        <div className={styles.bvocHeroBg}></div>
        <div className={styles.bvocHeroContent}>
          <h1 className={styles.bvocHeroTitle}><span className={styles.titleLine1}>B.VOC</span><span className={styles.titleLine2}>PROGRAM</span></h1>
          <p className={styles.bvocHeroSubtitle}>Bachelor of Vocation in Animation & VFX</p>
          <div className={styles.bvocHeroBadges}>
            <span className={styles.badge}>UGC Certified</span>
            <span className={styles.badge}>3 Years Program</span>
            <span className={styles.badge}>Industry Aligned</span>
          </div>
          <Link href="/contact" className={styles.ctaButton}>Apply Now</Link>
        </div>
      </section>

      <nav className={styles.bvocNav}>
        <div className={styles.navContainer}>
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => {
                setActiveTab(link.id);
                handleNavClick(e, link.id);
              }} 
              className={`${styles.navLink} ${activeTab === link.id ? styles.active : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.container}>
            <section id="overview" data-section className={styles.contentSection}>
              <div className={styles.sectionGrid}>
                <div className={styles.contentText}>
                  <h2>About B.Voc Program</h2>
                  <p>The Bachelor of Vocation (B.Voc.) program has been launched by UGC to integrate industry-relevant skills into higher education, creating a perfect bridge between academic learning and professional requirements.</p>
                  <h3>Program Structure</h3>
                  <div className={styles.structureItems}>
                    <div className={styles.structureItem}><span>📋</span><div><h4>UG Certificate</h4><p>1 Year Program</p></div></div>
                    <div className={styles.structureItem}><span>🎓</span><div><h4>UG Diploma</h4><p>2 Years Program</p></div></div>
                    <div className={styles.structureItem}><span>🏆</span><div><h4>B.Voc Degree</h4><p>3 Years Program</p></div></div>
                  </div>
                </div>
                <div className={styles.contentVisual}>
                  <h3>Key Features</h3>
                  <ul>
                    <li>Based on NSQF, CBCS and industry needs for flexible, modular structure</li>
                    <li>Focuses on human-centric learning and entrepreneurship</li>
                    <li>Multiple entry and exit points for maximum flexibility</li>
                    <li>Holistic development approach</li>
                    <li>Job-ready, skilled graduates aligned with national employment goals</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section id="benefits" data-section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Benefits of B.Voc Program</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}><span>💼</span><h3>Job-Ready Skills</h3><p>Combines job-related skills with general education for complete professional development.</p></div>
                <div className={styles.benefitCard}><span>🏭</span><h3>Industry Alignment</h3><p>Follows the NSQF system to match industry skill needs and requirements.</p></div>
                <div className={styles.benefitCard}><span>🛠️</span><h3>Practical Training</h3><p>Focuses on practical training and real job knowledge for immediate application.</p></div>
                <div className={styles.benefitCard}><span>📈</span><h3>Enhanced Employability</h3><p>Helps improve employability and job opportunities in competitive markets.</p></div>
                <div className={styles.benefitCard}><span>🔄</span><h3>Flexible Learning</h3><p>Offers flexibility with multiple entry and exit points for diverse career paths.</p></div>
                <div className={styles.benefitCard}><span>🌍</span><h3>Global Opportunities</h3><p>Prepares students for local, national & international job markets.</p></div>
              </div>
            </section>

            <section id="audience" data-section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Who Can Apply?</h2>
              <div className={styles.audienceGrid}>
                <div className={styles.audienceCard}><span>🎓</span><h3>Class 12th Graduates</h3><p>Students who have completed Class 12th and are creatively inclined.</p></div>
                <div className={styles.audienceCard}><span>🎨</span><h3>Arts & Design Graduates</h3><p>Graduates from arts, design, IT, and media-related streams.</p></div>
                <div className={styles.audienceCard}><span>💡</span><h3>Creative Aspirants</h3><p>Passionate aspirants looking for careers in animation, VFX, and gaming.</p></div>
              </div>
            </section>

            <section id="university" data-section className={styles.contentSection}>
              <div className={styles.universityHeader}><h2 className={styles.sectionTitle}>Global Skills University</h2><p className={styles.universitySubtitle}>Central India&apos;s 1st NEP & NSQF-aligned Skills University, Bhopal (Est. 2023)</p></div>
              <div className={styles.universityHighlights}>
                <div className={styles.highlightItem}><span>🏛️</span><div><h4>AISECT Group Legacy</h4><p>Part of the AISECT Group - 40 years of excellence in skill-based education.</p></div></div>
                <div className={styles.highlightItem}><span>📚</span><div><h4>Comprehensive Programs</h4><p>Offers UG, PG & Ph.D. programs across 15+ future-focused faculties.</p></div></div>
                <div className={styles.highlightItem}><span>🏭</span><div><h4>Industry Training</h4><p>Industry-ready training via expert-led teaching, labs, & internships.</p></div></div>
                <div className={styles.highlightItem}><span>✅</span><div><h4>UGC Accredited</h4><p>UGC-accredited with apprenticeship-embedded degree programs.</p></div></div>
              </div>
            </section>
            
            <section id="admission" data-section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Ready to Start Your Journey?</h2>
              <div className={styles.admissionCard}>
                <h3>Admission Process</h3>
                <div className={styles.processSteps}>
                  <div className={styles.step}><div className={styles.stepNumber}>1</div><div><h4>Application</h4><p>Submit your application with required documents.</p></div></div>
                  <div className={styles.step}><div className={styles.stepNumber}>2</div><div><h4>Assessment</h4><p>Portfolio review and aptitude assessment.</p></div></div>
                  <div className={styles.step}><div className={styles.stepNumber}>3</div><div><h4>Interview</h4><p>Personal interview with faculty members.</p></div></div>
                  <div className={styles.step}><div className={styles.stepNumber}>4</div><div><h4>Enrollment</h4><p>Complete enrollment and begin your journey.</p></div></div>
                </div>
              </div>
            </section>
        </div>
      </main>
    </div>
  );
};

export default DegreeBvocPageClient;