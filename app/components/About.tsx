import Image from "next/image";

export default function About() {
  const chips = [
    "STEM Education",
    "Creative Arts",
    "Environment",
    "Leadership",
    "Rural Outreach",
    "Section 8 Non-Profit",
  ];

  return (
    <section id="about">
      <div className="abl rv">
        <div className="eye">
          <div className="eline" />
          Who we are
        </div>
        <h2 className="sh" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Not just an NGO.
          <br />
          <em>A movement.</em>
        </h2>
        <p className="sub" style={{ marginTop: "14px", maxWidth: "440px" }}>
          United Beings Foundation is a youth-led Section 8 non-profit bridging
          rural and urban India through STEM education and skill development. By
          blending community heritage with cutting-edge technologies, we prepare
          the next generation to be job-ready, entrepreneurial, and
          purpose-driven.
        </p>
        <p className="sub" style={{ marginTop: "12px", maxWidth: "440px" }}>
          Our learning hubs and creative initiatives provide young learners with
          inspiring spaces to grow, connect, and access opportunities that shape
          a brighter future — because opportunity should never be a privilege.
        </p>
        <div className="abchips">
          {chips.map((chip) => (
            <span className="achip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="abr rv d1">
        <div className="abimgw">
          <Image
            src="/Website pics/First Pic.JPG"
            alt="Youth in a UBF learning space"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            placeholder="empty"
          />
          <div className="img-overlay">
            <span className="ovl">Impact-First · Youth-Led</span>
            <span className="ovr">
              Accessible to all
              <br />
              who need it most
            </span>
          </div>
        </div>
        <div className="factg">
          <div className="fact">
            <div className="factn">
              <span className="bl">6</span>+
            </div>
            <div className="factl">
              Active initiatives across education, arts & environment
            </div>
          </div>
          <div className="fact">
            <div className="factn">
              4<span className="bl">IR</span>
            </div>
            <div className="factl">
              Future-ready skills for the Fourth Industrial Revolution
            </div>
          </div>
          <div className="fact">
            <div
              className="factn"
              style={{
                fontSize: "clamp(18px, 3vw, 24px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              Need-<span className="bl">based</span>
            </div>
            <div className="factl">
              Support for those who need it — no one turned away for lack of
              means
            </div>
          </div>
          <div className="fact">
            <div
              className="factn"
              style={{
                fontSize: "clamp(18px, 3vw, 26px)",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              Youth-<span className="bl">led</span>
            </div>
            <div className="factl">
              Section 8 Non-Profit driven by young India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
