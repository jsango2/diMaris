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
  WrapAll2,
  Zaposlenici,
  WrapZaposlenik,
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
function Content2() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll2>
      <LjuskeBg />
      <WrapContent ref={ref} className={` ${inView ? "inView" : "outView"}`}>
        <Photos2>
          <WrapPhoto>
            <Image
              src="/diMarisContent1Img.png"
              alt="diMaris shop"
              layout="fill"
              objectFit="cover"
            />
          </WrapPhoto>
        </Photos2>
        <Content>
          <BlueLine />

          <TitleH2>{t.DiMaris.content2Naslov}</TitleH2>
          <Textp>{parse(t.DiMaris.content2Text)}</Textp>
        </Content>
      </WrapContent>
    </WrapAll2>
  );
}

export default Content2;
