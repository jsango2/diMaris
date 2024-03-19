import styled from "styled-components";

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: absolute;
  top: 60px;
  z-index: 10;
  right: 50%;
  transform: translate(50%, 0);
  width: 90%;
  height: 400px;
  border-radius: 0 0 39px 39px;
  background: #191b26;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
`;
export const WrapLeftBlock = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  margin-right: 15px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapRightBlock = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapBlock = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 30px;
  display: flex;
  height: 75%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  grid-area: 1 / 1 / 2 / 2;
  a {
    color: #f5faff;
    opacity: 1;
    font-size: 18px;
  }
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.div`
  color: #1c2640;
  font-family: "Gilroy";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  opacity: 0.44;
  margin-bottom: 10px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const SwitcherWrap = styled.div`
  position: relative;
  z-index: 10;

  width: 100%;
  margin-top: 30px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const BottomBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background: url("/kontaktBgImg.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  grid-area: 2 / 1 / 3 / 2;
  overflow: hidden;
  a {
    color: #1c2640;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin: 10px 0;
  }
  /* flex-direction: column;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const BottomBlockTop = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  margin-bottom: 20px;
  display: flex;
  width: 90%;
  width: 90%;
  justify-content: center;
  max-width: 450px;
  a {
    color: #1c2640;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin: 14px 0;
    opacity: 1;
  }
  /* flex-direction: column;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    a {
      color: #1c2640;
      font-family: "Gilroy";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      margin: 12px 0;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 400px) {
    a {
      color: #1c2640;
      font-family: "Gilroy";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      margin: 7px 0;
      opacity: 1;
    }
  }
`;
