import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  min-height: 617px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  padding-top: 85px;
  @media only screen and (max-width: 1400px) {
    padding: 100px 0 0px 0px;
  }
  @media only screen and (max-width: 1050px) {
    padding: 0px 0 0px 0px;

    /* height: 556px; */
  }
`;
export const WrapKartica = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 60px auto 0 auto;
  padding-bottom: 100px;
  @media only screen and (max-width: 1050px) {
    margin-top: 0;
    flex-direction: column-reverse;
    width: 100%;
  }

  @media only screen and (max-width: 850px) {
    padding-bottom: 20px;
  }
`;
export const WrapKartica2 = styled(WrapKartica)`
  position: relative;
  z-index: 10;
  width: 500px;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const WrapKartica3 = styled(WrapKartica)`
  margin: 200px auto 0 auto;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    margin: 40px auto 0 auto;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 552px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;
  @media only screen and (max-width: 1050px) {
    width: 97%;
    margin-top: 40px;
    margin-left: 30px;
    padding: 0;
  }
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 430px) {
    margin-top: 40px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;

export const Photo1 = styled.div`
  position: relative;
  z-index: 10;
  width: 772px;
  height: 781px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  background: ${(props) => `url(${props.bg}) no-repeat center`};
  background-size: cover;
  overflow: hidden;
  border-radius: 5px;
  @media only screen and (max-width: 1050px) {
    display: none;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 65vw;
    min-height: 250px;
  }
`;
export const BottomSlider = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 91px;
  background: rgba(29, 44, 78, 0.77);
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  bottom: 0;
  /* overflow: hidden; */
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const Truck = styled.div`
  position: relative;
  z-index: 10;
  color: #fff;
  width: 300px;
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 153%; /* 24.48px */
  margin-top: 32px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapKategorije = styled.div`
  position: relative;
  z-index: 10;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: 40px auto;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const Kategorija = styled.div`
  position: relative;
  z-index: 10;
  width: 380px;
  min-height: 500px;
  border: 1px solid #f5faff;

  background: linear-gradient(180deg, #bdcbe6 0%, #e1e7f5 100%);
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;

export const Kategorizacija = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const Teret = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 400px;
  padding-top: 70px;
  margin-bottom: 50px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 430px) {
    margin-bottom: 20px;
  }
`;
export const BlueDivider = styled.div`
  position: relative;
  z-index: 10;
  width: 85px;
  height: 3px;
  background: #4299c8;
  border-radius: 2px;
  margin: 20px auto;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapTwoCards = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    padding: 20px 0 20px 0;
    height: auto;
    width: 95vw;
  }
`;
export const BgMLS = styled.div`
  position: absolute;

  width: 100%;
  height: 500px;
  top: ${(props) => (1 / props.percentage) * 10 + 20}px;
  background-image: url("/MLSlogoBg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    top: ${(props) => (1 / props.percentage) * 10 + 250}px;

    height: 200px;
    width: 85vw;
  }
`;
export const Naslov = styled.h3`
  position: relative;
  color: var(--color-boja-marikomerc-plava);
  /* H3 */
  font-family: "Roboto Condensed", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */
  text-align: center;
  width: 480px;
  margin: 0 auto;
  text-transform: uppercase;
  @media only screen and (max-width: 850px) {
    width: 100%;
    font-size: 30px;
  }
`;
export const TextIspod = styled.div`
  position: relative;
  color: #000;
  margin-top: 30px;
  text-align: center;
  /* M-P */
  font-family: "Gilroy";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 153%; /* 21.42px */
  @media only screen and (max-width: 430px) {
    margin-top: 18px;

    font-size: 12px;
  }
`;
export const OverlayTeret = styled.div`
  position: absolute;
  opacity: 0.22;
  background: linear-gradient(180deg, #bdcbe6 0%, rgba(225, 231, 245, 0) 100%);
  width: 100%;
  height: 550px;
  top: 0;
  @media only screen and (max-width: 430px) {
    margin-top: 18px;

    font-size: 12px;
  }
`;
export const WrapIkone = styled.div`
  position: relative;

  width: 100%;
  height: auto;
  display: flex;
  margin: 80px auto;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (max-width: 850px) {
    margin-bottom: 0;
  }
`;
export const IkonaiText = styled.div`
  position: relative;

  width: 140px;
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  @media only screen and (max-width: 430px) {
    height: 145px;
    margin: 10px 0;
  }
`;
export const Ikona = styled.div`
  position: relative;

  width: 70px;
  height: 70px;
  @media only screen and (max-width: 430px) {
    width: 50px;
    height: 50px;
  }
`;
export const Overlay = styled.div`
  position: relative;
  z-index: 10;
  width: 383px;
  height: 370px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-content: center;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 75vw;
  }
`;
export const UpTitle = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;

  /* Black */
  margin-bottom: 15px;
  color: #161722;
  @media only screen and (max-width: 600px) {
  }
`;
export const VideoFrame = styled.div`
  position: relative;
  z-index: 10;
  height: 35vw;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 850px) {
    height: 60vw;
  }
`;
export const ImageAbsolute = styled.div`
  position: absolute;
  z-index: 10;
  height: 45vw;
  width: 100%;
  top: ${(props) => props.percentage * 50 - 170}px;

  background-image: url("/volvo1png.png");
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 850px) {
    height: 95vw;
    top: ${(props) => props.percentage * 50 - 120}px;
  }
`;
export const Title = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  /* or 66px */

  /* MK Plava */
  width: 90%;
  color: #1c2640;
  margin-bottom: 25px;
  margin-top: 0;
  @media only screen and (max-width: 1250px) {
    width: 90%;
    font-size: 40px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    line-height: 120%;
  }
`;
export const Text = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  color: #000000;
  width: 494px;
  margin-bottom: 40px;
  @media only screen and (max-width: 1250px) {
    font-size: 14px;
    width: 90%;
  }
  @media only screen and (max-width: 850px) {
  }
`;

export const PonudaLink = styled.h4`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 185%;
  /* identical to box height, or 26px */

  /* SUNRISE/Coral */
  width: 207px;
  color: #4299c8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 6px;
  height: 101px;
  background: #4299c8;
  top: 18px;
  left: -20px;
  border-radius: 2px;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    width: 3px;
  }
`;
