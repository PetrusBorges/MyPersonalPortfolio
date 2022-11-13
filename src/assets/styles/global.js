import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Saira', sans-serif;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.background};
    transition: background 0.2s linear;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 20px;
  }
`
