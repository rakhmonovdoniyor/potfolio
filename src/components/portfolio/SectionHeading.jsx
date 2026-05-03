function SectionHeading({ kicker, title, description, titleId }) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2 id={titleId}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeading;
