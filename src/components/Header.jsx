function Header({ name }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark" aria-hidden="true">
            {name ? name.charAt(0).toUpperCase() : 'P'}
          </span>
          <span>{name || 'Portfólio'}</span>
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
