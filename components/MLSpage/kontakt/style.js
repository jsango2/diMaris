import styled from "styled-components";

export const WrapKontakt = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;

  /* background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #2b3a63 0%,
    #101628 100%
  ); */
  background-image: url("/MLSpozadinaKontakti.webp");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 50px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
    padding-top: 50px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 250px;

  background: ${(props) => `url(${props.photo}) no-repeat center`};
  background-size: cover;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const GoogleButton = styled.a`
  position: relative;
  background-color: transparent;
  z-index: 11;
  border-radius: 6px;
  border: 1px solid #1c2640;
  padding: 5px 20px;
  width: 150px;
  height: 25px;
  /* color: #f5faff; */
  color: #1c2640;
  text-align: center;
  /* M-T */
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 16.8px */
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  @media only screen and (max-width: 1300px) {
  }
`;

export const Grid = styled.div`
  position: relative;
  z-index: 10;
  width: 80%;
  height: auto;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 5vw;
  grid-row-gap: 70px;
  margin: 90px auto;
  @media only screen and (max-width: 850px) {
    grid-column-gap: 10vw;
  }
  @media only screen and (max-width: 550px) {
    justify-items: center;
  }
  @media only screen and (max-width: 430px) {
    width: 85%;
  }
`;
export const Text = styled.div`
  position: relative;
  z-index: 10;
  width: 80%;
  height: auto;
  color: #000;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 153%;
  padding: 15px 30px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapEmail = styled.a`
  position: relative;
  z-index: 10;
  display: flex;
  margin-top: 10px;
  color: white;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 550px) {
    margin-top: 0px;
  }
`;
export const Phone = styled.a`
  position: relative;
  text-decoration: none;
  color: #1c2640;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const Naslov = styled.h3`
  text-align: center;
  /* H2 */
  font-family: "Roboto Condensed", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  text-transform: uppercase;
  color: #1c2640;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 700px) {
    font-size: 30px;
  }
`;

export const PodNaslov = styled.p`
  color: #1c2640;

  text-align: center;

  /* M-P */
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 153%; /* 21.42px */
  width: 90%;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 820px) {
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 226px;
  height: 270px;

  @media only screen and (max-width: 550px) {
    align-items: center;
  }
`;
export const Adresa = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  color: #1c2640;

  /* M-P */
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 153%; /* 21.42px */
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 550px) {
    align-items: center;
    margin: 10px 0 5px 0;
  }
`;
export const Grad = styled.div`
  color: #1c2640;

  /* H4 */
  font-family: Gilroy;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  text-transform: uppercase;
  @media only screen and (max-width: 550px) {
    text-align: center;
  }
`;
export const RadnoVrijeme = styled.div`
  color: #1c2640;

  /* M-P */
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.6;
  height: 50px;
  display: flex;
  @media only screen and (max-width: 550px) {
    text-align: center;
  }
`;
