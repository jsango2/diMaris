import styled from "styled-components";

export const WrapAll = styled.section`
  box-sizing: border-box;
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 40px;
  color: #1c2640;
  font-family: "Gilroy", sans-serif;
  scroll-margin-top: 80px;
  @media only screen and (max-width: 750px) {
    padding: 50px 16px;
  }
`;

export const BlueLine = styled.div`
  width: 85px;
  height: 3px;
  background-color: #4299c8;
  margin: 0 auto 25px auto;
`;

export const Naslov = styled.h2`
  margin: 0 0 40px 0;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 110%;
  @media only screen and (max-width: 750px) {
    font-size: 30px;
    margin-bottom: 25px;
  }
`;

export const Poslovnice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const PoslovnicaButton = styled.button`
  border: 1px solid #4299c8;
  border-radius: 6px;
  padding: 10px 16px;
  background: ${(p) => (p.$active ? "#4299c8" : "#fff")};
  color: ${(p) => (p.$active ? "#fff" : "#1c2640")};
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  line-height: 120%;
  cursor: pointer;
  text-align: left;
  span {
    display: block;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.8;
    margin-top: 2px;
  }
  &:focus-visible {
    outline: 2px solid #1c2640;
    outline-offset: 2px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

export const InfoText = styled.div`
  font-size: 15px;
  line-height: 150%;
  strong {
    font-weight: 600;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  label {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    gap: 4px;
  }
  select,
  input {
    height: 45px;
    border: 1px solid #c9d3e0;
    border-radius: 6px;
    padding: 0 12px;
    font-family: inherit;
    font-size: 15px;
    color: #1c2640;
    background: #fff;
    max-width: 100%;
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
    label,
    select,
    input {
      width: 100%;
    }
  }
`;

export const DownloadButton = styled.a`
  height: 45px;
  padding: 0 22px;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #4299c8;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const TableWrap = styled.div`
  width: 100%;
  max-height: 600px;
  overflow: auto;
  border: 1px solid #e3e8ef;
  border-radius: 6px;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  th,
  td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #eef1f5;
    vertical-align: top;
  }
  th {
    position: sticky;
    top: 0;
    background: #1c2640;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
  }
  td.num,
  th.num {
    text-align: right;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  td.sidrena {
    font-weight: 600;
  }
  tbody tr:nth-child(even) {
    background: #f7f9fb;
  }
`;

export const Napomena = styled.p`
  margin: 16px 0 0 0;
  font-size: 13px;
  opacity: 0.75;
`;

export const Poruka = styled.p`
  text-align: center;
  font-size: 16px;
  padding: 30px 0;
`;
