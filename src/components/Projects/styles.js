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
  margin-bottom: 200px;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;

    .projectInfo {
      transform: translateX(20px);
    }
  }

  .projectImage {
    img {
      width: 500px;
      object-fit: cover;
      border-radius: 20px;

      @media ${device.mobileS} {
        max-width: 300px;
      }

      @media ${device.mobileL} {
        width: 350px;
      }
    }
  }

  .projectInfo {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    width: 400px;

    @media ${device.mobileS} {
        max-width: 300px;
      }

    @media ${device.mobileM} {
      width: 350px;
    }

    @media ${device.mobileL} {
      transform: translateX(-4px);
    }

    small {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    h3 {
      color: ${({ theme }) => theme.textStyle};
      font-weight: lighter;
      margin-bottom: 20px;
    }

    .description {
      background-color: ${({ theme }) => theme.backgroundCard};
      padding: 20px;
      border-radius: 20px;
      width: 450px;
      margin-bottom: 10px;

      @media ${device.mobileM} {
        display: none;
      }

      @media ${device.mobileL} {
        width: 400px;
      }

      p {
        color: ${({ theme }) => theme.textStyle};
        font-weight: lighter;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.primary.light};
        }
      }
    }

    .tecnologies {
      small {
        color: ${({ theme }) => theme.textStyle};

        :not(:first-child) {
          margin-left: 20px;
        }
      }
    }

    .iconOrganize {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;

      a {
        :not(:first-child) {
          margin-left: 20px;
        }

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`
