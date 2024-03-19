import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 2905px;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  background: white;
  padding-top: 145px;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const WrapGreyLogos = styled.div`
  position: relative;
  z-index: 10;
  width: 1223px;
  height: 78px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const WrapLogo = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: 78px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 1250px) {
    width: calc(100% / 5.6);
  }
`;
export const WrapKarijere = styled.div`
  position: relative;
  z-index: 10;
  width: 1266px;
  height: 643px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 90px auto 0 auto;
  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
export const WrapMLS = styled.div`
  position: relative;
  z-index: 10;
  width: 1306px;
  height: 643px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto 0 auto;
  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    height: auto;
    flex-direction: column;
    margin: 120px auto 0 auto;
  }
`;
export const WrapMapa = styled.div`
  position: relative;
  z-index: 10;
  width: 1367px;
  height: 698px;
  display: flex;

  @media only screen and (max-width: 1400px) {
    height: auto;
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
export const MapContent = styled.div`
  position: relative;
  z-index: 10;
  top: 120px;
  width: 441px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #11192c;
  padding: 59px 45px 0 66px;
  @media only screen and (max-width: 1300px) {
    padding: 59px 45px 180px 66px;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 59px 45px 180px 27px;
  }
`;
export const Geo = styled.div`
  position: relative;
  z-index: 10;
  width: 923px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media only screen and (max-width: 1300px) {
    max-height: 800px;
  }
  @media only screen and (max-width: 923px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    height: 500px;
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

  @media only screen and (max-width: 1250px) {
    width: 43%;
    padding-left: 30px;
  }
  @media only screen and (max-width: 850px) {
    width: 97%;
    margin-top: 140px;
  }
  @media only screen and (max-width: 550px) {
    margin-top: 150px;
  }
`;

export const ContentMLS = styled(Content)`
  margin-left: 80px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    width: 97%;
    margin-top: 140px;
    margin-left: 0;
  }
  @media only screen and (max-width: 550px) {
    margin-top: 150px;
  }
`;

export const Photos = styled.div`
  position: relative;
  z-index: 10;
  width: 674px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  z-index: 10;
  width: 208px;
  height: 538px;
  @media only screen and (max-width: 1250px) {
    width: calc(100% / 3.3);
  }
  @media only screen and (max-width: 800px) {
    height: 70vw;
    min-height: 400px;
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
export const Title = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* or 66px */

  text-transform: uppercase;

  /* MK Plava */

  color: #1c2640;
  margin-bottom: 25px;
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
`;
export const UpTitleMapa = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-bottom: 15px;
  @media only screen and (max-width: 850px) {
  }
`;
export const TitleMapa = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-bottom: 25px;
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    line-height: 120%;
  }
`;
export const TextMapa = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-bottom: 40px;
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    line-height: 153%;
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
  left: -30px;
  border-radius: 2px;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    left: 0px;
  }
`;
