import {
  WrapKontakt,
  WrapContent,
  Naslov,
  Grid,
  PodNaslov,
  Block,
  Adresa,
  Grad,
  RadnoVrijeme,
  WrapEmail,
  GoogleButton,
  Phone,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { BlueDivider } from "../main/style.js";
import { mlsKontaktData } from "../../../mlsKontaktData.js";
import Button from "../../buttonBlue/Button.js";
import { useInView } from "react-intersection-observer";
function Kontakt({ photo, text }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const { locale } = useRouter();
  const router = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapKontakt id="kontakt">
      <WrapContent>
        {router.pathname === "/MLS" && (
          <>
            <BlueDivider />
            <Naslov>{t.MLS.kontaktirajteNas}</Naslov>
            <PodNaslov>{t.MLS.raspored}</PodNaslov>
            <Button
              bgcolor="#4299C8"
              color="#FFFFFF"
              width="226px"
              text={t.MLS.zatrazitePonudu}
              linkTo="/o-nama"
            />
          </>
        )}
        <Grid>
          {mlsKontaktData.map((x) => (
            <Block key={x.LOKACIJA}>
              <Grad>{locale === "hr" ? x.LOKACIJA : x.ENG}</Grad>
              <Adresa>
                <div style={{ margin: 0 }}>{x.ULICA}</div>

                {locale === "hr" ? x["GRAD, DRŽAVA"] : x["GRAD, DRŽAVA (ENG)"]}
                <br />
                <Phone href={`tel:${x["BROJ TELEFONA"]}`}>
                  {x["BROJ TELEFONA"]}
                </Phone>
                <br />
                <WrapEmail href={`mailto:${x.EMAIL}?subject=MLS upit`}>
                  <Image src="/letter.svg" width={15} height={15} />

                  <div style={{ marginLeft: "10px", color: "#1c2640" }}>
                    {x.EMAIL}
                  </div>
                </WrapEmail>
              </Adresa>
              <RadnoVrijeme>
                {t.MLS.radnoVrijeme}
                <br /> {t.MLS.ponFri}: {x["Ponedjeljak-petak"]}
                <br /> {t.MLS.sat}: {x.Subota} <br />
              </RadnoVrijeme>
              <GoogleButton
                href={x["Upute Google Maps (link na google poziciju)"]}
              >
                {t.MLS.upute}
              </GoogleButton>
            </Block>
          ))}
        </Grid>
      </WrapContent>
    </WrapKontakt>
  );
}

export default Kontakt;
