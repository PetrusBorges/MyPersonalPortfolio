import styled from "styled-components";
import { device } from "../device";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 900px;

  @media ${device.mobileL} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
  }

  .containerName {
    small {
      color: ${({ theme }) => theme.colors.primary.dark};
      font-size: 18px;
      background: linear-gradient(225deg, #2DC7ED 0%, #538BF0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media ${device.mobileS} {
        display: none;
      }
    }

    h2 {
      color: ${({ theme }) => theme.textStyle};
      font-size: 80px;

      @media ${device.mobileS} {
        text-align: center;
      }

      @media ${device.mobileL} {
        font-size: 50px;
      }
    }
  }

  .containerDescription {
    width: 500px;
    margin-bottom: 20px;

    @media ${device.mobileL} {
      width: 350px;
    }

    h3 {
      text-align: center;
      color: ${({ theme }) => theme.colors.primary.dark};
      font-size: 50px;
      background: linear-gradient(225deg, #2DC7ED 0%, #538BF0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p {
      word-break: break-word;
      text-align: center;
      color: ${({ theme }) => theme.textStyle};

      @media ${device.mobileL} {
        font-size: 15px;
      }
    }
  }

  a {
    @media ${device.mobileL} {
      transform: translateX(10px);
    }

    transform: translateX(190px);
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
`
