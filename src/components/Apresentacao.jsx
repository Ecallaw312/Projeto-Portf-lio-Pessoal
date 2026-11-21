function Apresentacao({ name, role, presentation, photo }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Portfólio pessoal</p>
        <h1>{name || 'Portfólio pessoal'}</h1>
        {role && <p className="hero-role">{role}</p>}
        {presentation && <p className="hero-description">{presentation}</p>}
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos
          </a>
          <a className="button button-secondary" href="#contato">
            Entre em contato
          </a>
        </div>
      </div>
      <div className="portrait-frame">
        {photo ? (
          <img
            className="portrait-image"
            src={photo}
            alt={`Foto de ${name || 'apresentação'}`}
          />
        ) : (
          <div className="portrait-placeholder" aria-label="Espaço para foto">
            <span>Espaço para foto</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Apresentacao
