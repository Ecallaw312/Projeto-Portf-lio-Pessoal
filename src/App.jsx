import './App.css'
import Header from './components/Header.jsx'
import Apresentacao from './components/Apresentacao.jsx'
import Sobre from './components/Sobre.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projetos from './components/Projetos.jsx'
import Experiencia from './components/Experiencia.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import { portfolio } from './data/portfolio.js'

function App() {
  return (
    <div className="portfolio">
      <Header name={portfolio.name} />
      <main className="portfolio-main">
        <Apresentacao
          name={portfolio.name}
          role={portfolio.role}
          presentation={portfolio.presentation}
          photo={portfolio.photo}
        />
        <Sobre about={portfolio.about} />
        <Habilidades skills={portfolio.skills} />
        <Projetos projects={portfolio.projects} />
        <Experiencia experience={portfolio.experience} />
        <Contato contact={portfolio.contact} />
      </main>
      <Footer name={portfolio.name} />
    </div>
  )
}

export default App
