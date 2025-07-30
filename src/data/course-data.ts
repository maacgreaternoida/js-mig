// This file centralizes all your course data, making it easy to manage.

// --- TypeScript Interfaces for our data ---
export interface Course {
  name: string;
  slug: string;
  fullName?: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  image?: string;
  highlights: string[];
  color?: string;
  courseContents: { category: string; items: string[] }[];
  careerOptions: string[];
  softwareCovered: { name: string; icon?: string }[];
  specializations?: { name: string; description: string; skills: string[]; software: string[] }[];
}

export interface CourseCategory {
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  iconImage: string;
  color: string;
  gradient: string;
  totalCourses: number;
  courses: Course[];
}

export const courseCategories: CourseCategory[] = [
  {
    name: '3D Animation',
    slug: '3d-animation',
    description: 'Master the art of bringing imagination to life through cutting-edge 3D animation techniques. Learn from industry experts and create stunning visual narratives that captivate audiences worldwide.',
    heroImage: '/courses/3d-animation-hero.jpg',
    iconImage: '/courses-img/3d-animation-gif.webp',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)',
    totalCourses: 3,
    courses: [
      { 
        name: 'AD3D EDGE Plus', 
        slug: 'ad3d-edge-plus',
        fullName: 'AD3D EDGE PLUS - Advanced Program in 3D Animation',
        level: 'Advanced',
        duration: '24 Months',
        description: 'Step into the enchanting realm of animation and turn your childhood dreams into reality. This comprehensive animation course after 12th delves deep into various filmmaking techniques involved in the animation process.',
        image: '/courses/3d/ad3d-edge-plus.jpg',
        highlights: ['Complete 3D Animation Filmmaking Process', 'Industry-Standard Software Training', 'Hands-on Project-Based Learning', 'Expert Faculty with Industry Experience', 'Job Placement Assistance', '3 Specialization Options'],
        color: '#00d4ff',
        courseContents: [
          { category: 'Pre-production', items: ['Storyboarding', 'Cinematography', 'Stop-motion'] },
          { category: 'Production', items: ['Video Editing', 'Digital Design', 'Sound Editing'] },
          { category: '3D Pipeline', items: ['3D Design and Modeling', 'Digital Sculpting', 'Look Development'] },
          { category: 'Advanced Skills', items: ['Lighting and Rendering', 'Fluid, Hair & Cloth FX', 'Character Setup & Skinning'] },
          { category: 'Animation', items: ['Character Animation', 'Real-time Graphics'] }
        ],
        careerOptions: ['3D Modeling Artist', 'Lighting Artist', 'Texture Artist', 'Render Artist', 'Character Animator', 'Layout Artist', 'Digital Sculpting Artist', 'Rigging Artist', 'Video Editor', 'Motion Graphics Artist', 'FX Artist', 'Game Artist', '3D Generalist', '3D Visualizer'],
        softwareCovered: [
          { name: 'Adobe Photoshop', icon: '/software/ps.png' }, { name: 'Adobe After Effects', icon: '/software/ae.png' }, { name: 'Adobe Premiere', icon: '/software/pr.png' }, { name: 'Adobe Audition', icon: '/software/au.png' }, { name: 'Autodesk 3ds Max', icon: '/software/3dsmax.png' }, { name: 'Autodesk Maya', icon: '/software/maya.png' }, { name: 'Unreal Engine', icon: '/software/unreal.png' }, { name: 'VRay', icon: '/software/vray.png' }, { name: 'Adobe Substance 3D Painter', icon: '/software/substance.png' }, { name: 'Autodesk MotionBuilder', icon: '/software/motionbuilder.png' }, { name: 'Fusion', icon: '/software/fusion.png' }, { name: 'Autodesk Mudbox', icon: '/software/mudbox.png' }
        ],
        specializations: [
          { name: 'Modeling & Texturing', description: 'Master the art of creating detailed 3D models and realistic textures', skills: ['Art & technical aesthetics', 'Stylized character', 'Realistic character', 'Low-poly characters for games', 'Digital sculpting', 'Inorganic modeling'], software: ['Autodesk Maya', 'ZBrush'] },
          { name: 'Lighting & Shading', description: 'Learn advanced lighting techniques and material creation', skills: ['Fundamentals of lighting, design & color theory', 'Lighting environments', 'Advanced shading techniques', 'Render optimization'], software: ['VRay', 'Arnold', 'Substance Painter'] },
          { name: 'Character Animation', description: 'Bring characters to life with professional animation techniques', skills: ['Character rigging', 'Keyframe animation', 'Motion capture', 'Facial animation', 'Walk cycles', 'Acting for animators'], software: ['Maya', 'MotionBuilder', 'Unreal Engine'] }
        ]
      },
      { 
        name: 'D3D – Program in 3D Animation Filmmaking', 
        slug: 'd3d-program-3d-animation-filmmaking',
        fullName: 'D3D: Program in 3D Animation Filmmaking',
        level: 'Intermediate',
        duration: '18 Months',
        description: 'This 3D Animation film making course at MAAC is focused on the various shades of Animation Film Making. It prepares you for the professional world of animation by providing extensive classroom and practical training.',
        image: '/courses/3d/d3d.jpg',
        highlights: ['In-depth 3D Animation Filmmaking Process', 'Creative modules & character animation', 'Hands-on training with latest software', 'Portfolio development', 'Job placement assistance'],
        color: '#8338ec',
        courseContents: [
          { category: 'Pre-production', items: ['Storyboarding', 'Concepts of filmmaking', 'Digital painting'] },
          { category: 'Asset Development', items: ['BG modelling & surfacing', '3D character development', 'Texturing & look development'] },
          { category: 'Animation & Post-production', items: ['Lighting & rendering', 'Particle & dynamics', 'Rigging and character setup', 'Character animation', 'Matte painting'] }
        ],
        careerOptions: ['3D Modelling Artist', 'Texturing Artist', 'Lighting Artist', 'Render Artist', 'Character Animator', 'Layout Artist', 'Rigging Artist', '3D Generalist', '3D Visualizer'],
        softwareCovered: [
          { name: 'Adobe Photoshop' }, { name: 'Adobe After Effects' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'Autodesk 3ds Max' }, { name: 'Autodesk Mudbox' }, { name: 'Autodesk Maya' }, { name: 'Adobe Substance 3D Painter' }
        ],
      },
      { 
        name: 'DAFM – Program in Animation Filmmaking', 
        slug: 'dafm-program-animation-filmmaking',
        fullName: 'DAFM: Program in Animation Filmmaking',
        level: 'Foundation',
        duration: '12 Months',
        description: 'Learn all about animation and the process of live action filmmaking in just a year. This course focuses on storyboarding, cinematography, character design, modeling, texturing, lighting, 3D animation and more.',
        image: '/courses/3d/dafm.jpg',
        highlights: ['Animation & Live-Action Filmmaking', 'Comprehensive Pre-production Training', 'Storyboarding, Cinematography, Character Design', 'Studio-like learning environment', 'Job-ready skills for a successful career'],
        color: '#ff006e',
        courseContents: [
          { category: 'Pre-production', items: ['Storyboarding', 'Cinematography', 'Concepts of filmmaking', 'Stop-motion'] },
          { category: 'Production & 3D', items: ['Modeling & texturing', 'Lighting & rendering', 'Particle & dynamics', 'Character setup & skinning', 'Character animation'] },
          { category: 'Post-production', items: ['Digital design', 'Compositing', 'Sound editing', 'Concepts of non-linear editing'] }
        ],
        careerOptions: ['Design Visualisation Artist', 'Lighting Artist', 'Animator', 'Rigging Artist', 'Motion Graphic Artist', 'Digital Designer', 'Modeling Artist'],
        softwareCovered: [
          { name: 'Adobe Photoshop' }, { name: 'Autodesk 3ds Max' }, { name: 'Adobe Premiere' }, { name: 'Adobe After Effects' }, { name: 'Autodesk Mudbox' }, { name: 'Adobe Audition' }
        ],
      },
    ],
  },
  {
    name: 'VFX Courses',
    slug: 'vfx-courses',
    description: 'Create mind-blowing visual effects that blur the line between reality and imagination. Master the tools and techniques used in blockbuster movies and cutting-edge commercials.',
    heroImage: '/courses/vfx-hero.jpg',
    iconImage: '/courses-img/vfx-icon.webp',
    color: '#8338ec',
    gradient: 'linear-gradient(135deg, #8338ec, #6b2db8)',
    totalCourses: 3,
    courses: [
  { 
    name: 'ADVFX PLUS', 
    slug: 'advfx-plus',
    fullName: 'ADVFX PLUS - Advanced Program in Visual Effects',
    level: 'Advanced',
    duration: '576 Hours',
    description: 'This course covers everything from the fundamentals of 3D filmmaking like pre-production and storyboarding to advanced topics like motion graphics, digital design, and editing, making you a master of visual effects.',
    image: '/courses/vfx/advfx-plus.jpg',
    color: '#00d4ff',
    highlights: [
      'Comprehensive "Script to Screen" VFX pipeline training.',
      'Hands-on training with industry-standard software like Maya and Houdini.',
      'Advanced modules in FX, Dynamics, and Compositing.',
      'Studio-like environment for practical learning.',
      'Portfolio development with project-based case studies.'
    ],
    courseContents: [
      { category: 'Pre-production', items: ['Storyboarding', 'Cinematography', 'Stop-motion'] },
      { category: 'Compositing', items: ['Digital design', 'Layer-based compositing', 'Clean plate & wire removal', 'Advanced compositing', 'Node-based compositing'] },
      { category: 'FX & Simulation', items: ['Advanced particle effects', 'Cloth FX', 'Pyrotechnics', 'Rigid body simulations', 'Fluid simulation', 'Procedural FX workflow'] },
      { category: 'Integration & Finishing', items: ['3D design', 'Match moving & camera tracking', 'Concepts of set extension & CG integration', 'Stereoscopic conversion', 'Realistic digital environments'] },
      { category: 'Project', items: ['Project - VFX shot with Miniature Models', 'Case studies for motion graphics'] }
    ],
    careerOptions: [
      'FX Artist', 'Motion Graphics Artist', 'Compositor', 'Camera Tracker', 'Match Moving Artist', 'Matte Painter', 'Clean-up Artist', 'BG Prep Artist', 'VFX Generalist', 'Stereoscopy Artist', 'Depth Artist', 'Video Editor', 'Pre-Viz Artist', 'Roto Artist', 'Paint Artist'
    ],
    softwareCovered: [
      { name: 'Adobe Photoshop' }, { name: 'Adobe After Effects' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'Autodesk 3ds Max' }, { name: 'Autodesk Mudbox' }, { name: 'Autodesk Maya' }, { name: 'Adobe Substance 3D Painter' }, { name: 'Fusion' }, { name: 'Mocha' }, { name: 'Silhouette' }, { name: '3D Equalizer' }, { name: 'Nuke' }, { name: 'Real Flow' }, { name: 'Vue' }, { name: 'Houdini' }
    ],
    specializations: [
      { name: 'Dynamics & FX', description: 'Master the art of creating breathtaking simulations and dynamic effects.', skills: ['Fluid simulation', 'Pyrotechnics', 'Rigid body simulations', 'Cloth FX', 'Advanced particle effects'], software: ['Houdini', 'Real Flow', 'Maya'] },
      { name: 'Compositing & Finishing', description: 'Learn the techniques to seamlessly integrate CG elements with live-action footage.', skills: ['Node-based compositing', 'Match moving & camera tracking', 'Rotoscoping & Paint', 'Stereoscopic conversion'], software: ['Nuke', 'Silhouette', 'Mocha', 'Fusion'] },
      { name: '3D for VFX', description: 'Create realistic 3D assets and environments for visual effects shots.', skills: ['3D design & modeling', 'CG integration', 'Realistic rendering techniques', 'Digital environments'], software: ['Maya', '3ds Max', 'Substance Painter', 'Vue'] }
    ]
  },
  { 
    name: 'VFX Plus', 
    slug: 'vfx-plus',
    fullName: 'VFX PLUS - Program in Visual Effects',
    level: 'Intermediate',
    duration: '432 Hours',
    description: 'This professional course trains you in the latest visual effects software and techniques used in filmmaking. With a focus on a simulated studio environment, you will master everything from digital design and compositing to match moving and camera tracking.',
    image: '/courses/vfx/vfx-plus.jpg',
    color: '#8338ec',
    highlights: [
      'Comprehensive training in the latest VFX software.',
      'Focus on real-world studio pipelines and workflows.',
      'Learn layer-based and node-based compositing.',
      'Hands-on experience with clean plates, wire removal, and CG integration.',
      'Portfolio development through VFX case studies.'
    ],
    courseContents: [
      { category: 'Fundamentals', items: ['Digital design', 'Basics of Photography', 'Layer based compositing'] },
      { category: 'Core VFX Techniques', items: ['Clean plate & wire removal', 'Stereoscopic pipeline', 'Node based compositing', 'Projection for visual effects'] },
      { category: '3D & FX', items: ['3D Design', 'Advanced particle effects', 'Cloth FX', 'Pyrotechnics'] },
      { category: 'Advanced Integration', items: ['Advanced Compositing', 'Concepts of Set Extension & CG Integration', 'Match moving & Camera tracking'] },
      { category: 'Project', items: ['VFX case-studies'] }
    ],
    careerOptions: [
      'Compositor', 'Match Moving Artist', 'FX Artist', 'Pre-Viz Artist', 'Motion Graphics Artist', 'Roto Artist', 'Clean-up Artist', 'BG Prep Artist', 'Paint Artist'
    ],
    softwareCovered: [
      { name: 'Fusion' }, { name: 'RealFlow' }, { name: 'Nuke' }, { name: 'Autodesk 3ds Max' }, { name: 'Autodesk Mudbox' }, { name: 'FumeFX' }, { name: 'Adobe Photoshop' }, { name: 'Adobe After Effects' }, { name: 'Mocha' }, { name: '3D Equalizer' }
    ],
  },
  { 
    name: 'Compositing & Editing Plus', 
    slug: 'compositing-editing-plus',
    fullName: 'COMPOSITING & EDITING PLUS',
    level: 'Intermediate',
    duration: '240 Hours',
    description: 'This career course trains you in two of the most important aspects of visual effects: compositing and editing. It is at this stage that different visual elements are combined to create one scene or a complete sequence.',
    image: '/courses/vfx/compositing-editing-plus.jpg',
    color: '#ff006e',
    highlights: [
      'Master the final stage of post-production.',
      'In-depth training in Rotoscopy, Match Moving, and BG Prep.',
      'Hands-on experience with Nuke, Final Cut Pro, and After Effects.',
      'Workshops from industry experts and regular studio visits.',
      'Develop the skills to create the final look and feel of a film.'
    ],
    courseContents: [
      { category: 'Fundamentals', items: ['Basics of filmmaking', 'Digital design'] },
      { category: 'Editing', items: ['Video editing', 'Sound editing', 'Title graphics', 'Audio-video synchronisation', 'Editing with FCP'] },
      { category: 'Compositing', items: ['Layer-based compositing', 'Art of Rotoscopy', 'Node-based compositing', 'Live action compositing'] },
      { category: 'Tracking & Integration', items: ['Match moving', 'Camera tracking', '3D camera projection', 'Stereoscopic pipeline'] }
    ],
    careerOptions: [
      'Compositor', 'Roto Artist', 'Paint Artist', 'BG Prep Artist', 'Stereo Depth Grade Artist', 'Match Moving Artist', 'Motion Graphics Artist', 'Video Editor'
    ],
    softwareCovered: [
      { name: 'Adobe Photoshop' }, { name: 'Adobe After Effects' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'Fusion' }, { name: 'Mocha' }, { name: 'Silhouette' }, { name: '3D Equalizer' }, { name: 'Nuke' }, { name: 'FCP' }
    ],
  }
]
  },
  {
    name: 'Gaming Courses',
    slug: 'gaming-courses',
    description: 'Develop your skills in game development and design. Learn to create engaging and interactive games using industry-standard tools and techniques.',
    heroImage: '/courses/gaming-hero.jpg',
    iconImage: '/courses-img/gaming-icon.webp',
    color: '#ff006e',
    gradient: 'linear-gradient(135deg, #ff006e, #cc0057)',
    totalCourses: 4,
    courses: [
  {
    name: 'ADIDG',
    slug: 'adidg',
    fullName: 'ADIDG - Advanced Program in Interactive Design & Games',
    duration: '24 Months',
    level: 'Advanced',
    description: 'The ADIDG course at MAAC makes you a pro in design visualization, character animation, digital sculpting, game asset creation, and augmented and virtual reality. These skills are high in-demand at the top studios who are constantly looking for all-round professionals who can deliver high quality.',
    image: '/courses/gaming/adidg.jpg',
    color: '#00d4ff',
    highlights: [
      'End-to-end training in creating augmented & virtual reality designs',
      'Dedicated modules for 2D Interactivity & Design Viz',
      'Integration using Unity and Unreal game engines',
      'Mobile Gaming development and Game level designing',
      'Complete game pipeline from design to publishing',
      '360-degree learning approach for interactive designs'
    ],
    courseContents: [
      { category: 'Term 1', items: ['3ds MAX + MUDBOX', 'All latest modules of PBR workflow', 'Digital Sculpting with Mudbox'] },
      { category: 'Term 2', items: ['MAYA (6 months)', 'Latest features of PBR & FX', 'Industry-focused training'] },
      { category: 'Term 3', items: ['Substance Painter', 'Real-time texturing', '3D asset texturing for Animation, VFX and Gaming'] },
      { category: 'Term 4', items: ['Mobile Gaming', 'Game development and publishing', 'Industry-aligned training'] },
      { category: 'Elements of Design', items: ['Video Editing', 'Interactive Presentation', 'Browser Games', 'Digital Design', 'Sound Editing'] },
      { category: '3D & Game Development', items: ['3D Design & Modelling', 'Digital Sculpting', 'Look Development', 'Lighting & rendering', 'Fluid, Hair & Cloth FX', 'Character Setup & Skinning', 'Character Animation', 'Game Engine Workflow'] },
      { category: 'Game Engine & AR/VR', items: ['Working with Game Engine Lights, Camera & Animation', 'Asset Integration in Game Engine', 'Creating UI Tools', 'Publishing to different Platforms', 'Software development kit for VR & AR', 'Application development for VR & AR', 'Mobile Game Creation'] }
    ],
    careerOptions: [ 'Modelling/Texturing Artist', 'Lighting Artist', 'Rigging Artist', 'Interactive Product Demo Artist', '3D Visualizer', 'Render Wranglers', 'Layout Artist', 'Virtual Production Developer', '3D Modelling Artist', 'Animators', 'Texturing Artist', '3D VR Background Artist', '3D VR Developer', 'AR Unity Developer', 'Game Asset Creator', 'Game Level Designer', 'E-learning Editor' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'Adobe Animate' }, { name: 'Sketchup' }, { name: 'Lumion' }, { name: 'Autodesk® 3ds Max' }, { name: 'Autodesk® Mudbox®' }, { name: 'Autodesk® Maya®' }, { name: 'Adobe Substance 3d Painter' }, { name: 'Unity' }, { name: 'Unreal Engine' }, { name: 'Vuforia Sdk' } ],
    specializations: [
      { name: 'Unity & Unreal Engine', description: 'Learn about the two leading power game engines which are used in the industry.', skills: ['Game Engine Workflow', 'Asset Integration', 'Level Design', 'UI Development', 'Game Publishing'], software: ['Unity', 'Unreal Engine'] },
      { name: 'Mobile Gaming & Game Level Design', description: 'Create mobile games from design to publishing with complete pipeline knowledge.', skills: ['Mobile Game Development', 'Level Design', 'Asset Creation', 'Game Testing', 'Publishing'], software: ['Unity', 'Adobe Creative Suite'] },
      { name: 'Augmented & Virtual Reality', description: 'Master AR/VR development with dedicated modules covering concept to publishing.', skills: ['AR/VR Development', 'SDK Integration', 'Interactive Design', '3D Asset Creation', 'App Development'], software: ['Unity', 'Vuforia SDK', 'Unreal Engine'] }
    ]
  },
  {
    name: 'APGDI',
    slug: 'apgdi',
    fullName: 'APGDI - Advanced Program in Game Design & Integration',
    duration: '480 Hours',
    level: 'Advanced',
    description: 'This comprehensive career course in gaming at MAAC is exclusively designed for aspirants who want to make a career in Game Asset Development, Character Animation, Game Level Designing and Character Modelling. The program curriculum covers fundamentals of the two most popular game engines - UNITY & UNREAL. It also includes a specialization series on Mobile Gaming, PC and Console.',
    image: '/courses/gaming/apgdi.jpg',
    color: '#8338ec',
    highlights: [
      'Interact with industry experts and attend webinars',
      'Visit gaming studios to learn about game design',
      'Extensive training on industry-oriented software',
      'Specialization in Mobile, PC and Console gaming',
      'End-to-end training on game asset development'
    ],
    courseContents: [
      { category: 'Term 1: Game Art & Design Fundamentals', items: ['Understanding & creating Game Design & Asset creation'] },
      { category: 'Term 2: Game Art & Design Advanced', items: ['Mastering Game Design & Asset creation'] },
      { category: 'Term 3: Game Engine', items: ['UNITY & UNREAL game engine fundamentals'] },
      { category: 'Term 4: Specialization in Mobile Gaming', items: ['Create and publish mobile games'] },
      { category: 'Term 5: Specialization in PC & Console', items: ['Game asset creation & Integration with Level Designing'] },
      { category: 'Content', items: ['Digital Design', 'Vector Art for Games', 'Sound Editing', 'Game Design & Documentation', '3D Design & Modelling', 'Digital Sculpting', 'PBR Texturing Workflow', 'Look Development', 'Lighting & Rendering', 'Game Character Setup and Animation', 'Game Asset Creation', 'Game Theory & Pre Production', 'Game Engine Workflow', 'Game Asset Integration', 'Game Level Design- Mobile/AAA,UI/UX design', 'Mobile Game Creation', 'Game Publishing to different platforms'] }
    ],
    careerOptions: [ 'Game Asset Development Artist', 'Game Artist', 'Game Environment Designer', 'Character Modeller', 'Game Animation', 'Game UI/UX Designer', 'Asset Integration Artist', 'Game Level Designer', 'Technical Artist', 'Game Designer' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Adobe Illustrator' }, { name: 'Adobe Audition' }, { name: 'Autodesk® 3ds Max' }, { name: 'Autodesk® Maya®' }, { name: 'Substance Painter' }, { name: 'Quixel' }, { name: 'ZBrush' }, { name: 'Motion Builder' }, { name: 'Unity' }, { name: 'Unreal Engine' } ],
  },
  {
    name: 'PMGDI',
    slug: 'pmgdi',
    fullName: 'PMGDI - Program in Mobile Game Design & Integration',
    duration: '388 Hours',
    level: 'Intermediate',
    description: 'Program in Mobile Game Design & Integration at MAAC is a career course that provides end-to-end training in all aspects of Mobile Gaming. The program includes a specialised module on Mobile Gaming that trains you to create and publish mobile games. This course also aims to keep you updated with the growing needs and demands of the mobile gaming industry.',
    image: '/courses/gaming/pmgdi.jpg',
    color: '#00d4ff',
    highlights: [
      'End-to-end training in all aspects of Mobile Gaming',
      'Specialised module on creating and publishing mobile games',
      'Training on industry-specific software like Photoshop and Zbrush',
      'Regular workshops and expert sessions',
      'Assignments and projects to build a strong portfolio'
    ],
    courseContents: [
      { category: 'Term 1: Game Art & Design Fundamentals', items: ['Understanding & creating Game Design & Asset creation'] },
      { category: 'Term 2: Game Art & Design Advanced', items: ['Mastering Game Design & Asset creation'] },
      { category: 'Term 3: Game Engine', items: ['UNITY & UNREAL game engine fundamentals'] },
      { category: 'Term 4: Specialization in Mobile Gaming', items: ['Create and publish mobile games'] },
      { category: 'Content', items: ['Digital Design', 'Vector Art for Games', 'Sound Editing', 'Game Design & Documentation', '3D Design & Modelling', 'Digital Sculpting', 'PBR Texturing Workflow', 'Look Development', 'Lighting & Rendering', 'Game Character Setup and Animation', 'Game Theory & PreProduction', 'Game Engine Workflow', 'Game Asset Integration', 'Game Level Design- Mobile', 'UI/UX design - Mobile', 'Mobile Game Creation', 'Publishing Games to different platforms', 'Game Monetization Process'] }
    ],
    careerOptions: [ '2D Mobile Game Artist', '3D Mobile Game Artist (Modeling, Texturing)', 'Game Environment Artist', 'Game Animator', 'Game Rigging Artist', 'Mobile Game Developer', 'Mobile Game Designers', 'Mobile Game Environment Artists', 'Mobile Game UI/UX Designers', 'Technical Artist', 'Game Designer', 'Mobile Game Level Designers' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Adobe Illustrator' }, { name: 'Adobe Audition' }, { name: 'Autodesk® 3ds Max' }, { name: 'Substance Painter' }, { name: 'Quixel' }, { name: 'Maya' }, { name: 'Zbrush' }, { name: 'Motion Builder' }, { name: 'Unity' }, { name: 'Unreal engine' } ],
  },
  {
    name: 'PID',
    slug: 'pid',
    fullName: 'PID - Program in Immersive Design',
    duration: '304 Hours',
    level: 'Intermediate',
    description: 'This is a professional course in gaming that includes a dedicated module on Game Art Fundamentals for asset creation, modules on two robust Game engines - Unity and Unreal along with specialization modules on AR covering Product app and AR Game creation and specialization modules on VR covering immersive experience app development and VR games.',
    image: '/courses/gaming/pid.jpg',
    color: '#8338ec',
    highlights: [
      'Dedicated module on Game Art Fundamentals',
      'Training on two robust game engines: Unity and Unreal',
      'Specialization in Augmented Reality (AR) and Virtual Reality (VR)',
      'Create AR product apps and AR games',
      'Develop immersive VR experiences and VR games'
    ],
    courseContents: [
      { category: 'Term 1: Game Art & Design Fundamentals', items: ['Understanding & creating Game Design & Asset creation'] },
      { category: 'Term 2: Game Engine', items: ['UNITY & UNREAL game engine fundamentals'] },
      { category: 'Term 3: Specialisation In Augmented Reality', items: ['AR application Development and AR Games creation'] },
      { category: 'Term 4: Specialisation In Virtual Reality', items: ['VR Immersive application Development and VR Games creation', '3 projects with specialisation'] },
      { category: 'Content', items: ['Digital Design', 'Vector Art for Games', 'Sound Editing', 'Game Design & Documentation', '3D Asset creation', 'Game Engine Workflow', 'AR Design Documentation', 'AR Software Development Kit', 'Creating AR Applications', 'AR Games Creation', 'VR Design Documentation', 'VR Software Development Kit', 'Creating VR Applications', 'Creating VR Games'] }
    ],
    careerOptions: [ 'AR Asset Artist', 'AR Designer', 'AR Developer', 'VR Asset Artist', 'VR Designer', 'VR Developer', 'Technical Artist', 'AR/VR Developer' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Adobe Illustrator' }, { name: 'Adobe Audition' }, { name: 'Autodesk® 3ds Max' }, { name: 'Unity' }, { name: 'Unreal Engine' }, { name: 'Vuforia SDK' }, { name: 'Unity AR Foundation' } ],
  }
],
  },
  {
    name: 'Multimedia & Design',
    slug: 'multimedia-design-courses',
    description: 'Create stunning visuals, user-friendly interfaces, and professional graphic designs.',
    heroImage: '/courses/design-hero.jpg',
    iconImage: '/courses-img/ui-ux-icon.webp',
    color: '#00d4aa',
    gradient: 'linear-gradient(135deg, #00d4aa, #00a688)',
    totalCourses: 6,
    courses: [
  {
    name: 'UI UX Design',
    slug: 'ui-ux-design',
    fullName: 'Program in UI/UX Design',
    duration: '192 Hours',
    level: 'Advanced',
    description: 'Embark on an exhilarating voyage into the vibrant world of UI/UX Design with this cutting-edge program. This course covers essential design fundamentals, introduces you to the principles of digital content creation, and helps you master the art of creating intuitive and engaging user interfaces.',
    image: '/courses/design/ui-ux-design.jpg',
    color: '#00d4ff',
    highlights: [
      'Master the art of creating intuitive and engaging user interfaces.',
      'Hands-on training with industry-standard tools like Figma and VSCode.',
      'Explore the innovative realm of Generative AI in design.',
      'Build a professional portfolio with real-world project-based learning.',
      'Learn to design and build responsive websites with HTML, CSS, and Bootstrap.'
    ],
    courseContents: [
      { category: 'Design Fundamentals', items: ['Digital Design', 'Design Fundamentals', 'Introduction to Digital Content', 'Vector Illustration'] },
      { category: 'UI/UX Concepts', items: ['UI and UX Design', 'Concepts of UI-UX Design'] },
      { category: 'Web Development', items: ['HTML', 'Cascading Style Sheets', 'Designing with Framework'] },
      { category: 'Advanced Topics', items: ['World of Generative AI', 'Project Building'] }
    ],
    careerOptions: [ 'UI/UX Designer', 'Senior UI/UX Designer', 'UI/UX Specialist', 'Web Designer', 'Digital Designer', 'Illustrator', 'Social Media Designer' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Illustrator' }, { name: 'Dream Weaver' }, { name: 'Figma' }, { name: 'Bootstrap' }, { name: 'VSCode' } ],
  },
  {
    name: 'APDMC',
    slug: 'apdmc-advanced-digital-media-creation',
    fullName: 'APDMC - Advanced Program in Digital Media Creation',
    duration: '402 Hours',
    level: 'Advanced',
    description: 'A cutting-edge program designed to prepare you with expertise in branding, content creation, UI/UX design, web development, and 3D design for the next-gen creative industry.',
    image: '/courses/design/apdmc.jpg',
    color: '#8338ec',
    highlights: [
      'Master composition, typography, color theory, and branding.',
      'Develop professional UI/UX design skills.',
      'Learn to build responsive websites with HTML, CSS, and modern frameworks.',
      'Create stunning graphics, videos, and platform-specific content.',
      'Understand branding, social media, and content marketing strategies.',
      'Learn how to use AI for design, editing, and content automation.'
    ],
    courseContents: [
      { category: 'Term 1: Digital Content', items: ['Introduction to Digital Content', 'Digital Design with Adobe Photoshop', 'Image Editing in Adobe Lightroom', 'Vector Design in Adobe Illustrator', 'Advanced Graphic Design in Adobe Illustrator', 'Digital Publishing in Adobe InDesign', '3D Design for Product Advertising in Adobe Dimensions', 'Branding Case Study'] },
      { category: 'Term 2: Video & Web Content', items: ['Video Editing in Adobe Premiere', 'Introduction to Adobe Rush', 'Sound Editing in Adobe Audition', 'Motion Graphics with Adobe AfterEffects', 'Motion Design in Adobe Animate', 'Concepts of UI Design', 'UI and UX Design (Figma & Adobe XD)', 'HTML 5 with Adobe Dreamweaver', 'Cascading Style Sheets – CSS 3', 'Advanced CSS'] },
      { category: 'Term 3: 3D Content Design', items: ['Autodesk Maya Modeling', 'Autodesk Maya Texturing', 'Adobe Substance Painter', 'Autodesk Maya Lighting', 'Autodesk Maya Rigging', 'Autodesk Maya Animation', 'Autodesk Maya Particles, Dynamics & Tech Animation', 'Virtual Staging in Adobe Substance 3D Stager'] }
    ],
    careerOptions: [ 'Communication Designer', 'Digital Storyboard Artist', 'Graphic Designer', 'Web Designer', 'Illustrator', 'Mobile Content Designer', 'Media Packaging Artist', 'Page Layout Artist', 'Template Designer', 'User Interface Designer', 'UX Designer', 'Visualizer', '2D Animator', '3D Animator', '3D Modelor', 'Texturing Artist', 'Video Editor', 'Motion Graphic Artist', 'Video Production', 'Designer for Interactive E-Learning', 'Digital Content Creator' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Adobe Lightroom' }, { name: 'Adobe Illustrator' }, { name: 'Adobe InDesign' }, { name: 'Adobe Dimensions' }, { name: 'Adobe Premiere' }, { name: 'Adobe Rush' }, { name: 'Adobe Audition' }, { name: 'Adobe AfterEffects' }, { name: 'Adobe Animate' }, { name: 'Figma' }, { name: 'Adobe XD' }, { name: 'Adobe Dreamweaver' }, { name: 'CSS' }, { name: 'Autodesk Maya' }, { name: 'Adobe Substance Painter' }, { name: 'Adobe Substance 3D Stager' } ],
    specializations: [
      { name: 'Digital Design & Branding', description: 'Focus on creating compelling brand identities and stunning visual assets for modern digital platforms.', skills: ['Composition & Typography', 'Color Theory', 'Branding Strategy', 'Vector & Raster Design', 'Digital Publishing'], software: ['Photoshop', 'Illustrator', 'InDesign', 'Lightroom'] },
      { name: 'Web & UI/UX Design', description: 'Master the art of creating intuitive, user-centric websites and applications.', skills: ['UI & UX Principles', 'Wireframing & Prototyping', 'Responsive Web Design', 'HTML5 & CSS3', 'Motion Graphics'], software: ['Figma', 'Adobe XD', 'AfterEffects', 'Dreamweaver'] },
      { name: '3D Content Creation', description: 'Learn to create stunning 3D models, animations, and product visualizations.', skills: ['3D Modeling & Texturing', 'Lighting & Rendering', 'Rigging & Animation', 'Dynamics & FX', 'Virtual Staging'], software: ['Autodesk Maya', 'Substance Painter', 'Substance 3D Stager'] }
    ]
  },
  {
    name: 'DGWA',
    slug: 'dgwa-graphic-web-2d-animation',
    fullName: 'DGWA - Program In Graphic, Web & 2D Animation',
    duration: '288 Hours',
    level: 'Intermediate',
    description: 'This program provides expertise in designing engaging websites, producing appealing digital graphics, and crafting immersive 2D animations. You\'ll learn to ace different mediums of communication like publications, websites, billboards, and user interfaces.',
    image: '/courses/design/dgwa.jpg',
    color: '#ff006e',
    highlights: [
      'Master graphic design, web design, and 2D animation.',
      'Learn to design for various mediums like print, web, and interactive media.',
      'Hands-on training in image editing, page layout, and digital storyboarding.',
      'Build responsive websites using HTML, CSS, and JavaScript.',
      'Comprehensive training from fundamentals to advanced animation.'
    ],
    courseContents: [
      { category: 'Semester 1: Certificate in Graphic & Print Design', items: ['Fundamentals of Design & Drawing', 'Concepts of Graphic & Illustration', 'Image Editing', 'Graphic Design', 'Page Layout'] },
      { category: 'Semester 2: Certificate in Web & Interactive Design', items: ['Concepts of Web Design', 'Webpage Designing', 'Interactive Design', 'Video Editing', 'Sound Editing', 'Fundamentals of JavaScript'] },
      { category: 'Semester 3: Certificate in 2D Animation', items: ['Basics of 2D animation', 'Digital Storyboarding', 'Digital 2D Animation'] }
    ],
    careerOptions: [ 'Graphic Designer', 'Packaging Designer', 'Web/Interactive Designer', 'User Interface Designer', 'Illustrator', 'DTP Operator', 'Layout Artist', 'Digital Storyboard Artist', 'Designer for Interactive E-learning', '2D Animator', 'Advertising Art Director' ],
    softwareCovered: [ { name: 'CorelDRAW' }, { name: 'Adobe Illustrator' }, { name: 'Adobe Photoshop' }, { name: 'Adobe InDesign' }, { name: 'Adobe Dreamweaver' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'HTML5' }, { name: 'JavaScript' }, { name: 'Storyboard Pro' }, { name: 'Adobe Animate' }, { name: 'Harmony' }, { name: 'CSS' }, { name: 'Adobe ActionScript' } ],
    specializations: [
      { name: 'Graphic & Print Design', description: 'Focus on visual communication, branding, and creating stunning assets for print media.', skills: ['Typography', 'Layout Design', 'Image Editing', 'Vector Illustration', 'Branding'], software: ['Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW'] },
      { name: 'Web & Interactive Design', description: 'Master the art of creating engaging and user-friendly websites and interactive experiences.', skills: ['UI Design', 'Responsive Web Design', 'HTML5 & CSS3', 'JavaScript Fundamentals', 'Video & Sound Editing'], software: ['Dreamweaver', 'Premiere', 'Audition', 'HTML5', 'CSS'] },
      { name: '2D Animation', description: 'Learn to bring stories and characters to life through the art of 2D animation.', skills: ['Digital Storyboarding', 'Character Animation', 'Motion Graphics', 'Timeline-based Animation'], software: ['Adobe Animate', 'Harmony', 'Storyboard Pro'] }
    ]
  },
  {
    name: 'APDMD',
    slug: 'apdmd-graphic-design',
    fullName: 'APDMD - Advanced Program in Digital Media & Design',
    duration: '384 Hours',
    level: 'Advanced',
    description: 'A holistic course that provides training in print, web, 2D animation, and responsive web design. Learn the latest industry trends like digital production and augmented reality to create innovative pieces of digital communication.',
    image: '/courses/design/apdmd.jpg',
    color: '#00d4ff',
    highlights: [
      'Comprehensive training in print, web, and 2D animation.',
      'Learn the latest industry trends, including Augmented Reality.',
      'Master responsive web design with advanced front-end development.',
      'Create innovative digital communication and interactive web content.',
      'Gain skills in UI/UX design and app development.'
    ],
    courseContents: [
      { category: 'Semester 1: Graphic & Print Design', items: ['Fundamentals of Design & Drawing', 'Concepts of Graphic & Illustration', 'Image Editing', 'Graphic Design', 'Page Layout'] },
      { category: 'Semester 2: Web & Interactive Design', items: ['Concepts of Web Design', 'Interactive Design', 'Sound Editing', 'Webpage Designing', 'Video Editing', 'Fundamentals of JavaScript'] },
      { category: 'Semester 3: Advanced Web', items: ['Responsive web design', 'Advanced front-end design & development', 'Animation & interactivity for web', 'Desktop/mobile/tab/front-end design & development', 'Interactive digital publication', 'JQuery Integration', 'Basics of PHP & MySQL', 'Concept of content management system'] },
      { category: 'Semester 4: 2D Animation', items: ['Basics of 2D animation', 'Digital Storyboarding', 'Digital 2D Animation'] }
    ],
    careerOptions: [ 'Communication Designer', 'Digital Storyboard Artist', 'Graphic Designer', 'Web Designer', 'Illustrator', 'Media Content Manager', 'Mobile Content Designer', 'Packaging Designer', 'Page Layout Artist', 'Template Designer', 'UI Designer', 'UX Designer', 'App Designer', 'Visualizer', '2D Animator', 'Advertising Art Director', 'Designer for Interactive E-learning' ],
    softwareCovered: [ { name: 'Adobe Illustrator' }, { name: 'Adobe Photoshop' }, { name: 'Adobe InDesign' }, { name: 'HTML5' }, { name: 'Adobe Dreamweaver' }, { name: 'Adobe Animate' }, { name: 'Adobe Premiere' }, { name: 'JavaScript' }, { name: 'Angular JS' }, { name: 'Adobe Audition' }, { name: 'CSS' }, { name: 'PHP' }, { name: 'MySQL' }, { name: 'Wordpress' }, { name: 'Storyboard Pro' }, { name: 'Harmony' }, { name: 'Adobe ActionScript' }, { name: 'Adobe XD' }, { name: 'Bootstrap' } ],
    specializations: [
      { name: 'Graphic & Print Design', description: 'Focus on visual communication and creating stunning assets for both digital and print media.', skills: ['Typography', 'Layout Design', 'Image Editing', 'Vector Illustration', 'Branding'], software: ['Photoshop', 'Illustrator', 'InDesign'] },
      { name: 'Advanced Web & UI/UX', description: 'Master the art of creating responsive, interactive, and user-centric websites and applications.', skills: ['Responsive Design', 'Advanced Front-End Development', 'UI/UX Principles', 'PHP & MySQL Basics', 'CMS'], software: ['HTML5', 'CSS', 'JavaScript', 'Angular JS', 'Adobe XD', 'Wordpress'] },
      { name: '2D Animation & Motion', description: 'Learn to bring stories and characters to life through the art of 2D animation and motion graphics.', skills: ['Digital Storyboarding', 'Character Animation', 'Interactivity for Web', 'Video Editing'], software: ['Adobe Animate', 'Harmony', 'Storyboard Pro', 'Premiere'] }
    ]
  },
  {
    name: 'DPW3D',
    slug: 'dpw3d',
    fullName: 'DPW3D - Program in Print, Web and 3D Animation',
    duration: '432 Hours',
    level: 'Advanced',
    description: 'This program makes you an expert in building state-of-the-art print, web, and 3D animation content for different platforms and audiences. It covers the fundamentals of drawing, concepts of design, web designing, and the complete 3D animation pipeline.',
    image: '/courses/design/dpw3d.jpg',
    color: '#8338ec',
    highlights: [
      'Expert training in Print, Web, and 3D Animation.',
      'Learn fundamentals of drawing, design, and illustration.',
      'Master web design, interactive presentations, and motion graphics.',
      'Comprehensive 3D pipeline training: modeling, texturing, lighting, rigging, animation.',
      'Develop skills for a career as a 3D Animator or Communication Designer.'
    ],
    courseContents: [
      { category: 'Print & Graphic Design', items: ['Fundamentals of Drawing', 'Concepts of Design & Illustration', 'Desktop Publishing', 'Vector Art', 'Digital Design', 'Layout Design'] },
      { category: 'Web & Interactive Design', items: ['Concepts of designing for the web', 'Website Development', 'Interactive Presentation', 'The Art of Editing', 'Sound Editing', 'Website Architecture', 'Basics of Filmmaking', 'Motion Graphics', 'Layer Based Compositing'] },
      { category: '3D Animation', items: ['Design Visualization', '3D Modelling', 'Lighting', 'Render Wrangle', 'Animation', 'Rigging', 'Texturing', 'Digital Sculpting'] }
    ],
    careerOptions: [ 'Digital Storyboard Artist', 'Graphic Designer', 'Web Designer', 'Illustrator', '2D Animator', 'Mobile Content Designer', 'Packaging Designer', 'Page Layout Artist', 'Template Designer', 'UI Designer', 'UX Designer', 'App Designer', 'Visualiser', '3D Animator/Modelor', 'Sound/Video Editor', 'Advertising art director', 'Designer for interactive E-learning', 'Communication designer', 'Media Content Manager' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'Adobe InDesign' }, { name: 'CorelDraw' }, { name: 'Adobe Illustrator' }, { name: 'Adobe Dreamweaver' }, { name: 'Adobe Animate' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'Adobe After Effects' }, { name: 'SketchUp' }, { name: 'Lumion' }, { name: 'Autodesk 3ds Max' }, { name: 'Autodesk Mudbox' }, { name: 'HTML5' } ],
    specializations: [
      { name: 'Print & Web Design', description: 'Focus on creating compelling visuals for print media and engaging, user-friendly websites.', skills: ['Graphic Design', 'Layout Design', 'Vector Art', 'Website Architecture', 'Interactive Design'], software: ['Photoshop', 'Illustrator', 'InDesign', 'Dreamweaver', 'HTML5'] },
      { name: '3D Animation & Visualization', description: 'Master the complete 3D pipeline, from modeling and texturing to animation and rendering.', skills: ['3D Modelling', 'Digital Sculpting', 'Texturing', 'Lighting & Rendering', 'Rigging & Animation'], software: ['3ds Max', 'Mudbox', 'SketchUp', 'Lumion'] },
      { name: 'Motion Graphics & Editing', description: 'Learn to create captivating motion graphics and edit professional-quality video and audio content.', skills: ['Motion Graphics', 'Layer Based Compositing', 'Video Editing', 'Sound Editing', 'Basics of Filmmaking'], software: ['After Effects', 'Premiere', 'Audition', 'Animate'] }
    ]
  },
  {
    name: 'DGA',
    slug: 'dga-graphics-animation',
    fullName: 'DGA - Program in Graphics & Animation',
    duration: '288 Hours',
    level: 'Intermediate',
    description: 'This is one of the most intensive career courses that make you well-versed with different aspects of design. The course empowers you to champion Graphic Design, Page Layout Design, and Interactive 3D Animation.',
    image: '/courses/design/dga.jpg',
    color: '#00d4ff',
    highlights: [
      'Master Graphic Design, Page Layout, and 3D Animation.',
      'Comprehensive training in digital design, illustration, and UI design.',
      'Learn video editing, compositing, and sound editing.',
      'Hands-on training with industry-standard software like 3ds Max and Adobe CC.',
      'Prepares you for a career in advertising, TV, and multimedia production.'
    ],
    courseContents: [
      { category: 'Graphic & Web Design', items: ['Digital Design', 'Digital Illustration', 'Page Layout', 'User interface Design', 'Interactive Design'] },
      { category: 'Post-Production', items: ['Compositing', 'Video Editing', 'Sound Editing'] },
      { category: '3D Animation', items: ['3D modelling', 'CG lighting', 'Texturing', '3D animation'] }
    ],
    careerOptions: [ 'Graphic Designer', 'Digital Publishing Artist', 'Motion Graphic Artist', '3D Artist', 'Video Editor', 'Interactive Designer', 'Page Layout Artist' ],
    softwareCovered: [ { name: 'Adobe Photoshop' }, { name: 'CorelDRAW' }, { name: 'Adobe InDesign' }, { name: 'Adobe Animate CC' }, { name: 'Adobe After Effects' }, { name: 'Adobe Premiere' }, { name: 'Adobe Audition' }, { name: 'Autodesk 3ds Max' } ],
    specializations: [
      { name: 'Graphic & UI Design', description: 'Focus on visual communication, digital illustration, and creating intuitive user interfaces.', skills: ['Digital Illustration', 'Page Layout', 'UI Design', 'Vector Art'], software: ['Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW'] },
      { name: '3D Animation', description: 'Learn the fundamentals of 3D, from modeling and texturing to lighting and animation.', skills: ['3D Modelling', 'Texturing', 'CG Lighting', '3D Animation'], software: ['Autodesk 3ds Max'] },
      { name: 'Motion Graphics & Editing', description: 'Master the art of video editing, sound design, and creating captivating motion graphics.', skills: ['Video Editing', 'Sound Editing', 'Compositing', 'Motion Graphics'], software: ['After Effects', 'Premiere', 'Audition'] }
    ]
  }
],
  },
  {
    name: 'Short Term Courses',
    slug: 'short-term-courses',
    description: 'Fast-track your skills with our intensive short-term courses. Perfect for beginners and professionals looking to enhance their expertise.',
    heroImage: '/courses/short-term-hero.jpg',
    iconImage: '/courses-img/short-term.webp',
    color: '#ff9500',
    gradient: 'linear-gradient(135deg, #ff9500, #cc7700)',
    totalCourses: 11,
    courses: [
  {
    name: 'Modelling and Texturing',
    slug: 'modelling-texturing',
    fullName: 'Modelling & Texturing',
    duration: '72 Hours',
    level: 'Foundation',
    description: 'This course helps you create and bring 3D model characters to life with CAD software and animation techniques. It covers technical aesthetics like inorganic modeling, digital sculpting, and stylized/low-poly character design.',
    image: '/courses/short-term/modelling-texturing.jpg',
    color: '#8338ec',
    highlights: [
      'Learn to create and texture 3D characters.',
      'Master inorganic and stylized modeling techniques.',
      'Get hands-on training in digital sculpting.',
      'Create low-poly characters for video games.',
      'Training on industry-standard software.'
    ],
    courseContents: [
      { category: 'Core Skills', items: ['Art & Technical Aesthetics', 'Inorganic Modelling', 'Stylised Character', 'Realistic Character', 'Digital Sculpting', 'Low Poly Character for Game'] }
    ],
    careerOptions: [
      '3D Modeling Artist', 'Texturing Artist', 'Digital Sculptor', 'Character Artist', 'Video Game Designer'
    ],
    softwareCovered: [
      { name: 'Autodesk Maya' }, { name: 'Zbrush' }
    ],
  },
  {
    name: 'Stereoscopic Filmmaking',
    slug: 'stereoscopic-filmmaking',
    fullName: 'Stereoscopic Filmmaking',
    duration: '144 Hours',
    level: 'Intermediate',
    description: 'This course teaches you to create high-quality animated films with state-of-the-art equipment and technologies, creating an illusion of 3D depth from 2D images. The course opens opportunities in media, science, and technology.',
    image: '/courses/short-term/stereoscopic-filmmaking.jpg',
    color: '#00d4ff',
    highlights: [
      'Learn high-quality stereoscopic 3D filmmaking.',
      'Master advanced node-based compositing and match moving.',
      'Hands-on training in rotoscopy, planar tracking, and depth creation.',
      'Work with industry-standard software like Nuke and Silhouette.',
      'Creates career opportunities beyond the media industry.'
    ],
    courseContents: [
      { category: 'Fundamentals', items: ['Concepts of stereoscopy', 'Basics of compositing', 'Digital enhancement'] },
      { category: 'Core Techniques', items: ['Rotoscopy', 'Clean plate creation', 'Planar tracking', 'Match moving'] },
      { category: 'Advanced Compositing', items: ['Advanced node-based compositing', 'Depth creation for 2D/3D', 'Conversion'] }
    ],
    careerOptions: [
      'Stereoscopic Artist', 'Compositor', 'Roto Artist', 'Matchmove Artist', 'Paint Artist'
    ],
    softwareCovered: [
      { name: 'Adobe Photoshop' }, { name: 'Nuke' }, { name: 'Adobe After Effects' },
      { name: 'Silhouette' }, { name: 'Mocha' }, { name: 'PFTrack' }
    ],
  },
  {
    name: 'Lighting',
    slug: 'lighting',
    fullName: 'Lighting',
    duration: '72 Hours',
    level: 'Foundation',
    description: 'Lighting forms the main element of an animated film. This course covers everything from the fundamentals of lighting and color theory to production tips and tricks, setting the mood for films with deep enthusiasm.',
    image: '/courses/short-term/lighting.jpg',
    color: '#8338ec',
    highlights: [
      'Master the fundamentals of lighting, design, and color theory.',
      'Learn to light CG environments and use advanced shaders.',
      'Gain production tips and tricks from industry experts.',
      'Get hands-on training in Autodesk Maya.'
    ],
    courseContents: [
      { category: 'Core Concepts', items: ['Fundamentals of Lighting, Design & Colour Theory', 'CG Lighting & Use of Shader', 'Lighting Environments', 'Advance Shaders', 'Production Tips N Tricks'] }
    ],
    careerOptions: [
      'Lighting Artist', 'Render Artist'
    ],
    softwareCovered: [
      { name: 'Autodesk Maya' }
    ],
  },
  {
    name: 'Animation',
    slug: 'animation',
    fullName: 'Animation',
    duration: '72 Hours',
    level: 'Foundation',
    description: 'Perfect for those with a creative mind and good visualization skills, this course teaches you the foundational tools of animation. You will get hands-on experience with Maya and learn to master character expressions and dynamics.',
    image: '/courses/short-term/animation.jpg',
    color: '#ff006e',
    highlights: [
      'Learn the foundational tools of animation.',
      'Master character animation and body dynamics.',
      'Understand basic and advanced performance animation.',
      'Get hands-on experience with Autodesk Maya.'
    ],
    courseContents: [
      { category: 'Core Skills', items: ['Animation foundation', 'Character Animation & Body Dynamics', 'Advanced performance animation', 'Basic performance animation'] }
    ],
    careerOptions: [
      'Character Animator', '3D Animator', 'Rigging Artist'
    ],
    softwareCovered: [
      { name: 'Autodesk Maya' }
    ],
  },
  {
    name: 'Maya Pro',
    slug: 'maya-pro',
    fullName: 'Maya Pro',
    duration: '192 Hours',
    level: 'Advanced',
    description: 'This course covers areas of animation including character animation, digital sculpting, and 3D design and modeling. It takes you through the nuances of modeling, texturing, lighting, rigging, VFX, and animation with Autodesk Maya.',
    image: '/courses/short-term/maya-pro.jpg',
    color: '#00d4ff',
    highlights: [
      'Become a professional in Autodesk Maya, a leading 3D software.',
      'Covers the entire 3D pipeline from modeling to animation.',
      'Learn advanced techniques like PBR workflow, dynamics, and digital sculpting.',
      'Option to choose a specialization to become a domain expert.'
    ],
    courseContents: [
      { category: '3D Foundation', items: ['3D design and modelling', 'Digital sculpting', 'Texturing'] },
      { category: 'Character & Rigging', items: ['Character set up and skinning', 'Character animation'] },
      { category: 'Advanced Topics', items: ['Look development and rendering', 'Hair, fur, cloth', 'CG lighting', 'Particles and dynamics', 'PBR Workflow'] }
    ],
    careerOptions: [
      '3D Modeling Artist', 'Character Animator', 'Rigging Artist', 'Lighting Artist', 'Texturing Artist', 'FX Artist'
    ],
    softwareCovered: [
      { name: 'Autodesk Maya' }, { name: 'Autodesk Mudbox' }
    ],
    specializations: [
      { name: 'Modeling & Sculpting', description: 'Focus on creating detailed characters and environments.', skills: ['3D Design', 'Digital Sculpting', 'PBR Texturing'], software: ['Maya', 'Mudbox'] },
      { name: 'Rigging & Animation', description: 'Bring characters to life with advanced rigging and animation techniques.', skills: ['Character Setup', 'Skinning', 'Character Animation', 'Body Dynamics'], software: ['Maya'] },
      { name: 'FX & Dynamics', description: 'Create realistic visual effects like hair, fur, cloth, and particles.', skills: ['Hair, fur, cloth simulation', 'Particle & dynamics systems', 'CG Lighting'], software: ['Maya'] }
    ]
  },
  {
    name: 'MAX Pro',
    slug: 'max-pro',
    fullName: 'MAX Pro',
    duration: '144 Hours',
    level: 'Advanced',
    description: 'This course trains you in texturing, lighting, modeling, skinning, and character setup using Autodesk 3ds Max. It helps you learn the fundamentals of the 3D world along with advanced areas like dynamics and animation.',
    image: '/courses/short-term/max-pro.jpg',
    color: '#8338ec',
    highlights: [
      'Master Autodesk 3ds Max for 3D production.',
      'Learn the fundamentals of the 3D world.',
      'Covers modeling, lighting, texturing, and character setup.',
      'Gain skills in dynamics and animation.'
    ],
    courseContents: [
      { category: 'Core 3D Skills', items: ['Introduction to the 3D world', '3D design and modelling', 'Digital Sculpting', 'Texturing & look development'] },
      { category: 'Animation & Rigging', items: ['Character set up and skinning', 'Animation'] },
      { category: 'Advanced Topics', items: ['Lighting', 'Dynamics'] }
    ],
    careerOptions: [
      '3D Modeling Artist', 'Lighting Artist', 'Texturing Artist', 'Character Rigger', '3D Generalist'
    ],
    softwareCovered: [
      { name: 'Autodesk 3ds Max' }, { name: 'Autodesk Mudbox' }
    ],
  },
  {
    name: 'Compositing Plus',
    slug: 'compositing-plus',
    fullName: 'Compositing Plus',
    duration: '172 Hours',
    level: 'Intermediate',
    description: 'This course prepares you to excel in areas like digital design, match moving, rotoscoping, and camera tracking. You will be trained to work on industry-standard software to combine different visual elements into a single, seamless scene.',
    image: '/courses/short-term/compositing-plus.jpg',
    color: '#ff006e',
    highlights: [
      'Excel in compositing and editing.',
      'Learn rotoscoping, match moving, and camera tracking.',
      'Train on industry-standard software like Nuke, Mocha, and Fusion.',
      'Learn both layer-based and node-based compositing.'
    ],
    courseContents: [
      { category: 'Fundamentals', items: ['Digital design', 'Layer-based compositing', 'Title graphics'] },
      { category: 'Core Compositing', items: ['Node-based compositing', 'Art of rotoscopy', 'Live action compositing', '3D camera projection'] },
      { category: 'Tracking & Integration', items: ['Match moving', 'Camera tracking', 'Stereoscopic pipeline'] }
    ],
    careerOptions: [
      'Compositor', 'Roto Artist', 'Matchmove Artist', 'Paint Artist', 'Motion Graphics Artist'
    ],
    softwareCovered: [
      { name: 'Adobe Photoshop' }, { name: 'Fusion' }, { name: 'Mocha' }, 
      { name: 'Nuke' }, { name: 'Adobe After Effects' }, { name: 'Silhouette' }, { name: '3D Equalizer' }
    ],
  },
  {
    name: 'Digital Filmmaking',
    slug: 'digital-filmmaking',
    fullName: 'Digital Filmmaking',
    duration: '144 Hours',
    level: 'Intermediate',
    description: 'Learn the basics and core areas of filmmaking, including pre-production, linear editing, sound editing, and clay animation. Gain hands-on experience with industry-standard software to become an expert.',
    image: '/courses/short-term/digital-filmmaking.jpg',
    color: '#00d4ff',
    highlights: [
      'Master core filmmaking techniques from pre-production to post-production.',
      'Hands-on experience with the Adobe Creative Suite.',
      'Learn claymation and digital compositing techniques.',
      'Prepares you for roles like cinematographer, director, and screenwriter.'
    ],
    courseContents: [
      { category: 'Core Skills', items: ['Pre-production', 'Concepts of filmmaking', 'Clay animation', 'Digital design', 'Basics of compositing', 'Sound Editing', 'Concepts of non-linear editing'] }
    ],
    careerOptions: ['Cinematographer', 'Director', 'Producer', 'Screenwriter', 'Video Editor'],
    softwareCovered: [
      { name: 'Adobe Photoshop' }, { name: 'Adobe After Effects' }, { name: 'Adobe Audition' }, { name: 'Adobe Premiere' }
    ],
  },
  {
    name: 'Advanced Compositing',
    slug: 'advanced-compositing',
    fullName: 'Advanced Compositing',
    duration: '72 Hours',
    level: 'Advanced',
    description: 'This course helps you learn different software for making movies, including techniques like Rotoscopy, 3D camera projection, and Live action compositing, sharpening your practical knowledge for the industry.',
    image: '/courses/short-term/advanced-compositing.jpg',
    color: '#8338ec',
    highlights: [
      'Master advanced compositing techniques for film.',
      'Learn rotoscopy, planar tracking, and 3D camera projection.',
      'Hands-on training with Nuke, Mocha, and Silhouette.',
      'Prepares you for a career as a production artist or game developer.'
    ],
    courseContents: [
      { category: 'Core Techniques', items: ['Live action compositing', 'Rotoscopy', 'Planar tracking', 'Stereoscopic pipeline', '3D camera projection'] }
    ],
    careerOptions: ['Production Artist', 'Graphic Designer', 'Game Developer', 'Compositor', 'Roto Artist'],
    softwareCovered: [
      { name: 'Nuke' }, { name: 'Silhouette' }, { name: 'Mocha' }
    ],
  },
  {
    name: 'Design Viz Pro',
    slug: 'design-viz-pro',
    fullName: 'Design Viz Pro',
    duration: '168 Hours',
    level: 'Advanced',
    description: 'This course allows you to deep dive into design and visualization, from planning to execution, preparing you for a career in animation, production houses, or architecture and engineering companies.',
    image: '/courses/short-term/design-viz-pro.jpg',
    color: '#00d4ff',
    highlights: [
      'Deep dive into design and visualization from planning to execution.',
      'Master 3D design visualization and real-world lighting simulation.',
      'Learn to create immersive 3D walkthroughs.',
      'Training on software like 3ds Max, Lumion, and Unity.'
    ],
    courseContents: [
      { category: 'Core Skills', items: ['Video Editing', 'Interactive design', 'Photoshop for texturing', '3D design visualisation', 'Real world lighting simulation', '3D Walk Through'] }
    ],
    careerOptions: ['3D Visualizer', 'Architectural Visualizer', 'Product Designer', 'Motion Graphics Artist'],
    softwareCovered: [
      { name: 'Adobe Photoshop' }, { name: 'Adobe Premiere' }, { name: 'Autodesk 3ds Max' }, { name: 'Sketchup' }, { name: 'Lumion' }, { name: 'V-Ray' }, { name: 'Unity' }
    ],
  },
  {
    name: 'Blender Pro',
    slug: 'blender-pro',
    fullName: 'Blender Pro',
    duration: '144 Hours',
    level: 'Advanced',
    description: 'This course covers the entirety of the 3D pipeline in Blender – modeling, rigging, animation, simulation, rendering, compositing, motion tracking, video editing, and game creation.',
    image: '/courses/short-term/blender-pro.jpg',
    color: '#8338ec',
    highlights: [
      'Master the entire 3D pipeline in the open-source suite, Blender.',
      'Learn modeling, rigging, animation, simulation, and rendering.',
      'Covers compositing, motion tracking, and video editing.',
      'Gain skills in game creation within Blender.'
    ],
    courseContents: [
      { category: '3D Pipeline', items: ['3D design & modelling', 'Digital sculpting', 'Texturing', 'Look development & rendering', 'CG lighting', 'Particles & dynamics', 'Hair, fur, cloth', 'Character set up & skinning', 'Character animation', 'Compositing & edting'] }
    ],
    careerOptions: ['3D Generalist', 'Blender Artist', 'Game Developer', 'Animator', 'VFX Artist'],
    softwareCovered: [
      { name: 'Blender' }
    ],
  }
],
  },
];