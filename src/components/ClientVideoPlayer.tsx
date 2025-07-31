"use client";

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const ClientVideoPlayer: React.FC = () => {
  const [videoHasError, setVideoHasError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Load video after initial render to prevent blocking LCP
    const timer = setTimeout(() => setShouldLoadVideo(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoadVideo || videoHasError) {
    return null;
  }

  return (
    <video
      className={styles.heroBgVideo}
      src="/hero-video.webm"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      onError={() => setVideoHasError(true)}
    />
  );
};

export default ClientVideoPlayer; 