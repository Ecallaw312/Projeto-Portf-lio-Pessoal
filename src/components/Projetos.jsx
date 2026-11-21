import { useState } from 'react'

function Projetos({ projects }) {
  const [expandedProjects, setExpandedProjects] = useState({})

  function toggleProject(index) {
    setExpandedProjects((currentProjects) => ({
      ...currentProjects,
      [index]: !currentProjects[index],
    }))
  }

  return (
    <section id="projetos" className="portfolio-section">
      <div className="section-heading">
        <p className="section-kicker">Trabalhos selecionados</p>
        <h2 className="section-title">Projetos</h2>
      </div>
      {projects.length > 0 ? (
        <ul className="content-grid">
          {projects.map((project, index) => {
            const isExpanded = Boolean(expandedProjects[index])
            const detailsId = `project-details-${index}`

            return (
              <li className="content-card project-card" key={project.name}>
                <div className="card-topline">
                  <h3 className="card-title">{project.name}</h3>
                  <button
                    className="project-toggle"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => toggleProject(index)}
                  >
                    {isExpanded ? 'Ocultar detalhes' : 'Mostrar detalhes'}
                  </button>
                </div>
                <div
                  className={`project-details${isExpanded ? ' is-expanded' : ''}`}
                  id={detailsId}
                  aria-hidden={!isExpanded}
                  inert={!isExpanded}
                >
                  <div className="project-details-inner">
                    <p className="card-description">{project.description}</p>
                    {project.technologies?.length > 0 && (
                      <ul className="technology-list" aria-label="Tecnologias">
                        {project.technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    )}
                    {project.url && (
                      <a
                        className="project-link"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver projeto <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="empty-state">Conteúdo em breve.</p>
      )}
    </section>
  )
}

export default Projetos
