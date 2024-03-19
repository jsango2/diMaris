import {
  WrapMapa,
  MapContent,
  Geo,
  UpTitleMapa,
  TitleMapa,
  TextMapa,
} from "./style.js";

import Image from "next/image";
import Button from "../buttonBlue/Button.js";
import Link from "next/link";

function Mapa() {
  return (
    <WrapMapa>
      <MapContent>
        <UpTitleMapa>DISTRIBUTIVNI CENTRI U HRVATSKOJ</UpTitleMapa>
        <TitleMapa>
          Svaki dan dostavljamo na više od 400 prodajnih mjesta u Hrvatskoj
        </TitleMapa>
        <TextMapa>
          3 distributivna centara raspoređena od Rijeke do Dubrovnika i partneri
          u Zagrebu i Splitu nam omogućuju optimalnu kapilarnost, a obnovljena
          flota od 23 kamiona hladnjača nam jamči siguran hladni lanac i brze
          isporuke. <br />
          <br /> Uz našu logističku podršku možete bolje planirati svoje zalihe
          i time ostvariti uštede.
        </TextMapa>
        <Button
          bgColor="#4299C8"
          color="#FFFFFF"
          width="223px"
          text="Kontakti regionalnih
          prodajnih centara"
          linkTo="/o-nama"
        />
      </MapContent>
      <Geo>MAPA</Geo>
    </WrapMapa>
  );
}

export default Mapa;
