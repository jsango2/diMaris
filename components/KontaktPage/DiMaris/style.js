import styled from "styled-components";

export const WrapAllDiMaris = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 200px;
  height: auto;
  padding: 40px 40px 80px 40px;
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  @media only screen and (max-width: 1100px) {
    padding: 0px;
  }
  @media only screen and (max-width: 650px) {
    padding: 0px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  min-width: 1340px;
  max-width: 1340px;
  margin: 0 auto;
  padding: 54px 0 0 25px;

  justify-content: space-between;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    padding: 0 25px 50px 0px;
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  width: 600px;
  height: 510px;
  overflow: hidden;
  border-radius: 3px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    width: 100vw;
    height: 60vw;
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  width: 634px;
  min-height: 200px;
  @media only screen and (max-width: 1100px) {
    padding: 30px 30px 40px 25px;
  }
`;
export const TopTitle = styled.h3`
  position: relative;
  z-index: 11;
  font-family: "Roboto Condensed";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: #f5faff;
  margin-bottom: 0;
  @media only screen and (max-width: 1300px) {
  }
`;
