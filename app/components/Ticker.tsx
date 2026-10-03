const tickerItems = [
  "STEM Education",
  "Creative Arts",
  "Youth Leadership",
  "Environmental Action",
  "Rural Outreach",
  "Access for All",
  "4IR Ready Skills",
  "Next Generation",
  "Community Impact",
];

export default function Ticker() {
  // Duplicate items for seamless infinite scroll
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ttrack">
        {items.map((item, i) => (
          <div className="titem" key={`${item}-${i}`}>
            <span className="tdot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
