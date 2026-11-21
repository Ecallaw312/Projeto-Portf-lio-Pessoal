function Experiencia({ experience }) {
  return (
    <section id="experiencia" className="portfolio-section">
      <div className="section-heading">
        <p className="section-kicker">Caminho profissional</p>
        <h2 className="section-title">Experiência</h2>
      </div>
      {experience.length > 0 ? (
        <ul className="experience-list">
          {experience.map((item) => (
            <li
              className="content-card experience-card"
              key={`${item.role}-${item.company}`}
            >
              <div className="card-topline">
                <h3 className="card-title">{item.role}</h3>
                {item.period && <p className="card-period">{item.period}</p>}
              </div>
              <p className="card-subtitle">{item.company}</p>
              {item.description && (
                <p className="card-description">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Conteúdo em breve.</p>
      )}
    </section>
  )
}

export default Experiencia
