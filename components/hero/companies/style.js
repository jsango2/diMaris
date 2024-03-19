import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  height: 111px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: radial-gradient(
    79.54% 79.54% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  padding: 0px 170px;
  @media only screen and (max-width: 1200px) {
    padding: 0px 4%;
  }
  @media only screen and (max-width: 950px) {
    display: none;
    /* height: 556px; */
  }
`;
export const Company = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  /* margin: 0 85px; */
  cursor: pointer;
  text-decoration: none;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
  }
`;
export const Name = styled.div`
  position: relative;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.875px;
  text-transform: uppercase;
  /* SUNRISE/Sunray */
  width: 160px;
  color: #f5faff;
  text-align: center;
  opacity: 0.5;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
  }
`;
export const Sub = styled.div`
  position: relative;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  /* identical to box height */

  text-align: center;
  letter-spacing: 0.875px;

  /* SUNRISE/Sunray */

  color: #f5faff;

  opacity: 0.5;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
  }
`;
export const Sub2 = styled.div`
  position: relative;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.875px;
  word-break: keep-all;
  /* SUNRISE/Light Coral */
  width: 180px;
  color: #b5d3e3;
  text-align: center;
  opacity: 0.5;
  margin-top: 10px;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
  }
`;
