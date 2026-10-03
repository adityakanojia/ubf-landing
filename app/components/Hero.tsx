import type { ReactNode } from "react";

interface HeroCardProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
}

const heroCards: HeroCardProps[] = [
  {
    icon: "🌱",
    title: "Vriddhagami",
    description:
      "Transforming learning and healing spaces across India for the next generation",
    stat: "Active →",
  },
  {
    icon: "📚",
    title: "Arivio",
    description:
      "STEAM education through rural learning hubs — accessible to all",
    stat: "5 Hubs",
  },
  {
    icon: "🏛️",
    title: "InspiraZ",
    description:
      "Campus Leaders Programme igniting youth leadership at scale",
    stat: "Flagship",
  },
  {
    icon: "🌊",
    title: "BlueSweep",
    description:
      "Youth-driven eco action — coastal cleanup, waste-to-wealth innovation",
    stat: "600+",
  },
];

function StatItem({ children }: { children: ReactNode }) {
  return children;
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hl">
        <div className="hbadge rv">
          <span className="bdot" />
          Youth-Led · Section 8 Non-Profit · India
        </div>
        <h1 className="hh1 rv d1" style={{ fontFamily: "var(--font-playfair), serif" }}>
          The next
          <br />
          generation
          <br />
          building a <span className="bl">better</span>
          <br />
          <span className="fd">India.</span>
        </h1>
        <p className="hp rv d2">
          United Beings Foundation is a youth-led organisation empowering the
          next generation through STEM education, creative arts, leadership
          development, and environmental action — bridging opportunity gaps
          across India.
        </p>
        <div className="hbtns rv d3">
          <a href="#initiatives" className="btn-p">
            Explore our work →
          </a>
          <a href="#cta" className="btn-o">
            Get involved
          </a>
        </div>
        <div className="hstats rv d4">
          <div className="hs">
            <span className="hsn">
              6<span>+</span>
            </span>
            <span className="hsl">Active programmes</span>
          </div>
          <div className="hs">
            <span
              className="hsn"
              style={{
                fontSize: "clamp(12px, 2.5vw, 18px)",
                letterSpacing: "-0.01em",
              }}
            >
              Need-<span>based</span>
            </span>
            <span className="hsl">Access for all</span>
          </div>
          <div className="hs">
            <span className="hsn">4IR</span>
            <span className="hsl">Ready skills</span>
          </div>
          <div className="hs">
            <span className="hsn">∞</span>
            <span className="hsl">Potential unlocked</span>
          </div>
        </div>
      </div>
      <div className="hero-cards-row rv d1" id="heroCards">
        {heroCards.map((card) => (
          <div className="hcard" key={card.title}>
            <div className="hcard-icon" aria-hidden="true">
              {card.icon}
            </div>
            <div className="hcard-title">{card.title}</div>
            <div className="hcard-desc">{card.description}</div>
            <div className="hcard-num" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {card.stat}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
