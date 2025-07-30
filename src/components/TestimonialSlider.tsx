"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TestimonialSlider.module.css';

interface Testimonial {
  name: string;
  videoId: string;
  description: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { name: 'Shashank', videoId: 'tfyxMYvnhhw', description: 'MAAC Greater Noida transformed my passion for animation into a successful career. The industry-focused curriculum and expert faculty helped me land my dream job at a top animation studio.', rating: 5 },
  { name: 'Pragati', videoId: 'TJlzwZghcuo', description: 'The learning environment is fantastic, and the teachers are incredibly knowledgeable, helpful, and supportive. I highly recommend MAAC for anyone pursuing a career in design.', rating: 5 },
  { name: 'Jatin', videoId: 'tVdMfNHYT9U', description: 'My friend told me about 3D animation from MAAC Noida. I took a demo class and I really liked the guidance here. This place is very creative and has a good learning atmosphere.', rating: 5 },
  { name: 'Prashant Rana', videoId: '0j4rnx_fabc', description: 'I really liked how the Centre Manager guided me, suggesting the perfect course based on my interest. The teachers and seniors are friendly. The overall experience is good.', rating: 5 }
];

const useSlider = (totalItems: number) => {
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [slideDirection, setSlideDirection] = React.useState<'left' | 'right' | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const goTo = React.useCallback((index: number) => {
    if (index === current) {
        if(isPlaying) setIsPlaying(false);
        return;
    };
    
    setIsPlaying(false);
    setSlideDirection(index > current ? 'right' : 'left');
    setTimeout(() => {
      setCurrent(index);
      setSlideDirection(null);
    }, 150);
  }, [current, isPlaying]);

  const next = React.useCallback(() => goTo((current + 1) % totalItems), [current, totalItems, goTo]);
  const prev = React.useCallback(() => goTo((current - 1 + totalItems) % totalItems), [current, totalItems, goTo]);
  
  React.useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPlaying) {
      timerRef.current = setInterval(next, 5000);
    }
    return () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, next]);

  return { current, isPlaying, slideDirection, goTo, next, prev, setIsPlaying };
};

const TestimonialSlider: React.FC = () => {
  const { current, isPlaying, slideDirection, goTo, next, prev, setIsPlaying } = useSlider(testimonials.length);
  const currentTestimonial = testimonials[current];

  const getYouTubeThumbnail = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const getYouTubeEmbedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0`;

  const handlePlayVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
  };

  const getSlideClassName = () => {
    if (slideDirection === 'left') return styles.slideOutLeft;
    if (slideDirection === 'right') return styles.slideOutRight;
    return styles.slideIn;
  };

  return (
    <section className={styles.modernTestimonialSection}>
      <div className={styles.testimonialBgEffects}></div>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialHeader}>
          <h2 className={styles.testimonialMainTitle}>
            <span className={styles.titleLine1}>Hear From Our</span>
            <span className={styles.titleLine2}>Successful Students</span>
          </h2>
        </div>

        <div className={styles.sliderWrapper}>
          <div className={styles.modernTestimonialCard}>
            <div key={current} className={`${styles.testimonialContent} ${getSlideClassName()}`}>
              <div className={styles.testimonialVideoSection}>
                {isPlaying ? (
                  <div className={styles.videoPlayer}>
                    <iframe src={getYouTubeEmbedUrl(currentTestimonial.videoId)} title="Testimonial Video Player" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                  </div>
                ) : (
                  <div className={styles.videoThumbnail} onClick={handlePlayVideo}>
                    <Image src={getYouTubeThumbnail(currentTestimonial.videoId)} alt={`Thumbnail for ${currentTestimonial.name}'s testimonial`} fill sizes="(max-width: 768px) 90vw, 40vw" style={{ objectFit: 'cover' }} priority={current === 0} />
                    <div className={styles.playButton}>▶</div>
                  </div>
                )}
              </div>
              <div className={styles.testimonialInfoSection}>
                <h3 className={styles.studentName}>{currentTestimonial.name}</h3>
                <div className={styles.ratingStars}>{'⭐'.repeat(currentTestimonial.rating)}</div>
                <div className={styles.testimonialQuote}>
                  <p className={styles.quoteText}>“{currentTestimonial.description}”</p>
                </div>
              </div>
            </div>
          </div>
          <button className={`${styles.navArrow} ${styles.navPrev}`} onClick={prev} aria-label="Previous testimonial">‹</button>
          <button className={`${styles.navArrow} ${styles.navNext}`} onClick={next} aria-label="Next testimonial">›</button>
        </div>

        {/* AESTHETIC: New Dot Navigation */}
        <div className={styles.testimonialIndicators}>
          {testimonials.map((_, index) => (
            <button key={index} className={`${styles.indicator} ${index === current ? styles.active : ''}`} onClick={() => goTo(index)} aria-label={`Go to testimonial ${index + 1}`}>
              {index === current && <div key={current} className={styles.indicatorProgress}></div>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;