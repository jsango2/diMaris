import styled from "styled-components";

export const WrapKategorija = styled.div`
  position: relative;
  z-index: 10;
  width: 380px;
  min-width: 380px;
  height: 470px;
  border: 1px solid #f5faff;

  background: linear-gradient(180deg, #bdcbe629 0%, #e1e7f538 100%);
  @media only screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 430px) {
    min-width: unset;
    height: auto;
    width: 100vw;
    margin-bottom: 0;
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
  padding: 25px 30px 45px 30px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
