import {
  WrapContent,
  Content,
  Photos,
  Photos2,
  WrapPhoto,
  UpTitle,
  Text,
  Title,
  PonudaLink,
  BlueLine,
  WrapAll,
  Zaposlenici,
  WrapZaposlenik,
  Social,
  WrapSocial,
  LjuskeBg,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/oNama/image1.png";
import { Textp, TitleH2, TitleH5 } from "../../../styles/globalStyle.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import parse from "html-react-parser";
import { useInView } from "react-intersection-observer";
function Content1() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <LjuskeBg />
      <WrapContent ref={ref} className={` ${inView ? "inView" : "outView"}`}>
        <Content>
          <BlueLine />

          <TitleH2>{t.DiMaris.content1Naslov}</TitleH2>
          <Textp>{parse(t.DiMaris.content1Text)}</Textp>
          <Social>
            <WrapSocial href="https://www.instagram.com/dimaris_croatia">
              <Image
                src="/diMaris/instagramIcon.svg"
                alt="Instagram"
                layout="fill"
                objectFit="contain"
              />
            </WrapSocial>
            <WrapSocial href="https://www.facebook.com/dimaris.hr/">
              <Image
                src="/diMaris/facebookIcon.svg"
                alt="Facebook"
                layout="fill"
                objectFit="contain"
              />
            </WrapSocial>
          </Social>
        </Content>
        <Photos>
          <WrapPhoto>
            <Image
              src="/section1.png"
              alt="diMaris shop"
              layout="fill"
              objectFit="cover"
            />
          </WrapPhoto>
        </Photos>
      </WrapContent>
      <Zaposlenici>
        <WrapZaposlenik>
          <Image
            src="/diMaris/Kristina.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </WrapZaposlenik>{" "}
        <WrapZaposlenik>
          <Image
            src="/diMaris/Mateo.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </WrapZaposlenik>{" "}
        <WrapZaposlenik>
          <Image
            src="/diMaris/Predo.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
          />
        </WrapZaposlenik>{" "}
        <WrapZaposlenik>
          <Image
            src="/diMaris/Zvone.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
          />
        </WrapZaposlenik>
      </Zaposlenici>
    </WrapAll>
  );
}

export default Content1;
