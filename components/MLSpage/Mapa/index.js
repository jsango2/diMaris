import {
  MapaWrapAll,
  MapaWrapTextBlock,
  MapaWrapKarta,
  MapaContent,
  TopTitle,
  Title,
  Text,
  Galeb1,
  Galeb2,
  Galeb3,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import parse from "html-react-parser";
import Button from "../../buttonBlue/Button.js";

function MlsMapa() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  const zoom = size.width < 650 ? 5.2 : 6.8;
  const lat = size.width < 650 ? 16.2 : 15.8;
  return (
    <MapaWrapAll>
      <MapaContent>
        <MapaWrapTextBlock>
          <TopTitle>{t.Horeca.topTitle}</TopTitle>
          <Title>{t.Horeca.Title}</Title>
          <Text>{parse(t.Horeca.Text)}</Text>
          {/* <Button>{t.Horeca.buttonText}</Button> */}
          <Button
            bgcolor="#4299C8"
            color="#FFFFFF"
            width="306px"
            text={t.Horeca.buttonText}
            linkTo="/o-nama"
            marginTop="40px"
          />
        </MapaWrapTextBlock>
        <MapaWrapKarta>
          {/* <iframe
            width="100%"
            height="100%"
            src={`https://api.mapbox.com/styles/v1/lovreperaic/ckx4qlojc09b014tdp3ao3vuw.html?title=false&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&zoomwheel=false#${zoom}/44.14/15.576`}
            title="MLS Mapa"
            style={{ border: "none" }}
          ></iframe> */}
          <iframe
            width="100%"
            height="100%"
            src={`https://api.mapbox.com/styles/v1/lovreperaic/clpsguohs01ag01r58v3y3q8h.html?title=false&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&zoomwheel=false#${zoom}/44.091/${lat}`}
            title="MLS FINAL v1"
            style={{ border: "none" }}
          ></iframe>
        </MapaWrapKarta>
      </MapaContent>
    </MapaWrapAll>
  );
}

export default MlsMapa;
