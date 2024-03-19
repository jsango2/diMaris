import {
  WrapLokacija,
  Photo,
  Data,
  NaziviAdresa,
  Tel,
  Voditelj,
  RadnoVrijeme,
  GoogleButton,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import parse from "html-react-parser";
import { useInView } from "react-intersection-observer";

function Lokacija({
  lokacija,
  ulica,
  grad,
  tel,
  voditelj,
  radnoVrijeme1,
  radnoVrijeme2,
  radnoVrijeme3,
  google,
  photo,
}) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  console.log(lokacija);
  return (
    <WrapLokacija ref={ref} className={` ${inView ? "inView" : "outView"}`}>
      <Photo>
        <Image src={photo} layout="fill" objectFit="cover" />
      </Photo>
      <Data>
        <NaziviAdresa>
          {lokacija}
          <br />
          {ulica}
          <br />
          {grad}
          <br />
        </NaziviAdresa>
        {tel !== "-" && <Tel>{tel}</Tel>}
        {voditelj !== "-" && <Voditelj>{voditelj}</Voditelj>}

        <RadnoVrijeme>
          Radno vrijeme:
          <br />
          {radnoVrijeme1 !== "-" && radnoVrijeme1}
          <br />
          {radnoVrijeme2 !== "-" && radnoVrijeme2}
          <br />
          {radnoVrijeme3 !== "-" && radnoVrijeme3}
        </RadnoVrijeme>
        <GoogleButton href={google}>Upute Google Maps</GoogleButton>
      </Data>
    </WrapLokacija>
  );
}

export default Lokacija;
