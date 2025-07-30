import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import StudentWorksSection from "@/components/StudentWorksSection"; // 1. Import the new component
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesSection />
      <StudentWorksSection /> {/* 2. Add the StudentWorksSection component */}
      <TestimonialSlider />
      <ContactForm />
      
      {/* The Footer will go here later */}
    </>
  );
}
