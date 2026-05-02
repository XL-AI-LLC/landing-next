const services = [
  { num: '01', icon: '🧭', title: 'AI Strategy & Roadmapping', desc: 'We assess your operations and design a tailored AI adoption roadmap — identifying the highest-leverage opportunities first.' },
  { num: '02', icon: '⚙️', title: 'LLM Integration & Deployment', desc: 'End-to-end integration of Claude, ChatGPT, or Gemini into your existing products, workflows, and infrastructure.' },
  { num: '03', icon: '🏢', title: 'Enterprise AI Adoption', desc: 'Change management, governance frameworks, and team training to ensure AI delivers lasting ROI across your organization.' },
  { num: '04', icon: '🔬', title: 'Custom Model Fine-Tuning', desc: 'Specialized model training and prompt engineering tailored to your industry, tone, and proprietary data.' },
  { num: '05', icon: '🔁', title: 'Workflow Automation', desc: 'Replace manual, repetitive processes with intelligent AI agents that save time and reduce cost at scale.' },
  { num: '06', icon: '📊', title: 'AI Performance Analytics', desc: 'Ongoing measurement and optimization of your AI systems — ensuring quality, reliability, and continuous improvement.' },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-label reveal">// What We Do</div>
        <h2 className="section-title reveal">Strategic AI Consulting That Moves Fast.</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card reveal" key={s.num}>
              <div className="service-num">{s.num}</div>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
