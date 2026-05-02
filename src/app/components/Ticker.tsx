const ITEMS = [
  'Claude Integration', 'ChatGPT Deployment', 'Gemini Strategy',
  'AWS & Google Cloud', 'Lovable & Base44', 'Enterprise AI Adoption',
  'Custom AI Solutions', 'LLM Architecture',
];

const TickerRow = () => (
  <div className="ticker-item">
    {ITEMS.map((item, i) => (
      <span key={i}>
        <span className="ticker-dot">✦</span> {item}{' '}
      </span>
    ))}
  </div>
);

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}
