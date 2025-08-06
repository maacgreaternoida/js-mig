// Keyword Research & Content Mapping Blueprint for MAAC Greater Noida
// This file centralizes all keyword strategies and content mapping

export interface KeywordMapping {
  keyword: string;
  type: 'Primary' | 'Secondary' | 'Long-Tail' | 'Question';
  searchVolume: 'High' | 'Medium' | 'Low';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  targetPage: string;
  contentLocation: string[];
  relatedKeywords: string[];
}

export interface ContentMapping {
  pageType: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  longTailKeywords: string[];
  questionKeywords: string[];
  contentStructure: {
    h1: string;
    h2: string[];
    h3: string[];
    metaDescription: string;
    faqQuestions: string[];
  };
}

// Primary Keywords (Main trophies)
export const primaryKeywords: KeywordMapping[] = [
  {
    keyword: '3D animation course in Greater Noida',
    type: 'Primary',
    searchVolume: 'High',
    difficulty: 'Medium',
    targetPage: '/courses/3d-animation',
    contentLocation: ['H1', 'Opening Paragraph', 'Page Title'],
    relatedKeywords: ['animation institute Greater Noida', '3D animation training Noida', 'MAAC animation course']
  },
  {
    keyword: 'VFX course in Greater Noida',
    type: 'Primary',
    searchVolume: 'High',
    difficulty: 'Medium',
    targetPage: '/courses/vfx-courses',
    contentLocation: ['H1', 'Opening Paragraph', 'Page Title'],
    relatedKeywords: ['visual effects course Noida', 'VFX institute Greater Noida', 'MAAC VFX training']
  },
  {
    keyword: 'game design course in Greater Noida',
    type: 'Primary',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/gaming-courses',
    contentLocation: ['H1', 'Opening Paragraph', 'Page Title'],
    relatedKeywords: ['gaming institute Noida', 'game development course', 'MAAC gaming']
  },
  {
    keyword: 'graphic design course in Greater Noida',
    type: 'Primary',
    searchVolume: 'High',
    difficulty: 'Medium',
    targetPage: '/courses/multimedia-design-courses',
    contentLocation: ['H1', 'Opening Paragraph', 'Page Title'],
    relatedKeywords: ['multimedia course Noida', 'design institute Greater Noida', 'MAAC design course']
  }
];

// Secondary Keywords (Important related terms)
export const secondaryKeywords: KeywordMapping[] = [
  {
    keyword: 'animation institute in Greater Noida',
    type: 'Secondary',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/3d-animation',
    contentLocation: ['Curriculum Section', 'Module Descriptions'],
    relatedKeywords: ['MAAC Greater Noida', 'animation training center', '3D animation institute']
  },
  {
    keyword: 'learn Maya in Noida',
    type: 'Secondary',
    searchVolume: 'Medium',
    difficulty: 'Medium',
    targetPage: '/courses/3d-animation',
    contentLocation: ['Software List', 'Curriculum Section'],
    relatedKeywords: ['Maya training Noida', '3D modeling course', 'Autodesk Maya institute']
  },
  {
    keyword: 'ZBrush course Delhi NCR',
    type: 'Secondary',
    searchVolume: 'Low',
    difficulty: 'Easy',
    targetPage: '/courses/3d-animation',
    contentLocation: ['Software List', 'Specialization Section'],
    relatedKeywords: ['digital sculpting course', 'ZBrush training Noida', '3D character modeling']
  },
  {
    keyword: 'VFX institute Delhi NCR',
    type: 'Secondary',
    searchVolume: 'Medium',
    difficulty: 'Medium',
    targetPage: '/courses/vfx-courses',
    contentLocation: ['About Section', 'Faculty Section'],
    relatedKeywords: ['visual effects institute', 'VFX training center', 'MAAC VFX institute']
  },
  {
    keyword: 'Unity game development course',
    type: 'Secondary',
    searchVolume: 'Medium',
    difficulty: 'Medium',
    targetPage: '/courses/gaming-courses',
    contentLocation: ['Software List', 'Curriculum Section'],
    relatedKeywords: ['Unity training Noida', 'game engine course', 'mobile game development']
  },
  {
    keyword: 'UI UX design course Noida',
    type: 'Secondary',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/multimedia-design-courses',
    contentLocation: ['Course Content', 'Career Options'],
    relatedKeywords: ['user interface design', 'UX design training', 'web design course']
  }
];

// Long-Tail Keywords (Specific, high-intent queries)
export const longTailKeywords: KeywordMapping[] = [
  {
    keyword: 'best 3D animation course after 12th',
    type: 'Long-Tail',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/3d-animation',
    contentLocation: ['Opening Paragraph', 'FAQ Section'],
    relatedKeywords: ['animation course after 12th', 'career in animation', 'animation course eligibility']
  },
  {
    keyword: 'animation course with placement guarantee',
    type: 'Long-Tail',
    searchVolume: 'High',
    difficulty: 'Medium',
    targetPage: '/courses/3d-animation',
    contentLocation: ['Highlights Section', 'FAQ Section'],
    relatedKeywords: ['placement assistance', 'job guarantee', 'career support']
  },
  {
    keyword: 'VFX course with industry projects',
    type: 'Long-Tail',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/vfx-courses',
    contentLocation: ['Course Highlights', 'Project Section'],
    relatedKeywords: ['industry training', 'real projects', 'practical experience']
  },
  {
    keyword: 'game development course with Unity and Unreal',
    type: 'Long-Tail',
    searchVolume: 'Medium',
    difficulty: 'Medium',
    targetPage: '/courses/gaming-courses',
    contentLocation: ['Software List', 'Curriculum Section'],
    relatedKeywords: ['Unity course', 'Unreal Engine training', 'game engine course']
  },
  {
    keyword: 'graphic design course with Adobe Creative Suite',
    type: 'Long-Tail',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/multimedia-design-courses',
    contentLocation: ['Software List', 'Course Content'],
    relatedKeywords: ['Adobe Photoshop course', 'Illustrator training', 'design software course']
  }
];

// Question Keywords (From "People also ask")
export const questionKeywords: KeywordMapping[] = [
  {
    keyword: 'what is the fee for animation course in MAAC?',
    type: 'Question',
    searchVolume: 'High',
    difficulty: 'Easy',
    targetPage: '/courses/3d-animation',
    contentLocation: ['FAQ Section', 'Course Details'],
    relatedKeywords: ['animation course fees', 'MAAC course cost', 'animation training price']
  },
  {
    keyword: 'career options after 3D animation course',
    type: 'Question',
    searchVolume: 'High',
    difficulty: 'Easy',
    targetPage: '/courses/3d-animation',
    contentLocation: ['Career Prospects Section', 'FAQ Section'],
    relatedKeywords: ['animation career', '3D animator jobs', 'animation industry jobs']
  },
  {
    keyword: 'how long is the VFX course at MAAC?',
    type: 'Question',
    searchVolume: 'Medium',
    difficulty: 'Easy',
    targetPage: '/courses/vfx-courses',
    contentLocation: ['Course Duration', 'FAQ Section'],
    relatedKeywords: ['VFX course duration', 'training period', 'course timeline']
  },
  {
    keyword: 'which is better Unity or Unreal for game development?',
    type: 'Question',
    searchVolume: 'Medium',
    difficulty: 'Medium',
    targetPage: '/courses/gaming-courses',
    contentLocation: ['Software Comparison', 'FAQ Section'],
    relatedKeywords: ['Unity vs Unreal', 'game engine comparison', 'mobile vs PC gaming']
  },
  {
    keyword: 'can I learn graphic design without any prior experience?',
    type: 'Question',
    searchVolume: 'High',
    difficulty: 'Easy',
    targetPage: '/courses/multimedia-design-courses',
    contentLocation: ['Eligibility Section', 'FAQ Section'],
    relatedKeywords: ['beginner graphic design', 'no experience required', 'design course for beginners']
  }
];

// Content Mapping for Each Page Type
export const contentMapping: Record<string, ContentMapping> = {
  'homepage': {
    pageType: 'homepage',
    primaryKeywords: ['MAAC Greater Noida', 'animation institute Greater Noida', 'VFX course Noida'],
    secondaryKeywords: ['animation training center', 'visual effects institute', 'game design course'],
    longTailKeywords: ['best animation institute in Delhi NCR', 'animation course with placement'],
    questionKeywords: ['which is the best animation institute in Greater Noida?', 'what courses does MAAC offer?'],
    contentStructure: {
      h1: 'MAAC Greater Noida - Best Animation, VFX & Gaming Institute',
      h2: [
        'Top Animation Courses in Greater Noida',
        'VFX Training Programs',
        'Game Design & Development',
        'Multimedia & Graphic Design',
        'Why Choose MAAC Greater Noida?'
      ],
      h3: [
        '3D Animation Courses',
        'Visual Effects Training',
        'Gaming & Game Development',
        'Graphic Design & Multimedia',
        'Placement Support',
        'Industry Expert Faculty'
      ],
      metaDescription: 'Join MAAC Greater Noida, the leading institute for career courses in 3D Animation, VFX, Game Design, and Multimedia. Get 100% placement support and learn from expert faculty.',
      faqQuestions: [
        'What courses are available at MAAC Greater Noida?',
        'How much does the animation course cost?',
        'Does MAAC provide placement assistance?',
        'What are the career options after completing the course?'
      ]
    }
  },
  '3d-animation': {
    pageType: '3d-animation',
    primaryKeywords: ['3D animation course in Greater Noida', 'animation institute Greater Noida'],
    secondaryKeywords: ['learn Maya in Noida', 'ZBrush course Delhi NCR', '3D modeling training'],
    longTailKeywords: ['best 3D animation course after 12th', 'animation course with placement guarantee'],
    questionKeywords: ['what is the fee for animation course in MAAC?', 'career options after 3D animation course'],
    contentStructure: {
      h1: '3D Animation Course in Greater Noida | MAAC Institute',
      h2: [
        'Complete 3D Animation Filmmaking Process',
        'Industry-Standard Software Training',
        'Hands-on Project-Based Learning',
        'Career Opportunities in Animation',
        'Course Curriculum & Modules'
      ],
      h3: [
        'Pre-production Techniques',
        '3D Modeling & Texturing',
        'Character Animation',
        'Lighting & Rendering',
        'Software Covered',
        'Placement Support'
      ],
      metaDescription: 'Master 3D animation in Greater Noida with MAAC. Learn Maya, ZBrush, and industry-standard software. Get placement assistance and start your animation career.',
      faqQuestions: [
        'What is the duration of the 3D animation course?',
        'Which software will I learn in the animation course?',
        'What are the job opportunities after completing the course?',
        'Is there any placement assistance provided?'
      ]
    }
  },
  'vfx-courses': {
    pageType: 'vfx-courses',
    primaryKeywords: ['VFX course in Greater Noida', 'visual effects institute Delhi NCR'],
    secondaryKeywords: ['VFX institute Delhi NCR', 'compositing course Noida', 'match moving training'],
    longTailKeywords: ['VFX course with industry projects', 'compositing and editing course'],
    questionKeywords: ['how long is the VFX course at MAAC?', 'what software is taught in VFX course?'],
    contentStructure: {
      h1: 'VFX Course in Greater Noida | Visual Effects Training',
      h2: [
        'Comprehensive VFX Pipeline Training',
        'Industry-Standard Software Mastery',
        'Real-World Project Experience',
        'Career in Visual Effects',
        'Advanced VFX Techniques'
      ],
      h3: [
        'Compositing & Editing',
        'Match Moving & Tracking',
        'Particle Effects & Dynamics',
        '3D Integration',
        'Software Training',
        'Industry Projects'
      ],
      metaDescription: 'Learn VFX in Greater Noida with MAAC. Master compositing, match moving, and industry-standard software. Get hands-on experience with real projects.',
      faqQuestions: [
        'What is the duration of the VFX course?',
        'Which VFX software will I learn?',
        'Are there any industry projects included?',
        'What are the career prospects in VFX?'
      ]
    }
  },
  'gaming-courses': {
    pageType: 'gaming-courses',
    primaryKeywords: ['game design course in Greater Noida', 'gaming institute Noida'],
    secondaryKeywords: ['Unity game development course', 'Unreal Engine training Noida'],
    longTailKeywords: ['game development course with Unity and Unreal', 'mobile game development course'],
    questionKeywords: ['which is better Unity or Unreal for game development?', 'can I learn game development without coding?'],
    contentStructure: {
      h1: 'Game Design Course in Greater Noida | Gaming Institute',
      h2: [
        'Complete Game Development Pipeline',
        'Unity & Unreal Engine Training',
        'Mobile Game Development',
        'AR/VR Game Creation',
        'Career in Gaming Industry'
      ],
      h3: [
        'Game Art & Design',
        'Unity Development',
        'Unreal Engine',
        'Mobile Gaming',
        'AR/VR Development',
        'Game Publishing'
      ],
      metaDescription: 'Learn game development in Greater Noida with MAAC. Master Unity, Unreal Engine, and create mobile games. Start your career in the gaming industry.',
      faqQuestions: [
        'Do I need programming knowledge for game development?',
        'Which game engines will I learn?',
        'Can I create mobile games after the course?',
        'What are the job opportunities in gaming?'
      ]
    }
  },
  'multimedia-design-courses': {
    pageType: 'multimedia-design-courses',
    primaryKeywords: ['graphic design course in Greater Noida', 'multimedia course Noida'],
    secondaryKeywords: ['UI UX design course Noida', 'Adobe Creative Suite training'],
    longTailKeywords: ['graphic design course with Adobe Creative Suite', 'web design course Noida'],
    questionKeywords: ['can I learn graphic design without any prior experience?', 'what software is taught in design course?'],
    contentStructure: {
      h1: 'Graphic Design Course in Greater Noida | Multimedia Training',
      h2: [
        'Comprehensive Design Training',
        'Adobe Creative Suite Mastery',
        'Web & UI/UX Design',
        'Print & Digital Media',
        'Career in Design Industry'
      ],
      h3: [
        'Graphic Design Fundamentals',
        'Adobe Photoshop & Illustrator',
        'Web Design & Development',
        'UI/UX Design',
        'Print Design',
        'Digital Marketing'
      ],
      metaDescription: 'Learn graphic design in Greater Noida with MAAC. Master Adobe Creative Suite, web design, and UI/UX. Start your career in the design industry.',
      faqQuestions: [
        'Do I need any prior design experience?',
        'Which Adobe software will I learn?',
        'Can I work as a freelancer after the course?',
        'What are the career options in design?'
      ]
    }
  }
};

// Location-specific keyword variations
export const locationKeywords = {
  'Greater Noida': [
    'animation course Greater Noida',
    'VFX institute Greater Noida',
    'game design course Greater Noida',
    'graphic design course Greater Noida',
    'MAAC Greater Noida'
  ],
  'Noida': [
    'animation course Noida',
    'VFX training Noida',
    'gaming institute Noida',
    'design course Noida',
    'MAAC Noida'
  ],
  'Delhi NCR': [
    'animation institute Delhi NCR',
    'VFX course Delhi NCR',
    'game development Delhi NCR',
    'multimedia course Delhi NCR',
    'MAAC Delhi NCR'
  ]
};

// FAQ Keywords for better content coverage
export const faqKeywords = [
  'animation course fees',
  'VFX course duration',
  'game development salary',
  'graphic design career',
  'placement assistance',
  'course eligibility',
  'software training',
  'industry projects',
  'job opportunities',
  'certification'
];

// Export all keywords for easy access
export const allKeywords = [
  ...primaryKeywords,
  ...secondaryKeywords,
  ...longTailKeywords,
  ...questionKeywords
];

// Helper function to get keywords by type
export const getKeywordsByType = (type: 'Primary' | 'Secondary' | 'Long-Tail' | 'Question') => {
  return allKeywords.filter(keyword => keyword.type === type);
};

// Helper function to get keywords by page
export const getKeywordsByPage = (pageSlug: string) => {
  return allKeywords.filter(keyword => keyword.targetPage.includes(pageSlug));
}; 