import styled from "styled-components";

export const WrapButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 0;
  max-height: 53px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  justify-content: center;
  box-shadow: 0px 5px 8px rgba(28, 37, 44, 0.08);
  border-radius: 4px;
  /* Buttons */
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  color: #ffffff;

  /* or 25px */
  z-index: 10;
  cursor: pointer;
  /* SUNRISE / White */
  transition: all 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: ${(props) => props.color};
  }
  /* &:hover a {
    color: inherit;
  }
  &:hover {
    box-shadow: 3px 3px 5px 0px #2088b3;
  } */
  &:hover {
    background: var(--color-boja-tamnoplava-ocjena);
  }
  &:active {
    background: #4299c8;
    border: 1px solid #93f9ff;
  }
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;
