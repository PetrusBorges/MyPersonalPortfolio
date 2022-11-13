import styled from "styled-components";
import { device } from "../device";

export const Header = styled.header`
  margin-top: 150px;

  h2 {
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.primary.light};
    margin-bottom: 30px;

    @media ${device.mobileL} {
      text-align: center;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  .containerInfo {
    width: 500px;
    color: ${({ theme }) => theme.textStyle};

    span {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    .containerTecnologies {
      max-width: 500px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-bottom: 20px;

      .tec {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
          width: 15px;
          height: 15px;
          margin-right: 10px;
        }

        p {
          color: ${({ theme }) => theme.colors.primary.light};
        }

        @media ${device.mobileL} {
          font-size: 12px;
          width: 80px;
        }
      }
    }

    @media ${device.mobileL} {
      width: 250px;
    }
  }

  .containerImage {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${device.mobileM} {
      width: 300px;
    }

    img {
      width: 300px;
      border-radius: 20px;
      z-index: 1;
      position: absolute;

      @media ${device.mobileS} {
        width: 200px;
      }
    }

    .imageBorder {
      width: 300px;
      height: 300px;
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.colors.primary.light};
      z-index: -1;
      transform: translate(30px, 30px);

      @media ${device.mobileS} {
        width: 200px;
        height: 200px;
      }
    }
  }
`
