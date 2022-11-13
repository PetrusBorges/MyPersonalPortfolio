//styled-components
import { Header, Container } from "./styles"

//images
import Arrow from "../../assets/images/arrow.svg"
import Profile from "../../assets/images/profile.png"

export default function About() {
  return (
    <Header id="about">
      <h2>About Me.</h2>
      <Container>
        <div className="containerInfo">
          <p>I'm Petrus, a Software Developer based in Juazeiro do Norte, Brazil.</p><br />
          <p>My goal is to always build scalable products and performant experiences as a <span>Front End Developer.</span></p><br />
          <p>Here are a few technologies I've been working with recently:</p><br />

          <div className="containerTecnologies">
            <div className="tec">
              <img src={Arrow} alt="Arrow" />
              <p>JavaScript</p>
            </div>
            <div className="tec">
              <img src={Arrow} alt="Arrow" />
              <p>TypeScript</p>
            </div>
            <div className="tec">
              <img src={Arrow} alt="Arrow" />
              <p>NodeJS</p>
            </div>
            <div className="tec">
              <img src={Arrow} alt="Arrow" />
              <p>Docker</p>
            </div>
            <div className="tec">
              <img src={Arrow} alt="Arrow" />
              <p>React.JS</p>
            </div>
            <div className="tec">
              <img src={Arrow} alt="Arrow" />
              <p>React Native</p>
            </div>
          </div>
        </div>
        <div className="containerImage">
          <img src={Profile} alt="Profile" />
          <div className="imageBorder"></div>
        </div>
      </Container>
    </Header>
  )
}
