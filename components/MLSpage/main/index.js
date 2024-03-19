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
import TeretComp from "./teret.js";

const Main = () => {
  const size = useWindowSize();

  const settings = {
    // dots: false,
    // infinite: true,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: "testimonialSlider",
    speed: 3500,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 6500,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 3500,
        },
      },
    ],
  };
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
    <WrapAll>
      <WrapContent>
        <WrapKartica ref={ref} className={` ${inView ? "inView" : "outView"}`}>
          <Content>
            <BlueLine />
            <UpTitle>{t.MLS.modernaLogistika}</UpTitle>
            <Title>{t.MLS.naslov1}</Title>
            <Text>{parse(t.MLS.textTop)}</Text>
            <Button
              bgcolor="#4299C8"
              color="#FFFFFF"
              width="226px"
              text={t.MLS.zatrazitePonudu}
              linkTo="/o-nama"
            ></Button>
          </Content>
          <Photo1 bg="/MLSpageHero.webp">
            <BottomSlider>
              <Slider {...settings}>
                <Truck>
                  SCANIA S650A4X2NB - {locale === "hr" ? "Tegljač" : "Truck"}
                </Truck>
                <Truck>
                  SCANIA S660 A4X2NB - {locale === "hr" ? "Tegljač" : "Truck"}
                </Truck>
                <Truck>
                  SCANIA S770A4X2NB - {locale === "hr" ? "Tegljač" : "Truck"}
                </Truck>
                <Truck>
                  VOLVO FH 62R -{" "}
                  {locale === "hr" ? "Tegljač" : "Refrigerated truck"}
                </Truck>
              </Slider>
            </BottomSlider>
          </Photo1>
        </WrapKartica>
      </WrapContent>
      <TeretComp />
      <WrapContent>
        <BlueDivider />
        <Kategorizacija>
          <Naslov> {t.MLS.naslov2}</Naslov>
        </Kategorizacija>
        <WrapKategorije>
          <Kategorija photo="/MLStruck1.png" text={t.MLS.card1} />
          <Kategorija photo="/MLStruck2.png" text={t.MLS.card2} />
          <Kategorija photo="/MLStruck3.png" text={t.MLS.card3} />
        </WrapKategorije>
        <MlsMapa />
        <TwoCards />
      </WrapContent>
      <Brojke />
      <ParallaxTruck />
      <Kontakt />
    </WrapAll>
  );
};

export default Main;
