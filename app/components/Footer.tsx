import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="fttop">
        <div>
          <div className="flogo">
            <Image
              src="/ubf-logo.png"
              alt="UBF Logo"
              width={28}
              height={28}
              style={{ borderRadius: '7px', objectFit: 'contain' }}
            />
            <span className="fnm">United Beings Foundation</span>
          </div>
          <p className="fdesc">
            A youth-led Section 8 non-profit dedicated to bridging India&apos;s
            opportunity gap through STEM education, creative arts, leadership
            development, and environmental action — with need-based access
            ensuring no young person is ever turned away.
          </p>
        </div>
        <div className="fcol">
          <h5>Initiatives</h5>
          <ul>
            <li><a href="#initiatives">Vriddhagami</a></li>
            <li><a href="#initiatives">Art Den</a></li>
            <li><a href="#initiatives">Destino Arte</a></li>
            <li><a href="#initiatives">Arivio</a></li>
            <li><a href="#initiatives">InspiraZ</a></li>
            <li><a href="#initiatives">BlueSweep</a></li>
          </ul>
        </div>
        <div className="fcol">
          <h5>Organisation</h5>
          <ul>
            <li><a href="#about">About UBF</a></li>
            <li><a href="#pillars">Mission & Vision</a></li>
            <li><a href="#unique">What Makes Us Different</a></li>
            <li><a href="#numbers">Our Impact</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Annual Report</a></li>
          </ul>
        </div>
        <div className="fcol">
          <h5>Get Involved</h5>
          <ul>
            <li><a href="#cta">Partner with Us</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">CSR Programmes</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">ubfngo.org</a></li>
          </ul>
        </div>
      </div>
      <div className="ftbot">
        <span
          className="fcopy"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          © {new Date().getFullYear()} United Beings Foundation · Section 8 Non-Profit · India · All rights reserved.
        </span>
        <span
          className="ftag"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          Every young person. Every opportunity. Every future.
        </span>
      </div>
    </footer>
  );
}
