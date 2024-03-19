import styled from "styled-components";

export const WrapAll = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 9;
  max-width: 2000px;
  width: 100%;
  min-width: 1100px;
  height: auto;

  display: flex;
  flex-direction: column;
  /* background-size: cover;  */
  justify-content: flex-start;
  align-items: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
  @media only screen and (max-width: 1100px) {
    align-items: flex-start;
    min-width: unset;
    /* width: 100vw; */
  }
  @media only screen and (max-width: 750px) {
    padding-top: 50px;

    /* padding-top: 30px;
    height: auto; */
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  height: auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 1100px) {
    /* flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start; */
    justify-content: center;
    width: 100vw;
  }
`;
export const WrapLokacija = styled.div`
  position: relative;
  z-index: 10;
  height: 260px;
  width: 611px;
  display: flex;
  margin: 36px auto;
  justify-content: space-between;
  /* align-items: center; */
  @media only screen and (max-width: 1250px) {
    width: 90%;
    justify-content: space-around;
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin: 36px 20px;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 0;
    align-items: center;
    padding-bottom: 30px;
  }
`;
export const BlueLine = styled.div`
  position: relative;
  z-index: 10;
  width: 85px;
  height: 3px;
  background-color: #4299c8;
  margin: 0 auto 25px auto;
  /* align-items: center; */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 1100px) {
    /* flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start; */
  }
`;
export const Naslov = styled.div`
  position: relative;
  z-index: 1;
  height: 100px;
  width: 100%;

  color: #1c2640;
  text-align: center;
  /* H2 */
  font-family: "Roboto Condensed";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 44px */
  text-align: center;
  @media only screen and (max-width: 750px) {
    height: 75px;

    font-size: 30px;
  }
  @media only screen and (max-width: 1100px) {
    /* flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start; */
  }
`;
export const ButtonLeft = styled.a`
  width: 233px;
  height: 45px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4299c8;
  grid-area: 2 / 1 / 3 / 2;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* M-B */
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-decoration: none;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 1100px) {
    /* flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start; */
  }
`;
export const ButtonRight = styled.a`
  width: 233px;
  height: 45px;
  border-radius: 6px;
  background: #4299c8;
  grid-area: 2 / 2 / 3 / 3;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* M-B */
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  text-decoration: none;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 1100px) {
    /* flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start; */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  max-width: 2000px;
  width: 100%;

  height: 100%;

  /* background: #1c2640;
  opacity: 0.3; */
  opacity: 0.7;
  background: #1c2640;
  top: 0;
  left: 0;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 10;
  width: 318px;

  height: 100%;

  /* background: #1c2640;
  opacity: 0.3; */
  /* background: red; */
  border-radius: 3px;
  overflow: hidden;
  @media only screen and (max-width: 1250px) {
    width: 60%;
  }
  @media only screen and (max-width: 750px) {
    height: 60vw;
    width: 100%;
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 10;
  width: 252px;

  height: 100%;

  /* background: #1c2640;
  opacity: 0.3; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 5px;
  @media only screen and (max-width: 750px) {
    margin-top: 30px;
    height: auto;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const NaziviAdresa = styled.div`
  position: relative;
  z-index: 10;
  color: #000;

  /* M-Button */
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  margin-bottom: 15px;

  @media only screen and (max-width: 750px) {
    text-align: center;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Tel = styled.div`
  position: relative;
  z-index: 10;
  color: #000;

  /* P */
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  @media only screen and (max-width: 750px) {
    text-align: center;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Voditelj = styled.div`
  position: relative;
  z-index: 10;
  color: #000;

  /* P */
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 8px;

  @media only screen and (max-width: 750px) {
    text-align: center;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const RadnoVrijeme = styled.div`
  position: relative;
  z-index: 10;
  color: #000;

  /* P */
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 750px) {
    text-align: center;
  }
`;
export const GoogleButton = styled.a`
  position: relative;
  z-index: 10;
  width: 137px;
  height: 25px;
  color: #1c2640;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* M-T */
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #1c2640;
  text-decoration: none;

  @media only screen and (max-width: 750px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 420px) {
  }
`;
