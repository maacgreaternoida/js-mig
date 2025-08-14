import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAAC Greater Noida - Official Animation & VFX Institute | #1 in Greater Noida",
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
    "MAAC Greater Noida fees",
    "MAAC Greater Noida placement",
    "MAAC Greater Noida faculty",
    "MAAC Greater Noida reviews",
    "MAAC Greater Noida timings",
    "MAAC Greater Noida OM Tower",
    "MAAC Greater Noida Alpha 1 Commercial Belt"
  ],
  alternates: { canonical: "https://www.maacgreaternoida.com/maac-greater-noida" },
  openGraph: {
    title: "MAAC Greater Noida - Official Animation & VFX Institute",
    description: "MAAC Greater Noida - The official and leading animation, VFX & gaming institute in Greater Noida. Located at Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt. Call 08048052804.",
    url: "https://www.maacgreaternoida.com/maac-greater-noida",
    siteName: "MAAC Greater Noida",
    locale: "en_US",
    type: "website",
  },
};

export default function MAACGreaterNoidaPage() {
  return (
    <div className="maac-greater-noida-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="main-title">MAAC Greater Noida</h1>
            <h2 className="subtitle">Official Animation & VFX Institute in Greater Noida</h2>
            <p className="description">
              MAAC Greater Noida is the authorized and leading animation, VFX, gaming, and multimedia design institute 
              serving Greater Noida, Noida, and Delhi NCR. We provide industry-standard training with 100% placement assistance.
            </p>
            <div className="cta-buttons">
              <a href="/courses" className="btn btn-primary">Explore Courses</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Institute Details */}
      <section className="institute-details">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card">
              <h3>🏢 Institute Information</h3>
              <ul>
                <li><strong>Name:</strong> MAAC Greater Noida</li>
                <li><strong>Type:</strong> Official MAAC Animation Academy Franchise</li>
                <li><strong>Location:</strong> Greater Noida, Delhi NCR</li>
                <li><strong>Address:</strong> Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt, Greater Noida</li>
                <li><strong>Contact:</strong> 08048052804</li>
                <li><strong>Timings:</strong> Monday - Saturday, 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <h3>🎯 Why Choose MAAC Greater Noida?</h3>
              <ul>
                <li>✅ Official MAAC Franchise</li>
                <li>✅ 100% Placement Assistance</li>
                <li>✅ Industry-Expert Faculty</li>
                <li>✅ Latest Software Training</li>
                <li>✅ Professional Portfolio Building</li>
                <li>✅ Studio Visit & Industry Exposure</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <h3>📚 Popular Courses</h3>
              <ul>
                <li>🎬 3D Animation & VFX</li>
                <li>🎮 Game Design & Development</li>
                <li>🎨 Graphic Design & Multimedia</li>
                <li>📱 UI/UX Design</li>
                <li>🎭 Motion Graphics</li>
                <li>🏗️ Architectural Visualization</li>
              </ul>
            </div>
            
            <div className="detail-card">
              <h3>🛠️ Software Training</h3>
              <ul>
                <li>Adobe Creative Suite (Photoshop, After Effects, Premiere)</li>
                <li>Autodesk Maya & 3ds Max</li>
                <li>Unreal Engine & Unity</li>
                <li>Nuke & Fusion</li>
                <li>Substance Painter & Designer</li>
                <li>V-Ray & Arnold</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="location-contact">
        <div className="container">
          <div className="location-content">
            <h2>📍 MAAC Greater Noida Location</h2>
            <p>
              Our institute is conveniently located in Greater Noida, easily accessible from Noida, Ghaziabad, 
              and other parts of Delhi NCR. We serve students from across the region with our comprehensive 
              animation and VFX training programs.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>Call: 08048052804</span>
              </div>
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>Email: info@maacgreaternoida.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">🕒</span>
                <span>Hours: Mon-Sat, 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
