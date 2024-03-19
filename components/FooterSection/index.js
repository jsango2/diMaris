import Logos from "../ProLogMapSection/logos.js";
import {
  WrapAll,
  Container,
  Name,
  MainLinks,
  SingleLink,
  WrapLogo,
  SingleLink2,
  SubLinks,
  Column,
  Column2,
  ColumnIkone,
  ColumnSocial,
  SubName,
  Social,
  Copy,
  CopyLink,
  Fish1,
  LinkChild,
} from "./style.js";
import MarikomercLogo from "../../assets/svg/marikomerc_logo_footer.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import Location from "../../assets/svg/Location.svg";
import Email from "../../assets/svg/Email.svg";
import useWindowSize from "../helper/usewindowsize";
import { useInView } from "react-intersection-observer";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useRouter } from "next/router.js";
import Image from "next/image.js";
import { useContext } from "react";
import { AppContext } from "../../pages/_app.js";
function FooterSection() {
  const [category, setCategory] = useContext(AppContext);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <WrapAll>
      <Fish1 />
      <Container>
        <WrapLogo
          ref={ref}
          className={` ${inView ? "inView" : "outView"}`}
        ></WrapLogo>
        {/* 
        <MainLinks>
          <SingleLink href="/o-nama">{t.Linkovi.onama}</SingleLink>
          <SingleLink href="/proizvodi">{t.Linkovi.proizvodi}</SingleLink>
          <SingleLink href="/novosti">{t.Linkovi.novosti}</SingleLink>
          <SingleLink href="/marikomerc-kvalitete">
            {t.Linkovi.kvaliteta}
          </SingleLink>
          <SingleLink href="/karijere">{t.Linkovi.karijere}</SingleLink>
          <SingleLink href="/horeca">{t.Linkovi.horecaSuradnja}</SingleLink>
          <SingleLink href="/kontakt">{t.Linkovi.kontakt}</SingleLink>
        </MainLinks> */}
        <SubLinks>
          <Column2>
            <SubName>{t.Linkovi.claniceGrupe}</SubName>
            <SingleLink2 href="/">Marikomerc</SingleLink2>
            <SingleLink2 href="/">
              {locale === "hr" ? "Di Maris Ribarnice" : "Di Maris Fishmarket"}
            </SingleLink2>
            <SingleLink2 href="/MLS">MLS Logistika</SingleLink2>
          </Column2>
          {size.width > 770 && (
            <ColumnSocial>
              <SubName>{t.Linkovi.kontaktirajteNas}</SubName>
              <Social>
                <a href="www.instagram.com">
                  <Instagram />
                </a>
                <a href="www.facebook.com">
                  <Facebook />
                </a>
                <a href="www.linkedin.com">
                  <Linkedin />
                </a>
                <a href="www.google.com">
                  <Location />
                </a>
                <a href="mailto:mls@mls.hr">
                  <Email />
                </a>
              </Social>
            </ColumnSocial>
          )}
        </SubLinks>
        {size.width < 770 && (
          <ColumnSocial
            style={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Social>
              <a href="www.instagram.com">
                <Instagram />
              </a>
              <a href="www.instagram.com">
                <Facebook />
              </a>
              <a href="www.instagram.com">
                <Linkedin />
              </a>
              <a href="www.instagram.com">
                <Location />
              </a>
              <a href="www.instagram.com">
                <Email />
              </a>
            </Social>
          </ColumnSocial>
        )}
        <Copy>
          <CopyLink>© 2023 MARIKOMERC</CopyLink>
          <CopyLink>
            Web design <strong>SUTRA</strong>{" "}
          </CopyLink>
        </Copy>
      </Container>
    </WrapAll>
  );
}

export default FooterSection;
