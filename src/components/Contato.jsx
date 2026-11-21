function Contato({ contact }) {
  const { email, linkedin, github } = contact
  const hasContact = email || linkedin || github

  return (
    <section id="contato" className="portfolio-section">
      <div className="section-heading">
        <p className="section-kicker">Vamos conversar</p>
        <h2 className="section-title">Contato</h2>
      </div>
      {hasContact ? (
        <div className="contact-card">
          {email && (
            <a
              className="contact-link"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enviar e-mail para ${email}`}
              title="Enviar e-mail"
            >
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M3.75 5.25h16.5c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5H3.75c-.83 0-1.5-.67-1.5-1.5V6.75c0-.83.67-1.5 1.5-1.5Z" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="contact-label">E-mail</span>
            </a>
          )}
          {linkedin && (
            <a
              className="contact-link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de Wallace Souza no LinkedIn"
              title="LinkedIn"
            >
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31h.04ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
              </svg>
              <span className="contact-label">LinkedIn</span>
            </a>
          )}
          {github && (
            <a
              className="contact-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de Wallace Souza no GitHub"
              title="GitHub"
            >
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z" />
              </svg>
              <span className="contact-label">GitHub</span>
            </a>
          )}
        </div>
      ) : (
        <p className="empty-state">Conteúdo em breve.</p>
      )}
    </section>
  )
}

export default Contato
