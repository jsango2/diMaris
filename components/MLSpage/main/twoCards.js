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

const TwoCards = () => {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  const size = useWindowSize();

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const size = useWindowSize();

  return (
    <WrapTwoCards ref={ref}>
      <BgMLS percentage={percentage} />
      <WrapKartica2>
        <Content>
          <BlueLine />
          <UpTitle>{t.MLS.modernaFlota} </UpTitle>
          <Title>{t.MLS.zastoMLS} </Title>
          <Text>{t.MLS.text1}</Text>
        </Content>
      </WrapKartica2>
      <WrapKartica2>
        <Content>
          <BlueLine />
          <UpTitle>{t.MLS.telematskiSustav} </UpTitle>
          <Title>{t.MLS.sigurnost} </Title>
          <Text>{t.MLS.text2}</Text>
        </Content>
      </WrapKartica2>
    </WrapTwoCards>
  );
};

export default TwoCards;
