import {
  WrapAllContactData,
  WrapContent,
  Photo,
  Data,
  Ceo,
  WrapText,
  Ime,
  Pozicija,
  Funkcija,
  Email,
  Block,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";

function ContactData({ kontakti }) {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllContactData>
      <WrapContent>
        <Ceo>
          <Photo></Photo>
          <WrapText>
            <Ime>{kontakti.prviKontakt.imeIPrezime}</Ime>
            <Pozicija>
              {locale === "hr"
                ? kontakti.prviKontakt.funkcija
                : kontakti.prviKontakt.funkcijaEng}
            </Pozicija>
          </WrapText>
        </Ceo>
        <Data>
          {kontakti.ostaliKontakti.map((kontakt) => (
            <Block key={kontakt.imeIPrezime}>
              <Ime>{kontakt.imeIPrezime}, </Ime>
              <Funkcija>
                {" "}
                {locale === "hr" ? kontakt.funkcija : kontakt.funkcijaEng}
              </Funkcija>
              <Email href={`mailto:${kontakt.email}?subject=upit`}>
                {kontakt.email}
              </Email>
              <br />
              {kontakt.brojTelefona !== null && (
                <Email href={`tel:${kontakt.brojTelefona}`}>
                  {kontakt.brojTelefona}
                </Email>
              )}
            </Block>
          ))}
        </Data>
      </WrapContent>
    </WrapAllContactData>
  );
}

export default ContactData;
