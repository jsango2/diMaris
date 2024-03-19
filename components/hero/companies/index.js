import React from "react";
import { WrapAll, Company, Sub, Sub2, Name } from "./style.js";
import Image from "next/image";

function Companies() {
  return (
    <WrapAll>
      <Company href="https://www.perla.hr">
        <Name>Perla</Name>
        <Sub>Biser mora</Sub>
        <Sub2>Retail proizvodi</Sub2>
      </Company>
      <Company>
        <Name>di maris</Name>
        <Sub>ribarnice</Sub>
        <Sub2>Lanac ribarnica</Sub2>
      </Company>{" "}
      <Company>
        <Name>Perla</Name>
        <Sub>Horeca</Sub>
        <Sub2>Proizvodi za HORECA-u</Sub2>
      </Company>{" "}
      <Company>
        <Name>deli maris</Name>
        <Sub>FISH&CHIPS</Sub>
        <Sub2>lanac restorana brze hrane</Sub2>
      </Company>{" "}
      <Company>
        <Name>MLS</Name>
        <Sub>logistika</Sub>
        <Sub2>Tvrtka za logistiku</Sub2>
      </Company>
    </WrapAll>
  );
}

export default Companies;
