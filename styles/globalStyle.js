import styled from "styled-components";

export const TitleH1 = styled.h1`
  position: relative;
  z-index: 20;
  color: var(--color-boja-marikomerc-bijela);
  text-align: center;
  /* H1 */
  font-family: "Roboto Condensed", sans-serif;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 66px */
  text-transform: uppercase;

  @media only screen and (max-width: 1400px) {
    /* padding: 100px 0 70px 70px; */
  }
  @media only screen and (max-width: 650px) {
    /* padding: 0 0 70px 0; */
    font-size: 36px;

    /* height: 556px; */
  }
`;
export const TitleH2 = styled.h2`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  width: 95%;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */
  text-align: left;
  /* MK Plava */
  margin: 0;
  color: #1c2640;
  margin-bottom: 25px;
  @media only screen and (max-width: 1250px) {
    width: 90%;
    font-size: 40px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    line-height: 120%;
  }
`;
export const TitleH4 = styled.h4`
  position: relative;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  color: #000000;
  margin-bottom: 5px;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`;
export const TitleH5 = styled.h5`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;

  /* Black */
  margin-bottom: 15px;
  color: #161722;
  @media only screen and (max-width: 600px) {
  }
`;
export const Textp = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  margin-top: 0;
  color: #000000;
  width: 95%;
  margin-bottom: 40px;
  @media only screen and (max-width: 850px) {
    font-size: 16px;
    width: 90%;
  }
`;
export const TextB18 = styled.p`
  position: relative;
  z-index: 10;
  font-style: normal;
  /* or 22px */
  margin-top: 0;
  color: #000000;
  width: 95%;
  margin-bottom: 40px;
  font-size: 18px;
  font-family: "Gilroy";
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 123%;
  @media only screen and (max-width: 850px) {
    font-size: 16px;
    width: 90%;
  }
`;
//text style

// "h1": {
//   "font-size": "55px",
//   "font-family": "Roboto",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%",
//   "text-transform": "uppercase"
// },
// "h2": {
//   "font-size": "40px",
//   "font-family": "Roboto",
//   "font-weight": 600,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "h3": {
//   "font-size": "30px",
//   "font-family": "Roboto",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "h4": {
//   "font-size": "21px",
//   "font-family": "Roboto",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "h5-16-nadnaslov": {
//   "font-size": "16px",
//   "font-family": "Roboto Condensed",
//   "font-weight": 400,
//   "letter-spacing": "0em",
//   "text-transform": "uppercase"
// },
// "h6-16pt-naziv-proizvoda-(fat)": {
//   "font-size": "16px",
//   "font-family": "Roboto",
//   "font-weight": 600,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "b-18": {
//   "font-size": "18px",
//   "font-family": "Gilroy",
//   "font-weight": 400,
//   "letter-spacing": "0px",
//   "line-height": "129.99999523162842%"
// },
// "p": {
//   "font-size": "16px",
//   "font-family": "Gilroy",
//   "font-weight": 400,
//   "letter-spacing": "0px",
//   "line-height": "139.9999976158142%"
// },
// "t": {
//   "font-size": "12px",
//   "font-family": "Gilroy",
//   "font-weight": 600,
//   "letter-spacing": "0px",
//   "line-height": "139.9999976158142%",
//   "text-transform": "uppercase"
// },
// "latinski-jezik": {
//   "font-size": "14px",
//   "font-family": "Gilroy",
//   "font-weight": 400,
//   "font-style": "italic",
//   "letter-spacing": "0px",
//   "line-height": "152.99999713897705%"
// },
// "m-h1": {
//   "font-size": "36px",
//   "font-family": "Roboto",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "m-h2": {
//   "font-size": "26px",
//   "font-family": "Roboto",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "m-h3": {
//   "font-size": "20px",
//   "font-family": "Roboto",
//   "font-weight": 600,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "m-h4": {
//   "font-size": "18px",
//   "font-family": "Roboto",
//   "font-weight": 500,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "m-b": {
//   "font-size": "16px",
//   "font-family": "Gilroy",
//   "font-weight": 500,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "m-p": {
//   "font-size": "14px",
//   "font-family": "Gilroy",
//   "font-weight": 500,
//   "letter-spacing": "0px",
//   "line-height": "152.99999713897705%"
// },
// "m-t": {
//   "font-size": "12px",
//   "font-family": "Gilroy",
//   "font-weight": 600,
//   "letter-spacing": "0px",
//   "line-height": "139.9999976158142%"
// },
// "buttons": {
//   "font-size": "21px",
//   "font-family": "Gilroy",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "m-button": {
//   "font-size": "16px",
//   "font-family": "Gilroy",
//   "font-weight": 700,
//   "letter-spacing": "0px",
//   "line-height": "120.00000476837158%"
// },
// "h5-gilroy-30": {
//   "font-size": "34px",
//   "font-family": "Gilroy",
//   "font-weight": 700,
//   "letter-spacing": "0em"
// }
