//styled-components
import { Container, StyledInfo, StyledButton} from "./styles"

//images
import Dark from "../../assets/images/light-bulb-dark.svg"
import Light from "../../assets/images/light-bulb.svg"
import GitHub from "../../assets/images/github.svg"
import Linkedin from "../../assets/images/linkedin.svg"

export default function ButtonTheme({ onClick, selectedTheme }) {
  return (
    <Container>
      <StyledInfo href="https://github.com/PetrusBorges" target="_blank">
        <img src={GitHub} alt="GitHub" />
      </StyledInfo>

      <StyledInfo href="https://www.linkedin.com/in/petrusborgesmachado/" target="_blank">
        <img src={Linkedin} alt="GitHub" />
      </StyledInfo>

      <StyledButton
        onClick={onClick}
      >
        {selectedTheme === "Dark" && (
          <img src={Light} alt="Light" />
        )}
        {selectedTheme === "Light" && (
          <img src={Dark} alt="Dark" />
        )}
      </StyledButton>
    </Container>
  )
}
