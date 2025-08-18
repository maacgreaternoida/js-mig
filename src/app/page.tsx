/* eslint-disable @next/next/no-html-link-for-pages */
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import StudentWorksSection from "@/components/StudentWorksSection"; // 1. Import the new component
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
//

export const metadata = {
  title: "MAAC Greater Noida | Best Animation, VFX & Gaming Institute In Delhi NCR",
  description: "MAAC Greater Noida - The official and leading animation, VFX & gaming institute in Greater Noida. Located at Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt. Call 08048052804 for admission. 100% placement guarantee, expert faculty, industry-standard training.",
  keywords: [
    "MAAC Greater Noida",
    "MAAC Greater Noida official",
    "MAAC Greater Noida institute",
    "MAAC Greater Noida campus",
    "MAAC Greater Noida location",
    "MAAC Greater Noida address",
    "MAAC Greater Noida contact",
    "MAAC Greater Noida phone",
    "MAAC Greater Noida courses",
    "MAAC Greater Noida admission",
    "MAAC Greater Noida OM Tower",
    "MAAC Greater Noida Alpha 1 Commercial Belt"
  ],
  alternates: { canonical: "https://www.maacgreaternoida.com/" },
  openGraph: {
    title: "MAAC Greater Noida - Official Animation & VFX Institute",
    description: "MAAC Greater Noida - The official and leading animation, VFX & gaming institute in Greater Noida. Located at Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt. Call 08048052804.",
    url: "https://www.maacgreaternoida.com",
    siteName: "MAAC Greater Noida",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAAC Greater Noida - Official Animation & VFX Institute",
    description: "MAAC Greater Noida - The official and leading animation, VFX & gaming institute in Greater Noida. Located at OM Tower, Alpha 1 Commercial Belt.",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* Brand Authority Section - MAAC Greater Noida */}
      <section className="brand-authority-section">
        <div className="container">
          <div className="card">
            <div className="badge">Official MAAC Institute</div>
            <h2 className="title">MAAC Greater Noida - Your Trusted Animation & VFX Institute</h2>
            <p className="subtitle">
              <strong>MAAC Greater Noida</strong> is the official and authorized MAAC Animation Academy center serving Greater Noida, Noida, and Delhi NCR. 
              As the leading animation institute in Greater Noida, we provide industry-standard training in 3D Animation, VFX, Gaming, and Multimedia Design.
            </p>
            <div className="brand-highlights">
              <div className="highlight-item">
                <span className="icon">🏆</span>
                <span className="text">Official MAAC Franchise in Greater Noida</span>
              </div>
              <div className="highlight-item">
                <span className="icon">📍</span>
                <span className="text">Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt</span>
              </div>
              <div className="highlight-item">
                <span className="icon">📞</span>
                <span className="text">Call: 08048052804</span>
              </div>
              <div className="highlight-item">
                <span className="icon">🎯</span>
                <span className="text">100% Placement Assistance</span>
              </div>
              <div className="highlight-item">
                <span className="icon">👨‍🏫</span>
                <span className="text">Expert Faculty & Industry Mentors</span>
              </div>
            </div>
            <div className="buttons">
              <a href="/courses" className="btn btn-primary" role="link" aria-label="Explore Courses at MAAC Greater Noida">Explore Courses</a>
              <a href="/contact" className="btn btn-secondary" role="link" aria-label="Visit MAAC Greater Noida Campus">Visit Our Campus</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (E-A-T) Section - standalone styles to avoid dark blending */}
      <section className="about-section">
        <div className="container">
          <div className="card">
            <div className="badge">About MAAC Greater Noida</div>
            <h2 className="title">MAAC Greater Noida: The Leading Animation & VFX Institute in Delhi NCR</h2>
            <p className="subtitle">
              We deliver job-oriented training in animation, VFX, gaming, multimedia design and UI/UX with
              industry-expert faculty, hands-on projects, and placement-focused mentoring. As a trusted
              institute for students across Greater Noida, Noida and Ghaziabad, we train on studio tools like
              Maya, Nuke, Unreal Engine, After Effects and Substance Painter while helping you build a
              professional portfolio that gets noticed in Delhi NCR.
            </p>
            <div className="buttons">
              <a href="/contact" className="btn btn-secondary" role="link" aria-label="Talk to a Counselor at MAAC Greater Noida">Talk to a Counselor</a>
            </div>
          </div>
        </div>
      </section>
      <CoursesSection />
      <StudentWorksSection /> {/* 2. Add the StudentWorksSection component */}
      <TestimonialSlider />
      <ContactForm />
      
      {/* The Footer will go here later */}
    </>
  );
}
