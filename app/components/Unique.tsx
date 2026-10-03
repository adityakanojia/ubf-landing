import { uniqueCards } from "../data/unique-cards";

export default function Unique() {
  return (
    <section id="unique">
      <div className="uniq-head rv">
        <div className="eye">
          <div className="eline" />
          What makes us different
        </div>
        <h2 className="sh" style={{ fontFamily: "var(--font-playfair), serif" }}>
          One-of-a-kind
          <br />
          <em>programmes & activities.</em>
        </h2>
        <p className="sub" style={{ marginTop: "12px", maxWidth: "560px" }}>
          Every UBF initiative is built from scratch to address a gap no one
          else is filling. These aren&apos;t replicated models — they are entirely
          original approaches, designed by young people for the next generation.
        </p>
      </div>
      <div className="uniq-grid rv d1">
        {uniqueCards.map((card, idx) => (
          <div className="ucard" key={idx}>
            <div className="ucard-top">
              <div className="ucard-icon" aria-hidden="true">
                {card.icon}
              </div>
              <span className="ucard-badge">{card.badge}</span>
            </div>
            <div
              className="ucard-title"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {card.title}
            </div>
            <p className="ucard-desc">{card.description}</p>
            <div className="ucard-tags">
              {card.tags.map((tag) => (
                <span className="utag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
