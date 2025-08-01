"use client";

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const ClientVideoPlayer: React.FC = () => {
  const [videoHasError, setVideoHasError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Load video after initial render to prevent blocking LCP
    const timer = setTimeout(() => setShouldLoadVideo(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Poster image that shows while video loads or if video has error */}
      {(!shouldLoadVideo || !videoLoaded || videoHasError) && (
        <img
          src="/hero-poster.webp"
          alt="Hero Poster"
          className={styles.heroBgVideo}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      )}
      
      {/* Video element - only render if shouldLoadVideo is true and no error */}
      {shouldLoadVideo && !videoHasError && (
        <video
          className={styles.heroBgVideo}
          src="/hero-video.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoHasError(true)}
        />
      )}
    </>
  );
};

export default ClientVideoPlayer; 