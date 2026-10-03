export default function CTA() {
  return (
    <section id="cta">
      <div className="ctaglow" />
      <p className="ctasup rv">Be part of the change</p>
      <h2
        className="ctah2 rv d1"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        The next generation
        <br />
        is building <em>the future.</em>
        <br />
        Support them.
      </h2>
      <p className="ctap rv d2">
        Partner, volunteer, or collaborate with UBF. Every connection creates
        lasting opportunity for the next generation of young people across India.
      </p>
      <div className="ctabtns rv d3">
        <a href="mailto:contact@ubfngo.org" className="btnw">
          Partner with us →
        </a>
        <a href="#initiatives" className="btnwo">
          Explore all initiatives
        </a>
      </div>
    </section>
  );
}
