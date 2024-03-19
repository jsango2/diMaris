import styled from "styled-components";

export const WrapAllContactData = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  padding: 40px;
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  background-image: url("/kontaktBgImg.webp");
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
  }
  @media only screen and (max-width: 650px) {
    padding: 0px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  max-width: 1440px;
  margin: 0 auto;
  padding: 54px 0 0 69px;

  @media only screen and (max-width: 850px) {
    padding: 48px 20px 0 25px;
    flex-direction: column;
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 11;
  width: 240px;
  height: 260px;
  background-image: url("/dellorco.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 30px;
  @media only screen and (max-width: 650px) {
    width: 132px;
    height: 152px;
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 11;
  margin-left: 130px;
  @media only screen and (max-width: 850px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;
export const Ceo = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  @media only screen and (max-width: 1300px) {
  }
`;
export const WrapText = styled.div`
  margin-top: 20px;
  position: relative;
  z-index: 11;

  @media only screen and (max-width: 1300px) {
  }
`;
export const Block = styled.div`
  margin-bottom: 30px;
  position: relative;
  z-index: 11;

  @media only screen and (max-width: 1300px) {
  }
`;
export const Ime = styled.div`
  position: relative;
  z-index: 11;
  color: #1c2640;
  /* gilroy mali */
  font-family: Gilroy;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Funkcija = styled.div`
  position: relative;
  z-index: 11;
  color: #1c2640;
  /* gilroy mali */
  font-family: Gilroy;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Email = styled.a`
  position: relative;
  z-index: 11;
  color: #1c2640;

  /* gilroy micro */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  text-decoration: none;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Pozicija = styled.div`
  position: relative;
  z-index: 11;
  color: #1c2640;
  /* gilroy micro */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 1300px) {
  }
`;
