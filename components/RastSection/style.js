import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 653px;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #253151 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    height: auto;
    padding: 165px 0 160px 0;
  }
  @media only screen and (max-width: 4300px) {
    height: auto;
  }
`;

export const WrapBg = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(21, 28, 50, 0.6);
  @media only screen and (max-width: 600px) {
  }
`;
export const OverlayTop = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 439px;
  top: 0;
  background: linear-gradient(180deg, #111729 0.76%, rgba(21, 28, 50, 0) 100%);
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  width: 1162px;
  height: 396px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 1200px) {
    width: 93%;
  }
  @media only screen and (max-width: 850px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  position: relative;
  z-index: 11;
  width: 425px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 58%;
    padding-right: 20px;
  }
  @media only screen and (max-width: 850px) {
    margin-top: 120px;
    padding-right: 0;
    align-items: center;
    width: 90%;
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  top: 10px;
  left: -30px;
  z-index: 11;
  width: 6px;
  height: 100px;
  background-color: #4299c8;
  @media only screen and (max-width: 850px) {
    top: -50px;
    left: 50%;
    z-index: 11;

    transform: translate(-50%, 0);
    width: 116px;
    height: 5px;
  }
`;
export const Right = styled.div`
  position: relative;
  top: -20px;
  z-index: 11;
  width: 590px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 500px;
  }

  @media only screen and (max-width: 850px) {
    width: 90%;
  }
`;
export const SingleFact = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* overflow: hidden; */
  @media only screen and (max-width: 430px) {
    width: 100%;
    height: 80px;
  }
`;
export const Wrap = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  height: 77px;
  /* overflow: hidden; */
  @media only screen and (max-width: 430px) {
  }
`;

export const Title = styled.h3`
  position: relative;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */
  margin-bottom: 10px;
  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    text-align: center;
    font-size: 14px;
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 850px) {
    font-weight: 700;
    font-size: 21px;
    line-height: 120%;
    font-size: 21px;

    text-align: center;
  }
`;

export const Number = styled.h2`
  position: relative;
  width: 200px;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* identical to box height, or 77px */
  margin-right: 33px;
  margin-top: 0px;
  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */

  @media only screen and (max-width: 430px) {
    width: 156px;
    font-size: 36px;
  }
`;

export const TextFact = styled.p`
  position: relative;
  width: 340px;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
  }
`;

export const Line = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 1px;
  background-color: white;

  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Elipse = styled.div`
  position: absolute;
  width: 120%;
  height: 800px;
  bottom: -400px;
  z-index: 22;
  clip-path: ellipse(50% 10% at 50% 50%);
  background-color: white;
  @media screen and (max-width: 750px) {
    /* width: 151%;
    top: -95px; */
  }
  @media screen and (max-width: 440px) {
    /* top: -80px; */
  }
`;
