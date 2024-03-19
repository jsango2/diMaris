import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 0;
  min-height: 750px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #253151 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  @media only screen and (max-width: 1400px) {
    /* padding: 100px 0 70px 70px; */
  }
  @media only screen and (max-width: 850px) {
    padding: 0 0 0px 0;
    align-items: flex-start;
    height: 556px;
    min-height: unset;
  }
  @media only screen and (max-width: 700px) {
    min-height: unset;
    max-height: 950px;
    height: 100%;
    min-height: 650px;
    padding-bottom: 20px;
  }
`;
export const ContentWrap = styled.div`
  position: relative;
  z-index: 4;
  min-height: 416px;

  max-width: 1440px;
  width: 100%;
  .slick-next {
    right: 100px;
    top: 468px !important;
    width: 46px;
    height: 46px;
  }
  .slick-prev {
    left: unset;
    right: 160px !important;
    top: 468px !important;
    width: 46px;
    height: 46px;
    z-index: 20;
  }

  @media only screen and (max-width: 1400px) {
    height: auto;
  }
  @media only screen and (max-width: 850px) {
    .slick-next {
      right: 50px;
      top: 45vw !important;
      width: 26px;
      height: 26px;
    }
    .slick-prev {
      left: unset;
      left: 40px !important;
      top: 45vw !important;
      width: 26px;
      height: 26px;
      z-index: 20;
    }
  }
  @media only screen and (max-width: 600px) {
    .slick-next {
      top: 250px !important;
    }
    .slick-prev {
      top: 250px !important;
    }
  }
`;
export const HeroTitle = styled.h1`
  @media only screen and (max-width: 420px) {
  }
`;
export const Icon = styled.a`
  position: absolute;
  cursor: pointer;
  text-decoration: none;
  color: white;
  bottom: 20px;
  right: 40px;

  &:active {
    -webkit-tap-highlight-color: transparent;
  }
  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
export const WrapAll = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;

  @media only screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const GradientContainer = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap; */
  box-sizing: border-box;
  position: absolute;
  left: 0;
  z-index: 12;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #0e1833 24.62%,
    rgba(14, 24, 51, 0) 181.84%
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 430px;
    justify-content: center;
    bottom: 0;
    align-items: flex-start;
    background: linear-gradient(
      0deg,
      #0e1833 24.62%,
      rgba(14, 24, 51, 0) 181.84%
    );
  }

  @media only screen and (max-width: 420px) {
    height: auto;
  }
`;
export const WrapText = styled.div`
  width: 504px;
  margin-left: 20px;
  @media only screen and (max-width: 1100px) {
    /* padding-right: 25px; */
  }
  @media only screen and (max-width: 700px) {
    margin-top: 50px;
    /* width: 90%;
    padding-left: 27px;
    padding-top: 60px; */
  }
  @media only screen and (max-width: 430px) {
    /* padding-top: 50px; */
  }
`;
export const WrapImage = styled.div`
  position: relative;
  width: 666px;
  height: 507px;
  border-radius: 3px;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-image: url("/marikomerc.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 50vw;
    min-height: 300px;
    max-height: 780px;
  }
  @media only screen and (max-width: 430px) {
  }
`;
export const Broj = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  color: #4299c8;
  opacity: 0.5;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Linija = styled.div`
  position: relative;
  width: 50px;
  height: 1px;
  background-color: #4299c8;
  margin-right: 54px;
  opacity: 0.5;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: var(--h2);
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* or 48px */

  /* SUNRISE/Sunray */

  /* color: #f5faff; */
  color: var(--color-boja-marikomerc-bijela);

  @media only screen and (max-width: 900px) {
    font-size: var(--h3);
  }
  @media only screen and (max-width: 430px) {
    margin-top: 0;

    font-size: 30px;
  }
`;
export const SubTitle = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: var(--p);

  line-height: 25px;
  /* or 179% */

  letter-spacing: 0.175px;

  /* SUNRISE/Sunray */

  color: #a1a0a0;

  /* mix-blend-mode: normal; */

  margin-bottom: 45px;
  width: 95%;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
  }
`;
