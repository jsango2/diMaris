import Link from "next/link";
import styled from "styled-components";

export const WrapAll = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 8;
  width: 100%;
  height: auto;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #374772 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  /* overflow: hidden; */
  @media only screen and (max-width: 430px) {
    height: auto;
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 917px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const WrapLogo = styled.div`
  position: relative;
  z-index: 10;
  width: 280px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("/DiMarisLogoHeader.svg");
  background-position: center;
  background-size: 200px 100px;
  background-repeat: no-repeat;
  &.inView {
    top: 0px;
    opacity: 1;
    transition: all 2s ease-out;
  }
  &.outView {
    top: 25px;
    opacity: 0;
  }
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Social = styled.div`
  position: relative;
  z-index: 10;
  width: 175px;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const Copy = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media only screen and (max-width: 770px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const CopyLink = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* SUNRISE/Sunray */

  color: #f5faff;
  cursor: pointer;
  margin: 0 10px;
  strong {
    margin-left: 5px;
  }
  @media only screen and (max-width: 770px) {
    margin: 5px 10px;
  }
`;
export const BlueLine = styled.div`
  position: relative;
  z-index: 10;
  height: 3px;
  width: 146px;
  background-color: #4299c8;
  margin: 85px auto 25px auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  margin: 0 auto 90px auto;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Name = styled.h2`
  font-family: "Metrophobic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin: 17px auto 45px auto;
  @media only screen and (max-width: 770px) {
    margin: 17px auto 0px auto;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const SubName = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */
  text-transform: uppercase;
  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-bottom: 15px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapColumns = styled.div`
  position: relative;
  z-index: 10;
  width: 1190px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px auto 0 auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const MainLinks = styled.div`
  position: relative;
  z-index: 10;
  max-width: 780px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 153%;
    margin: 16px;
    bottom: 0;
    transition: bottom 0.3s ease-in-out;
    &:hover {
      /* font-weight: 600;
      transform: scale(1.02); */
      bottom: 3px;
    }
  }
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;
export const SubLinks = styled.div`
  position: relative;
  z-index: 10;
  width: 437px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
  @media only screen and (max-width: 770px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 65px;
    min-width: 430px;
  }
  @media only screen and (max-width: 430px) {
    justify-content: center;
    flex-wrap: nowrap;
    margin-top: 65px;
    min-width: 100%;
  }
`;
export const SingleLink = styled(Link)`
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  cursor: pointer;
  &div {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
  }
`;
export const SingleLink2 = styled(Link)`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 153%;

  /* or 21px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0;

  cursor: pointer;
  a {
    margin: 6px 0;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
    margin: 3px 0;
  }
`;
export const LinkChild = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin: 6px 0;
  cursor: pointer;
  &div {
    position: relative;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
  }
  bottom: 0;
  transition: bottom 0.3s ease-in-out;
  &:hover {
    /* font-weight: 600;
    transform: scale(1.02); */
    bottom: 3px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
    margin: 3px 0;
  }
`;
export const Column = styled.div`
  position: relative;
  z-index: 10;
  width: 500px;
  height: auto;

  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 153%;
    margin: 5px 0;
    bottom: 0;
    transition: bottom 0.3s ease-in-out;
    &:hover {
      /* font-weight: 600;
      transform: scale(1.02); */
      bottom: 3px;
    }
  }

  @media only screen and (max-width: 770px) {
    width: 140px;
  }
  @media only screen and (max-width: 430px) {
    width: 162px;
    margin-left: 45px;
  }
`;
export const Column2 = styled(Column)`
  @media only screen and (max-width: 430px) {
    margin-left: 5px;
    flex-direction: column;
  }
`;
export const ColumnSocial = styled.div`
  position: relative;
  z-index: 10;
  width: 500px;
  height: auto;

  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 153%;
    margin: 5px 0;
    bottom: 0;
    transition: bottom 0.3s ease-in-out;
    &:hover {
      /* font-weight: 600;
      transform: scale(1.02); */
      bottom: 3px;
    }
  }

  @media only screen and (max-width: 770px) {
    width: 140px;
  }
  @media only screen and (max-width: 430px) {
    width: 162px;
    margin-left: 45px;
  }
`;
export const Divider = styled.div`
  position: relative;
  z-index: 10;
  width: 147px;
  height: 2px;
  background-color: #b5d3e3;
  margin: 5px auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const Fish1 = styled.div`
  position: absolute;
  z-index: 10;
  width: 400px;
  height: 300px;
  top: 60px;

  left: 100px;
  background: url(/footerFish.png);
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: 600px) {
  }
`;
export const WrapCerts = styled.div`
  position: relative;
  z-index: 10;
  width: 250px;
  margin-top: 40px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  }
`;

export const Kontakt = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
`;
