import { initiatives } from "../data/initiatives";
import InitiativesTabs from "./InitiativesTabs";

export default function Initiatives() {
  return (
    <section id="initiatives">
      <div className="itop rv">
        <div className="eye">
          <div className="eline" />
          What we do
        </div>
        <h2 className="sh" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Six programmes.
          <br />
          <em>One purpose.</em>
        </h2>
        <p className="sub" style={{ marginTop: "12px" }}>
          Equipping the next generation with the tools, spaces, and
          opportunities to build the India they deserve — with access ensured
          for those who need it most.
        </p>
      </div>
      
      <InitiativesTabs initiatives={initiatives} />
    </section>
  );
}
