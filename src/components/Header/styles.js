import styled, { keyframes } from "styled-components";
import { device } from "../device";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 90px;
  padding: 10px 40px;
  position: fixed;
  top: 0;
  z-index: 99;

  @media ${device.tablet} {
    backdrop-filter: blur(5px);
  }

  .logoInfo {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    img {
      width: 35px;
      height: 35px;
      animation: ${rotate} 10s infinite linear;
    }

    p {
      font-size: 12px;
      text-align: center;
      width: 100px;
      color: ${({ theme }) => theme.textStyle};

      span {
        color: ${({ theme }) => theme.colors.primary.light};
      }
    }
  }
`

export const ListInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    display: none;
  }

  a {
    padding: 5px;
    position: relative;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.textStyle};

    &::after {
      content: '';
      left: 0;
      bottom: 0;
      width: 0%;
      position: absolute;
      transition: 0.5s ease;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary.dark};
    }

    &:hover {
      background: linear-gradient(225deg, #2DC7ED 0%, #538BF0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      &::after {
        width: 100%;
      }
    }

    :not(:first-child) {
      margin-left: 50px;

      @media ${device.mobileL} {
        margin-left: 10px;
      }
    }
  }
`
