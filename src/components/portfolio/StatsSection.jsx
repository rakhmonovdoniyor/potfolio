function StatsSection({ stats }) {
  return (
    <section className="section stats-section" aria-label="Quick highlights">
      <div className="stat-grid">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
