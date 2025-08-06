// FAQ Data for SEO Optimization
// This file contains FAQ questions and answers targeting question keywords

export interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export const faqData: Record<string, FAQItem[]> = {
  '3d-animation': [
    {
      question: "What is the fee for animation course in MAAC?",
      answer: "The animation course fees at MAAC Greater Noida vary based on the program. Our AD3D EDGE Plus program costs ₹1,50,000, the D3D program is ₹1,20,000, and the DAFM program is ₹80,000. We also offer flexible payment plans and scholarships for deserving students. Contact us for detailed pricing information and available discounts.",
      keywords: ["animation course fees", "MAAC course cost", "animation training price", "3D animation course cost"],
      category: "fees"
    },
    {
      question: "What are the career options after 3D animation course?",
      answer: "After completing our 3D animation course in Greater Noida, you can work as a 3D Modeling Artist, Character Animator, Lighting Artist, Texture Artist, Render Artist, Layout Artist, Digital Sculpting Artist, Rigging Artist, Video Editor, Motion Graphics Artist, FX Artist, Game Artist, 3D Generalist, or 3D Visualizer in animation studios, gaming companies, VFX firms, and advertising agencies.",
      keywords: ["animation career", "3D animator jobs", "animation industry jobs", "career after animation course"],
      category: "career"
    },
    {
      question: "Which software will I learn in the animation course?",
      answer: "In our 3D animation course in Greater Noida, you'll learn industry-standard software including Autodesk Maya, Autodesk 3ds Max, ZBrush, Adobe Photoshop, Adobe After Effects, Adobe Premiere, Adobe Audition, Unreal Engine, VRay, Adobe Substance 3D Painter, Autodesk MotionBuilder, Fusion, and Autodesk Mudbox. These are the same tools used by professionals in the animation industry.",
      keywords: ["animation software", "Maya training", "ZBrush course", "3D animation software"],
      category: "software"
    },
    {
      question: "What is the duration of the 3D animation course?",
      answer: "Our 3D animation courses in Greater Noida have different durations: AD3D EDGE Plus is 24 months, D3D program is 18 months, and DAFM program is 12 months. The duration depends on the depth of training and the level of expertise you want to achieve. All programs include hands-on projects and industry training.",
      keywords: ["animation course duration", "3D animation training period", "course timeline"],
      category: "duration"
    },
    {
      question: "Is there any placement assistance provided?",
      answer: "Yes, MAAC Greater Noida provides 100% placement assistance to all our animation course students. We have tie-ups with leading animation studios, gaming companies, and VFX firms. Our placement cell helps with resume building, interview preparation, and job placement. Many of our students are working in top companies in Delhi NCR and across India.",
      keywords: ["placement assistance", "job guarantee", "career support", "animation job placement"],
      category: "placement"
    },
    {
      question: "Can I learn 3D animation without any prior experience?",
      answer: "Absolutely! Our 3D animation courses in Greater Noida are designed for beginners. We start from the fundamentals and gradually progress to advanced techniques. No prior experience in animation or design is required. Our expert faculty will guide you through every step of the learning process.",
      keywords: ["beginner animation", "no experience required", "animation course for beginners"],
      category: "eligibility"
    }
  ],
  'vfx-courses': [
    {
      question: "How long is the VFX course at MAAC?",
      answer: "Our VFX courses in Greater Noida have different durations: ADVFX PLUS is 576 hours, VFX Plus is 432 hours, and Compositing & Editing Plus is 240 hours. The duration is designed to give you comprehensive training in visual effects while maintaining a balance with practical projects and industry exposure.",
      keywords: ["VFX course duration", "visual effects training period", "VFX course timeline"],
      category: "duration"
    },
    {
      question: "Which VFX software will I learn?",
      answer: "In our VFX courses in Greater Noida, you'll learn industry-standard software including Nuke, Fusion, Mocha, Silhouette, 3D Equalizer, Real Flow, Vue, Houdini, Adobe After Effects, Adobe Premiere, Adobe Photoshop, Autodesk Maya, and Autodesk 3ds Max. These are the same tools used in Hollywood movies and international VFX projects.",
      keywords: ["VFX software", "compositing software", "visual effects tools"],
      category: "software"
    },
    {
      question: "Are there any industry projects included?",
      answer: "Yes, our VFX courses in Greater Noida include real industry projects. You'll work on actual VFX shots, compositing projects, and visual effects sequences. We also organize workshops with industry professionals and studio visits to give you hands-on experience with real-world projects.",
      keywords: ["industry projects", "real projects", "practical experience", "VFX industry training"],
      category: "projects"
    },
    {
      question: "What are the career prospects in VFX?",
      answer: "After completing our VFX course in Greater Noida, you can work as a Compositor, Match Moving Artist, FX Artist, Motion Graphics Artist, Roto Artist, Clean-up Artist, BG Prep Artist, Paint Artist, VFX Generalist, Stereoscopy Artist, Depth Artist, Video Editor, Pre-Viz Artist, or Camera Tracker in film studios, VFX companies, and advertising agencies.",
      keywords: ["VFX career", "visual effects jobs", "compositor jobs", "VFX industry careers"],
      category: "career"
    },
    {
      question: "What is the fee for VFX course?",
      answer: "The VFX course fees at MAAC Greater Noida vary by program: ADVFX PLUS costs ₹1,80,000, VFX Plus is ₹1,50,000, and Compositing & Editing Plus is ₹1,00,000. We offer flexible payment plans and scholarships. Contact us for detailed pricing and available discounts.",
      keywords: ["VFX course fees", "visual effects course cost", "compositing course price"],
      category: "fees"
    }
  ],
  'gaming-courses': [
    {
      question: "Which is better Unity or Unreal for game development?",
      answer: "Both Unity and Unreal Engine are excellent game engines, and we teach both in our gaming courses in Greater Noida. Unity is great for mobile games and indie development, while Unreal Engine excels in high-end graphics and AAA games. Our curriculum covers both engines so you can choose based on your career goals. Unity is easier for beginners, while Unreal offers more advanced features.",
      keywords: ["Unity vs Unreal", "game engine comparison", "mobile vs PC gaming", "Unity Unreal training"],
      category: "software"
    },
    {
      question: "Can I learn game development without coding?",
      answer: "Yes, you can learn game development without extensive coding knowledge! Our gaming courses in Greater Noida focus on visual scripting and game design principles. While some basic programming concepts are covered, most of the emphasis is on game design, 3D modeling, level design, and using game engines. We also teach Blueprint visual scripting in Unreal Engine.",
      keywords: ["game development without coding", "visual scripting", "game design course", "no programming required"],
      category: "eligibility"
    },
    {
      question: "Which game engines will I learn?",
      answer: "In our gaming courses in Greater Noida, you'll learn both Unity and Unreal Engine - the two most popular game engines in the industry. You'll also learn game development tools like ZBrush for 3D modeling, Substance Painter for texturing, and various game design software. Our curriculum is designed to make you proficient in both engines.",
      keywords: ["Unity training", "Unreal Engine course", "game engines", "game development software"],
      category: "software"
    },
    {
      question: "Can I create mobile games after the course?",
      answer: "Absolutely! Our gaming courses in Greater Noida specifically include mobile game development modules. You'll learn to create games for Android and iOS platforms using Unity. We also cover game publishing, monetization strategies, and app store optimization. Many of our students have published successful mobile games.",
      keywords: ["mobile game development", "Android game development", "iOS game development", "mobile gaming course"],
      category: "mobile"
    },
    {
      question: "What are the job opportunities in gaming?",
      answer: "After completing our gaming course in Greater Noida, you can work as a Game Asset Development Artist, Game Artist, Game Environment Designer, Character Modeller, Game Animator, Game UI/UX Designer, Asset Integration Artist, Game Level Designer, Technical Artist, Game Designer, Mobile Game Developer, or AR/VR Developer in gaming studios and tech companies.",
      keywords: ["gaming jobs", "game developer career", "game artist jobs", "mobile game developer"],
      category: "career"
    }
  ],
  'multimedia-design-courses': [
    {
      question: "Can I learn graphic design without any prior experience?",
      answer: "Yes, absolutely! Our graphic design courses in Greater Noida are designed for beginners. We start from the fundamentals of design, color theory, and typography. No prior experience in design or art is required. Our expert faculty will teach you everything from basic design principles to advanced digital techniques using industry-standard software.",
      keywords: ["beginner graphic design", "no experience required", "design course for beginners", "graphic design fundamentals"],
      category: "eligibility"
    },
    {
      question: "Which Adobe software will I learn?",
      answer: "In our multimedia design courses in Greater Noida, you'll learn the complete Adobe Creative Suite including Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe After Effects, Adobe Premiere, Adobe Audition, Adobe XD, and Adobe Dreamweaver. You'll also learn other design tools like Figma, SketchUp, and 3D design software depending on your specialization.",
      keywords: ["Adobe Creative Suite", "Photoshop course", "Illustrator training", "design software"],
      category: "software"
    },
    {
      question: "Can I work as a freelancer after the course?",
      answer: "Yes! Our multimedia design courses in Greater Noida prepare you for both full-time employment and freelancing. You'll learn client communication, project management, and business skills along with design techniques. Many of our students work as successful freelancers in graphic design, web design, and digital marketing.",
      keywords: ["freelance graphic design", "design freelancing", "remote design work", "freelance career"],
      category: "career"
    },
    {
      question: "What are the career options in design?",
      answer: "After completing our design courses in Greater Noida, you can work as a Graphic Designer, UI/UX Designer, Web Designer, Illustrator, Digital Designer, Social Media Designer, Communication Designer, Digital Storyboard Artist, Page Layout Artist, Template Designer, Visualizer, or Digital Content Creator in design agencies, tech companies, and marketing firms.",
      keywords: ["design career", "graphic designer jobs", "UI UX designer", "design industry jobs"],
      category: "career"
    },
    {
      question: "What is the fee for graphic design course?",
      answer: "Our graphic design course fees in Greater Noida vary by program: UI/UX Design is ₹60,000, APDMC is ₹1,20,000, DGWA is ₹90,000, and other programs range from ₹80,000 to ₹1,50,000. We offer flexible payment plans and scholarships. Contact us for detailed pricing and available discounts.",
      keywords: ["graphic design course fees", "design course cost", "UI UX course price"],
      category: "fees"
    }
  ],
  'general': [
    {
      question: "What courses are available at MAAC Greater Noida?",
      answer: "MAAC Greater Noida offers comprehensive courses in 3D Animation, VFX, Gaming, and Multimedia Design. Our programs include AD3D EDGE Plus, D3D, DAFM for animation; ADVFX PLUS, VFX Plus, Compositing & Editing Plus for VFX; ADIDG, APGDI, PMGDI, PID for gaming; and UI/UX Design, APDMC, DGWA, APDMD, DPW3D, DGA for multimedia design. We also offer short-term courses and certification programs.",
      keywords: ["MAAC courses", "animation courses", "VFX courses", "gaming courses", "design courses"],
      category: "courses"
    },
    {
      question: "Does MAAC provide placement assistance?",
      answer: "Yes, MAAC Greater Noida provides 100% placement assistance to all our students. We have strong industry connections with leading animation studios, VFX companies, gaming firms, and design agencies. Our placement cell helps with resume building, interview preparation, portfolio development, and job placement. We also organize job fairs and industry meetups.",
      keywords: ["placement assistance", "job guarantee", "career support", "MAAC placement"],
      category: "placement"
    },
    {
      question: "What are the career options after completing the course?",
      answer: "After completing courses at MAAC Greater Noida, you can work in various roles: Animation (3D Modeler, Character Animator, Lighting Artist), VFX (Compositor, FX Artist, Match Moving Artist), Gaming (Game Artist, Level Designer, Game Developer), and Design (Graphic Designer, UI/UX Designer, Web Designer). Our alumni work in top companies across India and internationally.",
      keywords: ["career options", "job opportunities", "industry jobs", "animation VFX gaming careers"],
      category: "career"
    },
    {
      question: "Is MAAC Greater Noida a good institute?",
      answer: "Yes, MAAC Greater Noida is one of the leading institutes for animation, VFX, gaming, and multimedia courses in Delhi NCR. We have 25+ years of experience, expert faculty with industry experience, state-of-the-art infrastructure, 100% placement assistance, and strong industry connections. Our students have been placed in top companies and have successful careers.",
      keywords: ["MAAC Greater Noida", "best animation institute", "top VFX institute", "reputed design institute"],
      category: "institute"
    }
  ]
};

// Helper function to get FAQs by category
export const getFAQsByCategory = (category: string): FAQItem[] => {
  return faqData[category] || faqData['general'];
};

// Helper function to get FAQs by keyword
export const getFAQsByKeyword = (keyword: string): FAQItem[] => {
  const allFAQs = Object.values(faqData).flat();
  return allFAQs.filter(faq => 
    faq.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
  );
}; 