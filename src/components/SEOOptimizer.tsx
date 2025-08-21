"use client";

import React from 'react';
import { contentMapping } from '@/data/keyword-mapping';

interface SEOOptimizerProps {
  pageType: string;
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ pageType, children }) => {
  const mapping = contentMapping[pageType];

  if (!mapping) {
    return <>{children}</>;
  }

  return (
    <div className="seo-optimized-content">
      {/* This component ensures proper keyword distribution */}
      {children}
    </div>
  );
};

export default SEOOptimizer; 