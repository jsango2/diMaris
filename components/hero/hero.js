import {
  ContentWrap,
  HeroTitle,
  HeroWrap,
  GradientContainer,
  Title,
  SubTitle,
  WrapText,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../helper/usewindowsize";
import { Link as Veza } from "react-scroll";

import Image from "next/image.js";
import { useInView } from "react-intersection-observer";
import parse from "html-react-parser";
import { useRouter } from "next-translate-routes";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
const Hero = ({ toggleYT }) => {
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <>
      <HeroWrap ref={ref}>
        {/* <Image src="/HERO.webp" layout="fill" objectFit="cover" /> */}
        <video
          autoPlay
          muted
          loop="loop"
          className="videoHero"
          playsInline
          poster="/heroPosterSm.webp"
        >
          <source src="/heroVideo2.mov" type="video/mp4" />
        </video>

        {/* <ContentWrap>
          <Content toggleYT={toggleYT} />
        </ContentWrap> */}
        <GradientContainer
          className={`jure ${inView ? "inViewHero" : "outViewHero"}`}
        >
          <WrapText>
            <Title ref={ref}>{parse(t.Hero.title)}</Title>
            <SubTitle>{t.Hero.description}</SubTitle>
          </WrapText>
        </GradientContainer>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
