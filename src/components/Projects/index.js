//styled-components
import { Header, Container } from "./styles"

//images
import Project01 from "../../assets/images/project01.svg"
import Project02 from "../../assets/images/project02.svg"
import Project03 from "../../assets/images/project03.svg"
import Project04 from "../../assets/images/project04.svg"
import GitHub from "../../assets/images/github.svg"
import Globe from "../../assets/images/globe.svg"

// exmaple

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
          <h3>WAITERAPP</h3>
          <div className="description">
            <p>WAITERAPP is an application consisting of a snack management area accessed via tablet by waiters and administrators of an establishment and a food menu area aimed at the establishment's customers and can be accessed by smartphones. <a href="https://github.com/PetrusBorges/WAITERAPP" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>React Native</small>
            <small>JavaScript</small>
            <small>TypeScript</small>
            <small>Styled-Components</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/WAITERAPP" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://github.com/PetrusBorges/WAITERAPP" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="projectImage">
          <img src={Project02} alt="Project01" />
        </div>
        <div className="projectInfo">
          <small>Featured Project</small>
          <h3>COFFEDelivery</h3>
          <div className="description">
            <p>COFFEDelivery is an application composed of a coffee administration area accessed via tablet by waiters and administrators of an establishment and a food menu area directed to the establishment's customers, which can be accessed by smartphones. <a href="https://github.com/PetrusBorges/COFFEDelivery" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>React Native</small>
            <small>JavaScript</small>
            <small>TypeScript</small>
            <small>Styled-Components</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/COFFEDelivery" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://github.com/PetrusBorges/COFFEDelivery" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="projectImage">
          <img src={Project03} alt="Project01" />
        </div>
        <div className="projectInfo">
          <small>Featured Project</small>
          <h3>CHEF House</h3>
          <div className="description">
            <p>CHEFhouse is an application composed of an administration area for scheduling chefs accessed via tablet by the administrators of an establishment and an area for selecting cooks available for scheduling dinner and lunch directed to the establishment's customers and can be accessed by smartphones. <a href="https://github.com/PetrusBorges/CHEFhouse" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>React Native</small>
            <small>JavaScript</small>
            <small>TypeScript</small>
            <small>Styled-Components</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/CHEFhouse" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://github.com/PetrusBorges/CHEFhouse" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="projectImage">
          <img src={Project04} alt="Project01" />
        </div>
        <div className="projectInfo">
          <small>Featured Project</small>
          <h3>HotelBookingApp</h3>
          <div className="description">
            <p>HotelBookingApp is an application composed of an administration area for scheduling reservations accessed via tablet by the administrators of an establishment and an area for selecting hotels, apartments and leisure areas available for scheduling seasons directed to the clients of the establishment and can be accessed by smartphones. <a href="https://github.com/PetrusBorges/HotelBookingApp" target="_blank" rel="noreferrer">Go there</a></p>
          </div>
          <div className="tecnologies">
            <small>React</small>
            <small>React Native</small>
            <small>JavaScript</small>
            <small>TypeScript</small>
            <small>Styled-Components</small>
          </div>
          <div className="iconOrganize">
            <a href="https://github.com/PetrusBorges/HotelBookingApp" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://github.com/PetrusBorges/HotelBookingApp" target="_blank" rel="noreferrer"><img src={Globe} alt="Globe" /></a>
          </div>
        </div>
      </Container>
    </Header>
  )
}
