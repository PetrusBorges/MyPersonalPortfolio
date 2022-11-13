import styled from "styled-components";
import { device } from "../device";

export const Header = styled.header`
  h2 {
    text-align: center;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.primary.light};
    margin-bottom: 30px;
  }
`

export const Container = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 150px;

  @media ${device.mobileL} {
    width: 100%;
    flex-direction: column;
  }

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
  }

  .containerProject {
    width: 440px;
    padding: 20px;
    background-color: ${({ theme }) => theme.backgroundCard};
    border-radius: 20px;
    transition: all 0.5s ease;

    @media ${device.mobileS} {
      scale: .9;
      transform: translateX(10px);
    }

    @media ${device.mobileM} {
      max-width: 350px;
    }

    @media ${device.mobileL} {
      width: 400px;
    }

    &:hover {
      transform: translateY(-10px);
    }

    .headerProject {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;

      .headerLinks {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }
    }

    h3 {
      color: ${({ theme }) => theme.textStyle};
      font-weight: lighter;
      margin-bottom: 15px;
    }

    p {
      color: ${({ theme }) => theme.textStyle};
      font-weight: lighter;
      margin-bottom: 15px;
    }

    .tecnologies {
      small {
        color: ${({ theme }) => theme.colors.primary.main};

        :not(:first-child) {
          margin-left: 20px;
        }
      }
    }
  }
`
