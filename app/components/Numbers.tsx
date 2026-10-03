export default function Numbers() {
  return (
    <div id="numbers">
      <div className="nc rv">
        <div className="ncn">
          <span className="bl">6</span>+
        </div>
        <div className="ncl">
          Active programmes across education, arts & environment
        </div>
      </div>
      <div className="nc rv d1">
        <div className="ncn">
          4<span className="bl">IR</span>
        </div>
        <div className="ncl">
          Future-ready skills for the Fourth Industrial Revolution
        </div>
      </div>
      <div className="nc rv d2">
        <div
          className="ncn"
          style={{
            fontSize: "clamp(22px, 4vw, 48px)",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
          }}
        >
          Need-<span className="bl">based</span>
        </div>
        <div className="ncl">
          Support for those who need it — no one turned away for lack of means
        </div>
      </div>
      <div className="nc rv d3">
        <div
          className="ncn"
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
          }}
        >
          Youth<span className="bl">-led</span>
        </div>
        <div className="ncl">Section 8 Non-Profit driven by young India</div>
      </div>
    </div>
  );
}
