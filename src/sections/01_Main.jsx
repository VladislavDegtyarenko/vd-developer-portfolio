import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import Container from "../ui/Container";
import { H1, H2, P1 } from "./../ui/Text";
import Photo from "./../assets/photo.png";
import ScrollDownIcon from "./../assets/Icons/Scroll Down.svg";

import { Fade } from "react-awesome-reveal";

const StyledMain = styled(Section)`
  /* scroll-margin-top: 200px; */

  padding: 160px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .main {
    &__inner {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 991.98px) {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
      }
    }

    &__info {
      margin-right: 16px;
    }

    &__photo {
      position: relative;
      margin-right: calc(20px + var(--strokeWidth) * 2);
      margin-top: 10px;
      --photo-size: 320px;
      @media screen and (max-width: 991.98px) {
        --photo-size: 240px;
        margin-bottom: 32px;
      }

      &_inner {
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: var(--borderRadiusNormal);
        border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
        flex-shrink: 0;
        position: relative;
        background-color: ${({ theme }) => theme.bg};
        img {
          width: 100%;
          height: 100%;
        }
      }

      &::before {
        content: "";
        display: block;
        width: var(--photo-size);
        height: var(--photo-size);
        border-radius: var(--borderRadiusNormal);
        border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
        border-color: ${({ theme }) => theme.grey};
        position: absolute;
        top: calc(var(--photo-size) / 12);
        left: calc(var(--photo-size) / 12);
        box-sizing: border-box;
      }
    }

    &__scroll {
      margin: 64px auto 0;
      display: block;
      position: absolute;
      left: 50%;
      bottom: 40px;
      transform: translate(-50%, -50%);
    }
  }

  .accent {
    color: ${({ theme }) => theme.cyan};
  }

  .description {
    margin-top: 16px;
    color: ${({ theme }) => theme.grey};
    span {
      font-weight: 700;
    }
  }
`;

const Main = () => {
  return (
    <>
      <StyledMain id="home">
        <Container>
          <div className="main">
            <div className=" main__inner">
              <div className="main__info">
                <Fade triggerOnce cascade damping="0.5">
                  <H1>Hello,</H1>
                  <H2>
                    I am <span className="accent">Vladyslav</span>, <br />
                    Frontend Developer
                  </H2>
                  <P1 className="description">
                    Based in <span>Kyiv, Ukraine</span>, I'm passionate about creating
                    engaging, digital experiences on the web.
                  </P1>
                </Fade>
              </div>
              <Fade triggerOnce delay={500}>
                <div className="main__photo">
                  <div className="main__photo_inner">
                    <img src={Photo} alt="" />
                  </div>
                </div>
              </Fade>
            </div>
            <Fade triggerOnce delay={1500}>
              <img className="main__scroll" src={ScrollDownIcon} alt="" />
            </Fade>
          </div>
        </Container>
      </StyledMain>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default Main;
