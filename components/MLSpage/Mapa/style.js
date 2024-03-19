import styled from "styled-components";

export const MapaWrapAll = styled.div`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  width: 100%;
  height: 1050px;
  /* margin-bottom: 100px; */
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  padding: 100px 0 0px 0;
  /* background-image: url("/pozadinaKontaktMapa.png"); */
  background-size: cover;
  @media only screen and (max-width: 1050px) {
    height: auto;
    /* width: 100vw;
    padding-top: 0px;
    margin-bottom: 0;
    padding-bottom: 0; */
  }
  @media only screen and (max-width: 430px) {
    padding: 30px 0 0px 0;
  }
`;
export const MapaContent = styled.div`
  position: relative;
  z-index: 11;
  max-width: 1440px;
  height: 830px;
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  margin: 0 auto;
  align-items: center;
  @media only screen and (max-width: 1050px) {
    flex-direction: column-reverse;
    /* height: auto;
    width: 100%; */
    /* padding: 70px 0px;
    flex-direction: column-reverse;
    align-items: center; */
  }
  @media only screen and (max-width: 1050px) {
    width: 100vw;
    height: auto;
  }
`;
export const MapaWrapKarta = styled.div`
  position: relative;
  z-index: 11;
  /* width: 980px; */
  height: 100%;
  width: 1020px;

  border-radius: 3px;
  background-size: cover;
  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    height: 500px;

    /* top: 0px; */
  }
  @media only screen and (max-width: 850px) {
    /* width: 100vw;
    height: 65vw;
    min-height: 360px; */
  }
`;
export const MapaWrapTextBlock = styled.div`
  position: relative;
  left: 68px;
  z-index: 12;
  width: 330px;
  height: 78%;
  background: #11192c;
  border-radius: 3px;
  padding-top: 0px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 20px;
  @media only screen and (max-width: 1300px) {
    left: 0px;
    height: 100%;

    /* left: 0;
    height: 100%; */

    /* padding: 85px 86px 0px 76px;

    top: 0;
    height: 100%; */
    /* height: 100%;
    top: 0px; */
  }
  @media only screen and (max-width: 1050px) {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    padding-left: 30px;
    padding-right: 60px;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 430px) {
    /* padding: 65px 30px 100px 30px; */
    padding-bottom: 58px;
  }
`;
export const TopTitle = styled.h3`
  position: relative;
  z-index: 11;
  font-family: "Roboto Condensed";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: #f5faff;
  margin-top: 60px;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 11;
  color: #f5faff;
  /* H2 */
  font-family: "Roboto Condensed";
  margin: 15px auto 30px auto;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 11;
  color: #f5faff;
  /* P */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Button = styled.button`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 72.471px;
  border-radius: 6px;
  border: none;
  background: #4299c8;
  color: #f5faff;
  text-align: center;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%; /* 25.65px */
  margin-top: 35px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background: var(--color-boja-tamnoplava-ocjena);
  }
  &:active {
    background: #4299c8;
    /* border: 1px solid #93f9ff; */
  }
  @media only screen and (max-width: 1050px) {
    width: 300px;
    height: 40px;
    font-size: 16px;
  }
  @media only screen and (max-width: 850px) {
    width: 95%;
  }
`;
export const Galeb1 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: -15%;
  left: 20%;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const Galeb2 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: 50px;
  left: 50%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const Galeb3 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: -5%;
  right: 15%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
