//styled-components
import { Container, ListInfo } from "./styles";

//images
import ReactLogo from "../../assets/images/react.svg"

export default function Header() {
  return (
    <Container>
      <div className="logoInfo">
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
          <img src={ReactLogo} alt="ReactLogo" />
          <p>Made with <span>React.JS</span></p>
        </a>
      </div>

      <ListInfo>
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </ListInfo>
    </Container>
  )
}
