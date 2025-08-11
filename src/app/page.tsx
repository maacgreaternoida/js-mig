/* eslint-disable @next/next/no-html-link-for-pages */
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import StudentWorksSection from "@/components/StudentWorksSection"; // 1. Import the new component
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
//

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
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
              <a href="/courses" className="btn btn-primary" role="link" aria-label="Explore Courses at MAAC Greater Noida">Explore Courses</a>
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
