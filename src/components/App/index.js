//styled-comments
import Theme from "../../assets/styles/themes"
import GlobalStyled from "../../assets/styles/global"
import { Container } from "./styles"
import { ThemeProvider } from "styled-components"

//hooks
import { useEffect, useMemo, useState } from "react"

//components
import Header from "../Header"
import Content from "../Content"
import About from "../About"
import Projects from "../Projects"
import OtherProjects from "../OtherProjects"
import GetInTouch from "../GetInTouch"
import ButtonTheme from "../ButtonTheme"

export default function App() {

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("Theme")))

  const currentTheme = useMemo(() => {
    return Theme[theme] || Theme.Dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => prevState === "Dark" ? "Light" : "Dark")
  }

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyled />
      <ButtonTheme
        onClick={handleToggleTheme}
        selectedTheme={theme}
      />
      <Container>
        <Header />
        <Content />
        <About />
        <Projects />
        <OtherProjects />
        <GetInTouch />
      </Container>
    </ThemeProvider>
  )
}
