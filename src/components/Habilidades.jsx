function Habilidades({ skills }) {
  return (
    <section id="habilidades" className="portfolio-section">
      <div className="section-heading">
        <p className="section-kicker">Ferramentas e conhecimentos</p>
        <h2 className="section-title">Habilidades</h2>
      </div>
      {skills.length > 0 ? (
        <ul className="content-grid">
          {skills.map((skill) => (
            <li className="content-card skill-card" key={skill}>
              <span className="skill-mark" aria-hidden="true">
                {skill.slice(0, 2).toUpperCase()}
              </span>
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Conteúdo em breve.</p>
      )}
    </section>
  )
}

export default Habilidades
