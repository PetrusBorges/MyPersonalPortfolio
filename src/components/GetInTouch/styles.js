import styled from "styled-components";
import { device } from "../device";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  text-align: center;
  padding-bottom: 20px;

  @media ${device.mobileL} {
    width: 100%;
  }

  h2 {
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.primary.light};
    margin-bottom: 30px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 50px;
    background: linear-gradient(225deg, #2DC7ED 0%, #538BF0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.textStyle};
    font-weight: lighter;
    width: 600px;
    margin-bottom: 20px;

    @media ${device.mobileL} {
    width: 100%;
  }
  }

  a {
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
    }
  }

  small {
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.primary.light};
  }
`
