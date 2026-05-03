import SectionHeading from "./SectionHeading";

function StrengthsSection({ strengthsContent, strengths }) {
  return (
    <section className="section" aria-labelledby="strengths-title">
      <SectionHeading
        kicker="What I bring"
        title={strengthsContent.title}
        description={strengthsContent.description}
        titleId="strengths-title"
      />

      <div className="strength-grid">
        {strengths.map((item) => (
          <article key={item.number} className="panel strength-card">
            <span className="strength-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StrengthsSection;
