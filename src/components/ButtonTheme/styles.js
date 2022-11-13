import styled from "styled-components";
import { device } from "../device";

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 30px;
  left: 2%;

  @media ${device.mobileL} {
    display: none;
  }

  @media ${device.tablet} {
    display: none;
  }
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid ${({ theme}) => theme.textStyle};
  z-index: 100;
  cursor: pointer;
`

export const StyledInfo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;
  margin-bottom: 25px;
  transition: transform 0.1s linear;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 25px;
    height: 25px;
  }
`
