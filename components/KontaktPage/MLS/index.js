import { WrapAllDiMaris, WrapContent, Photo, Data } from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import {
  BlueLine,
  GoogleButton,
  Text,
  Title,
  WrapText,
} from "../Hero/style.js";
import { TopTitle } from "../../HorecaPage/Mapa/style.js";

function MLS() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllDiMaris>
      <WrapContent>
        <Data>
          <WrapText>
            <BlueLine />
            <TopTitle>{t.Kontakt.logistika}</TopTitle>
            <Title>MLS</Title>
            <Text>{parse(t.Kontakt.MLSdata)}</Text>
            <GoogleButton>{t.Kontakt.uputeGoogleMaps}</GoogleButton>
          </WrapText>
        </Data>
        <Photo>
          <Image src="/MLSKontaktPage.png" layout="fill" objectFit="cover" />
        </Photo>
      </WrapContent>
    </WrapAllDiMaris>
  );
}

export default MLS;
