//styled-components
import { Container } from "./styles"

export default function Content() {
  return (
    <Container>
      <div className="containerName">
        <small>Welcome, I'm</small>
        <h2>Petrus Borges.</h2>
      </div>
      <div className="containerDescription">
        <h3>Web Developer</h3>
        <p>I'm a front end developer, specializing in building exceptional websites and mobile applications, and everything in between.</p>
      </div>
      <a href="mailto:contatopetrusborges@gmail.com">
        Get In Touch 🔥
      </a>
    </Container>
  )
}
