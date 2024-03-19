import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 0;
  /* min-height: 700px; */
  height: 40vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    79.54% 79.54% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  background-image: url("/heroImg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;
    /* height: 556px; */
    height: 60vw;
  }
  @media only screen and (max-width: 430px) {
    min-height: unset;
  }
`;
export const MLStraka = styled.div`
  position: relative;
  z-index: 4;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/MLSpozadinaTraka.svg");
  background-size: cover;
  margin-top: auto;
  img {
    transform: scale(0, 0);
    opacity: 1;
    transition: all 1s ease-out;
    transform: ${(props) => props.inView && `scale(0.9,0.9)`};
    opacity: ${(props) => props.inView && `1`};
  }
  @media only screen and (max-width: 1400px) {
    height: 6vw;
  }
  @media only screen and (max-width: 850px) {
    height: 8vw;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapMLSlogo = styled.div`
  position: relative;
  z-index: 4;
  height: 75px;
  width: 100%;
  background: blue;
  margin-top: auto;
  @media only screen and (max-width: 1400px) {
    height: auto;
  }
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const HeroTitle = styled.h1`
  @media only screen and (max-width: 420px) {
  }
`;
