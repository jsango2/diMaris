import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  BlueLine,
  Photo1,
  Photo2,
  WrapKategorije,
  WrapKartica,
  WrapKartica2,
  WrapTwoCards,
  Content,
  VideoFrame,
  Kategorizacija,
  Teret,
  BlueDivider,
  Naslov,
  WrapIkone,
  IkonaiText,
  Ikona,
  WrapContent,
  TextIspod,
  BottomSlider,
  Truck,
  OverlayTeret,
  BgMLS,
  ImageAbsolute,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import Button from "../../buttonBlue/Button.js";
import MlsMapa from "../Mapa/index.js";
import Brojke from "../brojke/brojke.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kategorija from "../kategorija/index.js";
import Kontakt from "../kontakt/index.js";
import useWindowSize from "../../helper/usewindowsize.js";
import parse from "html-react-parser";
import { useScrollPercentage } from "react-scroll-percentage";
import ParallaxTruck from "./parallaxTruck.js";
import { useInView } from "react-intersection-observer";
import TwoCards from "./twoCards.js";

const TeretComp = () => {
  const size = useWindowSize();

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Teret ref={ref} className={` ${inView ? "inView" : "outView"}`}>
      <OverlayTeret />
      <WrapContent>
        <BlueDivider />
        <Naslov>{t.MLS.teretKojiPrecozime}</Naslov>
        <WrapIkone>
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame.svg" layout="fill" />
            </Ikona>
            <TextIspod>{t.MLS.ikona1}</TextIspod>
          </IkonaiText>
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame-1.svg" layout="fill" />
            </Ikona>
            <TextIspod> {t.MLS.ikona2}</TextIspod>
          </IkonaiText>{" "}
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame-3.svg" layout="fill" />
            </Ikona>
            <TextIspod>{t.MLS.ikona3}</TextIspod>
          </IkonaiText>{" "}
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame-7.svg" layout="fill" />
            </Ikona>
            <TextIspod> {t.MLS.ikona4}</TextIspod>
          </IkonaiText>{" "}
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame-2.svg" layout="fill" />
            </Ikona>
            <TextIspod> {t.MLS.ikona5}</TextIspod>
          </IkonaiText>{" "}
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame-6.svg" layout="fill" />
            </Ikona>
            <TextIspod> {t.MLS.ikona6}</TextIspod>
          </IkonaiText>{" "}
          <IkonaiText>
            <Ikona>
              <Image src="/MLSpageIkone/Frame-4.svg" layout="fill" />
            </Ikona>
            <TextIspod> {t.MLS.ikona7}</TextIspod>
          </IkonaiText>
        </WrapIkone>
      </WrapContent>
    </Teret>
  );
};

export default TeretComp;
