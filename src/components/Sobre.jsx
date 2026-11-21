function Sobre({ about }) {
  return (
    <section id="sobre" className="portfolio-section">
      <div className="section-heading">
        <p className="section-kicker">Conheça minha trajetória</p>
        <h2 className="section-title">Sobre mim</h2>
      </div>
      <div className="about-card">
        {about ? (
          <p className="section-copy">{about}</p>
        ) : (
          <p className="empty-state">Conteúdo em breve.</p>
        )}
      </div>
    </section>
  )
}

export default Sobre
