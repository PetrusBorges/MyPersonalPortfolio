//styled-components
import { Container, Header } from "./styles";

//images
import Code from "../../assets/images/code.svg"
import GitHub from "../../assets/images/github.svg"
import Globe from "../../assets/images/globe.svg"

export default function OtherProjects() {
  return (
    <Header>
      <h2>Other Projects</h2>
      <Container>
        <div className="containerProject">
          <div className="headerProject">
            <img src={Code} alt="Code" />
            <div className="headerLinks">
              <a href="https://github.com/PetrusBorges/Staart-Autenticador" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
              <a href="https://staart-autenticador.vercel.app" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
            </div>
          </div>
          <h3>Authentication and Data Storage in React</h3>
          <p>Authentication and Data Storage in React using FireBase as a database, being possible to create an user account, login, retrieve user data and change user data.</p>
          <div className="tecnologies">
            <small>React</small>
            <small>JavaScript</small>
            <small>Styled Components</small>
            <small>Fire Base</small>
          </div>
        </div>
        <div className="containerProject">
          <div className="headerProject">
            <img src={Code} alt="Code" />
            <div className="headerLinks">
              <a href="https://github.com/PetrusBorges/React-OpenAI" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
              <a href="https://github.com/PetrusBorges/React-OpenAI" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
            </div>
          </div>
          <h3>React OpenAI</h3>
          <p>The project was implemented to create any image with the help of artificial intelligence having as reference the insertion of keywords sent in the search input.</p>
          <div className="tecnologies">
            <small>React</small>
            <small>JavaScript</small>
            <small>Styled Components</small>
            <small>OpenAI</small>
          </div>
        </div>
        <div className="containerProject">
          <div className="headerProject">
            <img src={Code} alt="Code" />
            <div className="headerLinks">
              <a href="https://github.com/PetrusBorges/OneBitCode-SpaceX-Clone" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
              <a href="https://petrusborges-onebitx.netlify.app" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
            </div>
          </div>
          <h3>Clone Landing Page SpaceX</h3>
          <p>SpaceX Home Page Clone it is a website adapted for mobile and web, organized in a single page for a possible!</p>
          <div className="tecnologies">
            <small>HTML</small>
            <small>SCSS</small>
          </div>
        </div>
        <div className="containerProject">
          <div className="headerProject">
            <img src={Code} alt="Code" />
            <div className="headerLinks">
              <a href="https://github.com/PetrusBorges/Apple-Home-Page-Clone-02" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
              <a href="https://petrusborges-apple-clone02.netlify.app" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
            </div>
          </div>
          <h3>Apple Home Page Clone</h3>
          <p>Apple Home Page Clone it is a website adapted for mobile and web, organized in a single page for a possible!</p>
          <div className="tecnologies">
            <small>HTML</small>
            <small>CSS</small>
            <small>JavaScript</small>
          </div>
        </div>
      </Container>
    </Header>
  )
}
