import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 251px;
  height: 370px;
  padding-top: 60px;
  padding-left: 39px;
  padding-right: 25px;
  border: 1px solid var(--color-sunrise-grey);
  background: linear-gradient(
    0deg,
    rgba(22, 29, 50, 0.04) 0%,
    rgba(26, 35, 59, 0) 99.48%
  );
  background: linear-gradient(
    ${(props) =>
      props.gradient === "1"
        ? ` 0deg,
    rgba(22, 29, 50, 0.04) 0%,
    rgba(26, 35, 59, 0) 99.48%`
        : ` 180deg,
    rgba(22, 29, 50, 0.04) 0%,
    rgba(26, 35, 59, 0) 99.48%`}
  );
  margin: 0 10px;
  @media only screen and (max-width: 1300px) {
  }
`;

export const Graphic = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  margin-bottom: 23px;
  @media only screen and (max-width: 1000px) {
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  width: 2px;
  height: 60px;
  background: #4299c8;
  left: 0;
  top: 165px;
  @media only screen and (max-width: 1000px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 10;
  color: var(--color-dark-Charcoal);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 15px;
  text-transform: uppercase;
  @media only screen and (max-width: 1000px) {
    /* font-size: 34px;
    text-transform: none; */
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 10;
  color: var(--color-sunrise-text-grey);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;
