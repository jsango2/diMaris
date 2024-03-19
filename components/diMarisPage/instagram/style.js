import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 9;
  max-width: 2000px;
  width: 100%;

  height: 660px;
  max-height: 660px;
  display: flex;
  flex-direction: column;
  /* background: url("/diMaris/Instagram.png");
  background-size: cover; */
  justify-content: center;
  align-items: center;
  background: url("/diMaris/Instagram.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  @media only screen and (max-width: 1150px) {
    /* width: 100vw; */
  }
  @media only screen and (max-width: 530px) {
    height: 480px;
    max-height: unset;
    /* padding-top: 30px;
    height: auto; */
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  height: 35%;
  width: 500px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  transform: scale(0, 0);
  opacity: 1;
  transition: all 1s ease-out;
  transform: ${(props) => props.inView && `scale(1,1)`};
  opacity: ${(props) => props.inView && `1`};

  @media only screen and (max-width: 1150px) {
    width: 500px;
  }
  @media only screen and (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
    height: 53%;
    width: 100%;
  }
`;
export const Naslov = styled.div`
  position: relative;
  z-index: 1;
  height: 100px;
  width: 100%;
  grid-area: 1 / 1 / 2 / 3;
  color: #f5faff;
  text-align: center;
  /* H2 */
  font-family: "Roboto Condensed";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 44px */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 530px) {
    grid-area: 1 / 1 / 2 / 2;
    /* flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start; */
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    width: 300px;
    margin-bottom: 40px;
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
  @media only screen and (max-width: 530px) {
    grid-area: 2 / 1 / 3 / 2;
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
  @media only screen and (max-width: 530px) {
    grid-area: 3 / 1 / 4 / 2;
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
