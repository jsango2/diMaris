import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: white;
  padding-top: 85px;
  padding-bottom: 0px;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
    padding-bottom: 45px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(21, 28, 50, 0.6);
  top: 0;
  @media only screen and (max-width: 850px) {
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
  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */

  @media only screen and (max-width: 430px) {
    font-size: 36px;
  }
`;
export const OverlayTop = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 432px;
  top: 0;
  background: linear-gradient(180deg, #111729 0.76%, rgba(21, 28, 50, 0) 100%);

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  width: 1300px;
  justify-content: space-between;
  @media only screen and (max-width: 1100px) {
    padding-top: 40px;
    height: auto;
    flex-direction: column;
    width: 95vw;
    align-items: center;
  }
`;
