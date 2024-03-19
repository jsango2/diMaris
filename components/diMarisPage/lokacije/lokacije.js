import {
  WrapContent,
  WrapAll,
  Overlay,
  Naslov,
  ButtonLeft,
  ButtonRight,
  BlueLine,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import parse from "html-react-parser";
import Lokacija from "./lokacija.js";
import { diMarisKontaktData } from "../../../diMarisKontaktData.js";
import { LjuskeBg } from "../content1/style.js";
function Lokacije() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll id="lokacije">
      <LjuskeBg />
      <BlueLine />
      <Naslov>LOKACIJE I KONTAKTI</Naslov>
      {/* <Overlay /> */}
      <WrapContent>
        {diMarisKontaktData.map((kontakt) => (
          <Lokacija
            lokacija={
              locale === "hr"
                ? kontakt["Lokacija ribarnice"]
                : kontakt["Lokacija ribarnice ENG"]
            }
            ulica={kontakt.Ulica}
            grad={kontakt["Poštanski broj i grad"]}
            tel={kontakt.TEL}
            voditelj={kontakt.Voditelj}
            radnoVrijeme1={
              locale === "hr"
                ? kontakt["Radno vrijeme 1"]
                : kontakt["ENG - Radno vrijeme 1"]
            }
            radnoVrijeme2={
              locale === "hr"
                ? kontakt["Radno vrijeme 2"]
                : kontakt["ENG - Radno vrijeme 2"]
            }
            radnoVrijeme3={
              locale === "hr"
                ? kontakt["Radno vrijeme 3"]
                : kontakt["ENG - Radno vrijeme 3"]
            }
            google={kontakt["Google lokacija"]}
            photo={kontakt["Photo Link"]}
          />
        ))}
      </WrapContent>
    </WrapAll>
  );
}

export default Lokacije;
