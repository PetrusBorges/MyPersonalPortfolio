//styled-components
import { Header, Container } from "./styles"

//images
import Project01 from "../../assets/images/project01.svg"
import Project02 from "../../assets/images/project02.svg"
import Project03 from "../../assets/images/project03.svg"
import GitHub from "../../assets/images/github.svg"
import Globe from "../../assets/images/globe.svg"

export default function Projects() {
  return (
    <Header id="projects">
      <h2>My favorite projects.</h2>
      <Container>
        <div className="projectImage">
          <img src={Project01} alt="Project01" />
        </div>
        <div className="projectInfo">
          <small>Featured Project</small>
          <h3>PokeAPI</h3>
          <div className="description">
            <p>It consists of the development of a Web application to be developed using ReactJS technologies, Styled Components, Context API, API Requests. <a href="https://desafio-front-end-brisalabs-poke-api.vercel.app" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>JavaScript</small>
            <small>Styled Components</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/Desafio-Front-end-Brisalabs-PokeAPI" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://desafio-front-end-brisalabs-poke-api.vercel.app" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="projectImage">
          <img src={Project02} alt="Project01" />
        </div>
        <div className="projectInfo">
          <small>Featured Project</small>
          <h3>Nubank - Redesign</h3>
          <div className="description">
            <p>Complete redesign of Nubank, bringing new features and animations looking for an aesthetics of the elements in a clean, clear and objective way. <a href="https://nubank-gilt.vercel.app" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>JavaScript</small>
            <small>SCSS</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/Nubank" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://nubank-gilt.vercel.app" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="projectImage">
          <img src={Project03} alt="Project01" />
        </div>
        <div className="projectInfo">
          <small>Featured Project</small>
          <h3>MyContacts</h3>
          <div className="description">
            <p>Application designed to work as a contact management, having functionality to register, search, filter and remove contacts. <a href="https://github.com/PetrusBorges/JStack-MyContacts" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>JavaScript</small>
            <small>Styled Components</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/JStack-MyContacts" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://github.com/PetrusBorges/JStack-MyContacts" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
    </Header>
  )
}
